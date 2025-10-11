export const transformApiRoomsToRoomData = (apiRooms) => {
  console.log("🔄 INDIVIDUAL TRANSFORMER: Processing all API rooms individually", apiRooms.length, "rooms");
  console.log("🔄 API ROOMS RECEIVED:", apiRooms.map(room => ({
    roomType: room.roomType,
    roomTypeId: room.roomTypeId,
    rateId: room.rateId,
    available: room.available
  })));
  
  // Mapping from API room names to static propName values for correct images
  const roomNameMapping = {
    'Presidential': 'standard',
    'Regular': 'standard',
    'Executive': 'executive',
    'Special 1': 'executive',
    'Delux': 'executiveDeluxe',
    'Special 2': 'executiveDeluxe',
    'Executive Suite': 'executiveSuite'
  };
  
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
  
  // Transform each API room individually to show all room types
  const transformedRooms = apiRooms.map((apiRoom, index) => {
    console.log(`📊 PROCESSING ROOM ${index + 1}:`, {
      originalType: apiRoom.roomType,
      rate: apiRoom.rate,
      available: apiRoom.available,
      roomTypeId: apiRoom.roomTypeId,
      rateId: apiRoom.rateId
    });
    
    return {
      // Use actual API room name and price
      name: apiRoom.roomType,
      propName: roomNameMapping[apiRoom.roomType] || apiRoom.roomType.toLowerCase().replace(/\s+/g, ''), // Map to correct image
      price: `${apiRoom.currencySymbol || '₦'}${apiRoom.rate}`,
      rawApiRate: apiRoom.rate,
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
  
  console.log("✅ INDIVIDUAL TRANSFORMER: Final result:", transformedRooms.map(room => ({
    name: room.name,
    propName: room.propName,
    price: room.price,
    available: room.available,
    roomTypeId: room.roomTypeId,
    rateId: room.rateId
  })));
  
  return transformedRooms;
};