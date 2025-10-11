import { useState } from "react";

/**
 * Hook to fetch room availability from the hotel API
 */
export const useRoomAvailability = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRooms = async (searchData) => {
    setLoading(true);
    setError(null);

    const requestBody = {
      checkInDate: searchData.checkInDate,
      checkOutDate: searchData.checkOutDate,
      adultNo: searchData.adultNo || 1,
      childNo: searchData.childNo || 0,
      facilityTypeId: searchData.facilityTypeId || 1,
    };

    console.log("🌐 API REQUEST: Sending to hotel API", {
      url: "https://secure.thecordishotelikeja.com/api/hotel/availability",
      body: requestBody
    });

    try {
      console.log("🚀 Making availability API call to:", "https://secure.thecordishotelikeja.com/api/hotel/availability");
      
      const response = await fetch(
        "https://secure.thecordishotelikeja.com/api/hotel/availability",
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
          redirect: 'follow', // Handle redirects properly
        }
      );

      console.log("📡 Availability Response status:", response.status);
      console.log("📡 Availability Response headers:", response.headers);
      
      // Check if response is actually JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const textResponse = await response.text();
        console.error("❌ Availability Response is not JSON:", textResponse);
        throw new Error(`Expected JSON response but got ${contentType}. Response: ${textResponse.substring(0, 200)}...`);
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errorCode === 0) {
        console.log("🌐 API RAW RESPONSE:", data);
        console.log("🌐 API TYPES RECEIVED:", data.types);
        setRooms(data.types || []);
        console.log("🌐 API SUCCESS: Room data fetched from server", {
          roomCount: data.types?.length || 0,
          source: "Live API",
          rooms: data.types?.map(room => ({
            roomType: room.roomType,
            roomTypeId: room.roomTypeId,
            available: room.available
          }))
        });
      } else {
        throw new Error(data.errorMessage || "Failed to fetch rooms");
      }
    } catch (err) {
      console.error("❌ API FAILED: Using fallback data", {
        error: err.message,
        source: "Static fallback"
      });
      setError(err.message);
      setRooms([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    rooms,
    loading,
    error,
    fetchRooms,
  };
};
