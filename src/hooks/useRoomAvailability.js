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

    try {
      const response = await fetch(
        "http://213.199.37.11:8443/api/hotel/availability",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            checkInDate: searchData.checkInDate,
            checkOutDate: searchData.checkOutDate,
            adultNo: searchData.adultNo || 1,
            childNo: searchData.childNo || 0,
            facilityTypeId: searchData.facilityTypeId || 1,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errorCode === 0) {
        setRooms(data.types || []);
        console.log("✅ Rooms fetched successfully:", data.types);
      } else {
        throw new Error(data.errorMessage || "Failed to fetch rooms");
      }
    } catch (err) {
      console.error("❌ Error fetching rooms:", err);
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
