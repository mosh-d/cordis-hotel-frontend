// Room data usage documentation:
// - To make a room unavailable, set the 'available' property to false or 0.
// - To make a room available, either omit the 'available' property or set it to true.
// - To edit amenities, just edit the amenities array (and the icons and text would be displayed correctly).
// - Edit any other info and it will be reflected across the site.
// - The ROOMS array of room objects can be linked to any database for storage.

const ROOMS = [
  {
    name: "Standard",
    propName: "standard",
    price: "₦120,000 default",
    size: "150 M2",
    bed: "1 King size bed",
    capacity: "2 Adults & 1 Child",
    // view: "City or Lagoon View",
    amenities: [
      "Wardrobe",
      "Bathroom slippers",
      "Tea amenities",
      "Bathrobe",
      "Luggage rack",
      "Smart TV",
      "Free WiFi",
      "Mini Fridge",
      "Mini Bar",
      
      // "Kettle",
      // "Towel",
      // "Water heater",
      // "Sofa",
      // "Desk",
      // "Wooden Closet",
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
      "Wooden Closet",
    ],
    images: "StandardRoomImages"
  },
  {
    name: "Executive Deluxe",
    propName: "executiveDeluxe",
    price: "₦160,000 default",
    size: "250 M2",
    bed: "2 King size bed",
    capacity: "3 Adults & 2 Children",
    // view: "Exotic City View",
    amenities: [
      "Wardrobe",
      "Bathroom slippers",
      "Tea amenities",
      "Bathrobe",
      "Luggage rack",
      "Smart TV",
      "Free WiFi",
      "Mini Fridge",
      "Mini Bar",
      
      // "Kettle",
      // "Towel",
      // "Water heater",
      // "Sofa",
      // "Desk",
      // "Wooden Closet",
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
      "Wooden Closet",
    ],
    images: "ExecutiveDeluxeRoomImages"
  },
  {
    name: "Executive Suite",
    propName: "executiveSuite",
    price: "₦250,000 default",
    size: "250 M2",
    bed: "2 King size bed",
    capacity: "3 Adults & 2 Children",
    // view: "Exotic City View",
    amenities: [
      "Wardrobe",
      "Bathroom slippers",
      "Tea amenities",
      "Bathrobe",
      "Luggage rack",
      "Smart TV",
      "Free WiFi",
      "Mini Fridge",
      "Mini Bar",
      
      // "Kettle",
      // "Towel",
      // "Water heater",
      // "Sofa",
      // "Desk",
      // "Wooden Closet",
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
      "Wooden Closet",
    ],
    images: "ExecutiveSuiteImages"
  }
];

export { ROOMS };
 