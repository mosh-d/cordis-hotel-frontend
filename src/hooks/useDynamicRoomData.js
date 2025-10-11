import { useState, useEffect } from 'react';
import { useRoomAvailability } from './useRoomAvailability';

export const useDynamicRoomData = (searchParams = null) => {
  const [roomData, setRoomData] = useState([]); // Start with empty array, no fallback
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { rooms: apiRooms, loading: apiLoading, error: apiError, fetchRooms } = useRoomAvailability();

  useEffect(() => {
    if (searchParams) {
      // Add a small delay to debounce rapid calls
      const timeoutId = setTimeout(() => {
        setLoading(true);
        fetchRooms(searchParams);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [searchParams?.checkInDate, searchParams?.checkOutDate, searchParams?.adultNo, searchParams?.childNo]);

  useEffect(() => {
    if (apiRooms.length > 0) {
      // Use API data directly without transformation
      const directApiRooms = apiRooms.map(apiRoom => ({
        // Use actual API room name and price
        name: apiRoom.roomType,
        propName: apiRoom.roomType.toLowerCase().replace(/\s+/g, ''), // Simple mapping for images
        price: `${apiRoom.currencySymbol || '₦'}${apiRoom.rate}`,
        rawApiRate: apiRoom.rate,
        available: apiRoom.available,
        rateId: apiRoom.rateId,
        roomTypeId: apiRoom.roomTypeId,
        summary: apiRoom.summary || `Beautiful ${apiRoom.roomType} for your stay`,
        detail: apiRoom.detail || `Experience comfort in our ${apiRoom.roomType}`,

        // Use basic fallback data for amenities, size, capacity, and services
        size: "150 M2",
        bed: "1 King size bed",
        capacity: apiRoom.adult && apiRoom.children 
          ? `${apiRoom.adult} Adults & ${apiRoom.children} Children` 
          : "2 Adults & 1 Child",
        amenities: [
          "Wardrobe",
          "Bathroom slippers", 
          "Tea amenities",
          "Bathrobe",
          "Luggage rack",
          "Smart TV",
          "Free WiFi",
          "Mini Fridge",
          "Mini Bar"
        ],
        services: [
          "Free WiFi",
          "Kettle", 
          "Smart TV",
          "Towel",
          "Water heater",
          "Fridge",
          "Sofa",
          "Desk",
          "Wooden Closet"
        ]
      }));

      setRoomData(directApiRooms);
      setLoading(false);
      setError(null);
      console.log("✅ DATA SOURCE: Using direct API data", {
        roomCount: directApiRooms.length,
        source: "Direct API"
      });
    } else if (apiError) {
      // Only set error if API call failed, don't fall back to static data
      setError(apiError);
      setLoading(false);
      setRoomData([]);
      console.error("❌ API FAILED: No fallback data available", {
        error: apiError,
        source: "No data"
      });
    } else if (!apiLoading && !searchParams) {
      // No search params provided
      setRoomData([]);
      setLoading(false);
    }
  }, [apiRooms, apiError, apiLoading, searchParams]);

  return {
    ROOMS: roomData, // Direct API data
    loading,
    error,
    isFromApi: apiRooms.length > 0
  };
};
