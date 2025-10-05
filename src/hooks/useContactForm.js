import { useState } from "react";

/**
 * Hook to handle contact form submission to the hotel API
 */
export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitEnquiry = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const requestBody = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    console.log("🌐 CONTACT API REQUEST: Sending enquiry to hotel API", {
      url: "https://secure.thecordishotelikeja.com/api/hotel/enquiries",
      body: requestBody
    });

    try {
      console.log("🚀 Making contact form API call to:", "https://secure.thecordishotelikeja.com/api/hotel/enquiries");

      const response = await fetch(
        "https://secure.thecordishotelikeja.com/api/hotel/enquiries",
        {
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Cache-Control": "no-cache",
          },
          body: JSON.stringify(requestBody),
          redirect: 'follow',
        }
      );

      console.log("📡 Contact Response status:", response.status);

      // Check if response is actually JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        console.error("❌ Contact Response is not JSON:", textResponse);
        throw new Error(`Expected JSON response but got ${contentType}. Response: ${textResponse.substring(0, 200)}...`);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === true) {
        setSuccess(true);
        console.log("🌐 CONTACT API SUCCESS: Enquiry submitted successfully", {
          message: data.message,
          source: "Live API"
        });
        return { success: true, message: data.message };
      } else {
        throw new Error(data.message || "Failed to submit enquiry");
      }
    } catch (err) {
      console.error("❌ CONTACT API FAILED:", {
        error: err.message,
        source: "API Error"
      });
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    loading,
    error,
    success,
    submitEnquiry,
    resetForm,
  };
};
