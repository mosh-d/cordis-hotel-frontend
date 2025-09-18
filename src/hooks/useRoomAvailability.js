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
      const response = await fetch(
        "https://secure.thecordishotelikeja.com/api/hotel/availability  ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errorCode === 0) {
        setRooms(data.types || []);
        console.log("🌐 API SUCCESS: Room data fetched from server", {
          roomCount: data.types?.length || 0,
          source: "Live API"
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
