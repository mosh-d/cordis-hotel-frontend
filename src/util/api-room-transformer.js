export const transformApiRoomsToRoomData = (apiRooms) => {
  console.log("🔄 TRANSFORMER: Processing API rooms", apiRooms);
  
  // Map API room types to your display structure
  const transformedRooms = apiRooms.map((apiRoom) => {
    // Map API room names to propNames for image matching
    const propNameMap = {
      'Standard': 'standard',
      'Presidential': 'standard',
      'Regular': 'standard',
      'Executive': 'executive',
      'Executive Deluxe': 'executiveDeluxe',
      'Delux': 'executiveDeluxe',
      'Executive Suite': 'executiveSuite',
      'Special 1': 'executive',
      'Special 2': 'executiveDeluxe'
    };

    const propName = propNameMap[apiRoom.roomType] || apiRoom.roomType.toLowerCase().replace(/\s+/g, '');

    const transformed = {
      name: apiRoom.roomType, // Use actual API name
      propName: propName,
      price: `${apiRoom.currencySymbol}${apiRoom.rate.toLocaleString()}`, // Format with commas
      rawRate: apiRoom.rate, // Keep raw number for calculations
      size: "150 M2",
      bed: "1 King size bed",
      capacity: `${apiRoom.adult} Adults & ${apiRoom.children} Children`,
      available: apiRoom.available,
      rateId: apiRoom.rateId,
      roomTypeId: apiRoom.roomTypeId,
      facilityTypeId: apiRoom.facilityTypeId,
      summary: apiRoom.summary || `Experience comfort in our ${apiRoom.roomType}`,
      detail: apiRoom.detail || `Beautiful ${apiRoom.roomType} for your stay`,
      
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

    console.log(`✅ Transformed ${apiRoom.roomType}:`, {
      name: transformed.name,
      propName: transformed.propName,
      price: transformed.price,
      available: transformed.available
    });

    return transformed;
  });

  console.log("✅ TRANSFORMER: Final rooms:", transformedRooms.length);
  return transformedRooms;
};