export const transformApiRoomsToRoomData = (apiRooms) => {
  console.log("🔄 SIMPLE TRANSFORMER: Using first 4 API rooms directly", apiRooms);
  
  // Take only the first 4 rooms from the API
  const firstFourRooms = apiRooms.slice(0, 4);
  
  // Fallback data for amenities, size, capacity, and services
  const fallbackData = {
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
    ],
    defaultSize: "150 M2",
    defaultBed: "1 King size bed",
    defaultCapacity: "2 Adults & 1 Child"
  };
  
  // Map each API room directly to our format
  const transformedRooms = firstFourRooms.map((apiRoom, index) => {
    console.log(`📊 PROCESSING ROOM ${index + 1}:`, {
      originalType: apiRoom.roomType,
      rate: apiRoom.rate,
      available: apiRoom.available,
      roomTypeId: apiRoom.roomTypeId,
      rateId: apiRoom.rateId
    });
    
    // Use API rate directly without any calculations
    const finalRate = apiRoom.rate;
    
    return {
      // Use API data directly
      name: apiRoom.roomType,
      propName: apiRoom.roomType.toLowerCase().replace(/\s+/g, ''), // Create simple propName
      price: `${apiRoom.currencySymbol || '₦'}${finalRate}`,
      rawApiRate: finalRate, // Store original API rate for booking system
      available: apiRoom.available,
      rateId: apiRoom.rateId,
      roomTypeId: apiRoom.roomTypeId,
      summary: apiRoom.summary || `Beautiful ${apiRoom.roomType} for your stay`,
      detail: apiRoom.detail || `Experience comfort in our ${apiRoom.roomType}`,
      
      // Use fallback data for amenities, size, capacity, and services
      size: fallbackData.defaultSize,
      bed: fallbackData.defaultBed,
      capacity: apiRoom.adult && apiRoom.children 
        ? `${apiRoom.adult} Adults & ${apiRoom.children} Children` 
        : fallbackData.defaultCapacity,
      amenities: [...fallbackData.amenities],
      services: [...fallbackData.services]
    };
  });
  
  console.log("✅ SIMPLE TRANSFORMER: Final result:", transformedRooms.map(room => ({
    name: room.name,
    propName: room.propName,
    price: room.price,
    available: room.available,
    roomTypeId: room.roomTypeId,
    rateId: room.rateId
  })));
  
  return transformedRooms;
};