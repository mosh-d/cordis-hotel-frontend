export const transformApiRoomsToRoomData = (apiRooms) => {
  console.log("🔄 TRANSFORMER: Starting transformation with API data:", apiRooms);
  
  // Define the mapping from API room types to our internal types
  const propNameMap = {
    'Presidential': 'standard',
    'Regular': 'standard',
    'Executive': 'executive', 
    'Special 1': 'executiveSuite', // Map Special 1 to Executive Suite instead
    'Delux': 'executiveDeluxe',
    'Special 2': 'executiveDeluxe'
  };

  // Map API names to display names
  const displayNameMap = {
    'Presidential': 'Standard',
    'Regular': 'Standard',
    'Executive': 'Executive', 
    'Special 1': 'Executive Suite', // Update display name to match
    'Delux': 'Executive Deluxe',
    'Special 2': 'Executive Deluxe'
  };

  // Group rooms by propName and combine their availability
  const roomGroups = {};
  
  apiRooms.forEach((apiRoom) => {
    const propName = propNameMap[apiRoom.roomType] || 'standard';
    const displayName = displayNameMap[apiRoom.roomType] || apiRoom.roomType;
    
    console.log(`📊 TRANSFORMER: Processing ${apiRoom.roomType} → ${propName}`, {
      originalType: apiRoom.roomType,
      mappedTo: propName,
      displayName: displayName,
      rate: apiRoom.rate,
      available: apiRoom.available,
      currencySymbol: apiRoom.currencySymbol
    });
    
    if (!roomGroups[propName]) {
      // First room of this type - create the base room object
      console.log(`🏗️ TRANSFORMER: Creating new room group for ${propName}`, {
        apiRoomAvailable: apiRoom.available,
        apiRoomAvailableType: typeof apiRoom.available
      });
      
      // Use realistic fallback prices if API rate is too low (likely a rate code, not actual price)
      const fallbackPrices = {
        'standard': 120000,
        'executive': 250000,
        'executiveDeluxe': 160000,
        'executiveSuite': 250000  // Updated to match your preference
      };
      
      // If API rate is suspiciously low (< 10000), use fallback price
      const finalRate = apiRoom.rate < 10000 ? fallbackPrices[propName] : apiRoom.rate;
      
      console.log(`💰 TRANSFORMER: Price calculation for ${propName}`, {
        apiRate: apiRoom.rate,
        isLowRate: apiRoom.rate < 10000,
        fallbackPrice: fallbackPrices[propName],
        finalRate: finalRate,
        formattedPrice: `${apiRoom.currencySymbol}${finalRate.toLocaleString()}`
      });

      roomGroups[propName] = {
        name: displayName,
        propName: propName,
        price: `${apiRoom.currencySymbol}${finalRate.toLocaleString()}`,
        size: "150 M2", // Default or extract from API if available
        bed: "1 King size bed", // Default or extract from API
        capacity: `${apiRoom.adult} Adults & ${apiRoom.children} Children`,
        available: apiRoom.available, // Start with this room's availability
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
      
      console.log(`✅ TRANSFORMER: Created room object for ${propName}`, {
        roomAvailable: roomGroups[propName].available,
        roomAvailableType: typeof roomGroups[propName].available
      });
    } else {
      // Additional room of same type - combine availability
      const oldAvailable = roomGroups[propName].available;
      roomGroups[propName].available += apiRoom.available;
      
      console.log(`🔄 TRANSFORMER: Combining ${propName}`, {
        previousAvailable: oldAvailable,
        addingAvailable: apiRoom.available,
        newTotalAvailable: roomGroups[propName].available
      });
      
      // Use realistic fallback prices if API rate is too low
      const fallbackPrices = {
        'standard': 120000,
        'executive': 250000,
        'executiveDeluxe': 160000,
        'executiveSuite': 250000  // Updated to match your preference
      };
      
      const finalRate = apiRoom.rate < 10000 ? fallbackPrices[propName] : apiRoom.rate;
      
      // Use the higher rate if different
      const currentRate = parseInt(roomGroups[propName].price.match(/[\d,]+/)[0].replace(/,/g, ''));
      if (finalRate > currentRate) {
        console.log(`💰 TRANSFORMER: Updating ${propName} price from ${currentRate} to ${finalRate}`);
        roomGroups[propName].price = `${apiRoom.currencySymbol}${finalRate.toLocaleString()}`;
        roomGroups[propName].rateId = apiRoom.rateId;
        roomGroups[propName].roomTypeId = apiRoom.roomTypeId;
      }
    }
  });

  // Convert grouped rooms back to array
  const uniqueRooms = Object.values(roomGroups);
  
  console.log("✅ TRANSFORMER: Final grouped rooms:", uniqueRooms.map(room => ({
    name: room.name,
    propName: room.propName,
    price: room.price,
    available: room.available
  })));

  // If we don't have all 4 room types, add missing ones with default data
  const requiredRoomTypes = [
    { propName: 'standard', name: 'Standard' },
    { propName: 'executive', name: 'Executive' },
    { propName: 'executiveDeluxe', name: 'Executive Deluxe' },
    { propName: 'executiveSuite', name: 'Executive Suite' }
  ];

  // Fallback prices for missing room types
  const fallbackPrices = {
    'standard': 120000,
    'executive': 250000,
    'executiveDeluxe': 160000,
    'executiveSuite': 250000  // Updated to match your preference
  };

  requiredRoomTypes.forEach(requiredRoom => {
    if (!roomGroups[requiredRoom.propName]) {
      console.log(`⚠️ TRANSFORMER: Adding missing room type: ${requiredRoom.propName}`);
      // Add a placeholder room if not found in API
      uniqueRooms.push({
        name: requiredRoom.name,
        propName: requiredRoom.propName,
        price: `₦${fallbackPrices[requiredRoom.propName].toLocaleString()}`, // Use fallback price
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

  console.log("🎯 TRANSFORMER: Final result with all rooms:", uniqueRooms.map(room => ({
    name: room.name,
    propName: room.propName,
    price: room.price,
    available: room.available,
    availableType: typeof room.available,
    source: room.available > 0 ? 'API' : 'Placeholder'
  })));

  return uniqueRooms;
};