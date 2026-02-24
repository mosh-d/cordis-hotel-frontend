import { useState, useEffect } from 'react';
import { useRoomAvailability } from './useRoomAvailability';
import { transformApiRoomsToRoomData } from '../util/api-room-transformer';

export const useDynamicRoomData = (searchParams = null) => {
  const [roomData, setRoomData] = useState([]); // Start with empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { rooms: apiRooms, loading: apiLoading, error: apiError, fetchRooms } = useRoomAvailability();

  useEffect(() => {
    if (searchParams) {
      setLoading(true);
      fetchRooms(searchParams);
    }
  }, [searchParams?.checkInDate, searchParams?.checkOutDate, searchParams?.adultNo, searchParams?.childNo]);

  useEffect(() => {
    if (apiRooms.length > 0) {
      // Use the transformer to convert API data
      const transformedRooms = transformApiRoomsToRoomData(apiRooms);
      setRoomData(transformedRooms);
      setLoading(false);
      setError(null);
      console.log("✅ useDynamicRoomData: Using API data", transformedRooms);
    } else if (apiError) {
      setError(apiError);
      setLoading(false);
      setRoomData([]);
      console.error("❌ useDynamicRoomData: API error", apiError);
    } else if (!apiLoading) {
      setLoading(false);
    }
  }, [apiRooms, apiError, apiLoading]);

  return {
    ROOMS: roomData, // Only API data
    loading,
    error,
    isFromApi: apiRooms.length > 0
  };
};
