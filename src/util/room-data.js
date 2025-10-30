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
    price: "₦125,000",
    size: "21.27 sqm",
    bed: "1 King size bed",
    capacity: "2 Adults & 1 Child",
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
    price: "₦195,000",
    size: "28.6 sqm",
    bed: "2 King size bed",
    capacity: "2 Adults & 1 Child",
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
    price: "₦250,000",
    size: "54.3 sqm",
    bed: "2 King size bed",
    capacity: "2 Adults & 4 Children",
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
 