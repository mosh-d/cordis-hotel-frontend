import { useState, useEffect } from 'react';
import { useRoomAvailability } from './useRoomAvailability';
import { transformApiRoomsToRoomData } from '../util/api-room-transformer';
import { ROOMS } from '../util/room-data'; // Your static fallback

export const useDynamicRoomData = (searchParams = null) => {
  const [roomData, setRoomData] = useState(ROOMS); // Start with your static data
  const { rooms: apiRooms, loading, error, fetchRooms } = useRoomAvailability();

  useEffect(() => {
    if (searchParams) {
      // Fetch from API when search params are provided
      fetchRooms(searchParams);
    }
  }, [searchParams]); // Removed fetchRooms to prevent infinite loop

  useEffect(() => {
    if (apiRooms.length > 0) {
      // Transform API data to match your structure
      const transformedRooms = transformApiRoomsToRoomData(apiRooms);
      setRoomData(transformedRooms);
    } else if (!loading && !searchParams) {
      // Use static data when no API call is made
      setRoomData(ROOMS);
    }
  }, [apiRooms, loading, searchParams]);

  return {
    ROOMS: roomData, // Same interface as your current ROOMS export
    loading,
    error,
    isFromApi: apiRooms.length > 0
  };
};
