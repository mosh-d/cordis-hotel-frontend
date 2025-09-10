export const transformApiRoomsToRoomData = (apiRooms) => {
  // Create a map to track which propNames we've already used
  const usedPropNames = new Set();
  
  // Define the mapping priority (first match wins)
  const propNameMap = {
    'Presidential': 'standard',
    'Regular': 'standard',
    'Executive': 'executive', 
    'Special 1': 'executive',
    'Delux': 'executiveDeluxe',
    'Special 2': 'executiveDeluxe'
  };

  // Transform and filter out duplicates
  const transformedRooms = apiRooms.map((apiRoom) => {
    const propName = propNameMap[apiRoom.roomType] || 'standard';
    
    // Map API names to display names
    const displayNameMap = {
      'Presidential': 'Standard',
      'Regular': 'Standard',
      'Executive': 'Executive', 
      'Special 1': 'Executive',
      'Delux': 'Executive Deluxe',
      'Special 2': 'Executive Deluxe'
    };

    return {
      name: displayNameMap[apiRoom.roomType] || apiRoom.roomType, // Use display name
      propName: propName,
      price: `${apiRoom.currencySymbol}${apiRoom.rate.toLocaleString()}`,
      size: "150 M2", // Default or extract from API if available
      bed: "1 King size bed", // Default or extract from API
      capacity: `${apiRoom.adult} Adults & ${apiRoom.children} Children`,
      available: apiRoom.available, // New field from API
      rateId: apiRoom.rateId, // For booking purposes
      roomTypeId: apiRoom.roomTypeId, // For booking purposes
      summary: apiRoom.summary,
      detail: apiRoom.detail,
      
      // Keep your existing amenities structure
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
    };
  });

  // Remove duplicates by propName, keeping the first occurrence
  const uniqueRooms = [];
  transformedRooms.forEach(room => {
    if (!usedPropNames.has(room.propName)) {
      usedPropNames.add(room.propName);
      uniqueRooms.push(room);
    }
  });

  // If we don't have all 4 room types, add missing ones with default data
  const requiredRoomTypes = [
    { propName: 'standard', name: 'Standard' },
    { propName: 'executive', name: 'Executive' },
    { propName: 'executiveDeluxe', name: 'Executive Deluxe' },
    { propName: 'executiveSuite', name: 'Executive Suite' }
  ];

  requiredRoomTypes.forEach(requiredRoom => {
    if (!usedPropNames.has(requiredRoom.propName)) {
      // Add a placeholder room if not found in API
      uniqueRooms.push({
        name: requiredRoom.name,
        propName: requiredRoom.propName,
        price: "₦0", // Placeholder price
        size: "150 M2",
        bed: "1 King size bed",
        capacity: "2 Adults & 1 Child",
        available: 0, // Not available
        rateId: null,
        roomTypeId: null,
        summary: "Room not available",
        detail: "This room type is currently not available",
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
      });
    }
  });

  return uniqueRooms;
};