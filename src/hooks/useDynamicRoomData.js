import { useState, useEffect } from 'react';
import { useRoomAvailability } from './useRoomAvailability';
import { transformApiRoomsToRoomData } from '../util/api-room-transformer';
import { ROOMS } from '../util/room-data'; // Your static fallback

export const useDynamicRoomData = (searchParams = null) => {
  const [roomData, setRoomData] = useState(ROOMS); // Start with your static data
  const { rooms: apiRooms, loading, error, fetchRooms } = useRoomAvailability();

  useEffect(() => {
    if (searchParams) {
      // Add a small delay to debounce rapid calls
      const timeoutId = setTimeout(() => {
        fetchRooms(searchParams);
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [searchParams?.checkInDate, searchParams?.checkOutDate, searchParams?.adultNo, searchParams?.childNo]); // Only re-run when actual search values change

  useEffect(() => {
    if (apiRooms.length > 0) {
      // Transform API data to match your structure
      const transformedRooms = transformApiRoomsToRoomData(apiRooms);
      setRoomData(transformedRooms);
      // Only log once per unique data set
      if (JSON.stringify(transformedRooms) !== JSON.stringify(roomData)) {
        console.log("✅ DATA SOURCE: Using live API data", {
          roomCount: transformedRooms.length,
          source: "Live API"
        });
      }
    } else if (!loading && !searchParams) {
      // Use static data when no API call is made
      setRoomData(ROOMS);
      // Only log if switching from API to static
      if (roomData !== ROOMS) {
        console.log("📁 DATA SOURCE: Using static fallback data", {
          roomCount: ROOMS.length,
          source: "Static file"
        });
      }
    }
  }, [apiRooms, loading, searchParams]);

  return {
    ROOMS: roomData, // Same interface as your current ROOMS export
    loading,
    error,
    isFromApi: apiRooms.length > 0
  };
};
