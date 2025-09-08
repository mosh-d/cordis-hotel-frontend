// Updated room data structure for Cloudinary
class Room {
  constructor(
    name,
    propName,
    price,
    size,
    bed,
    capacity,
    amenities,
    services,
    cloudinaryIds // Array of Cloudinary public IDs instead of local images
  ) {
    this.name = name;
    this.propName = propName;
    this.price = price;
    this.size = size;
    this.bed = bed;
    this.capacity = capacity;
    this.amenities = amenities;
    this.services = services;
    this.cloudinaryIds = cloudinaryIds; // e.g., ["rooms/standard-1", "rooms/standard-2"]
  }
}

// Example with Cloudinary public IDs
const standardRoom = new Room(
  "Standard",
  "standard",
  "₦120,000",
  "150 M2",
  "1 King size bed",
  "2 Adults & 1 Child",
  [
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
  [
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
  [
    "cordis-hotel/rooms/standard/standard-room-1",
    "cordis-hotel/rooms/standard/standard-room-2", 
    "cordis-hotel/rooms/standard/standard-room-3"
  ]
);

const executiveRoom = new Room(
  "Executive",
  "executive", 
  "₦250,000",
  "250 M2",
  "2 King size bed",
  "3 Adults & 2 Children",
  [
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
  [
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
  [
    "cordis-hotel/rooms/executive/executive-room-1",
    "cordis-hotel/rooms/executive/executive-room-2",
    "cordis-hotel/rooms/executive/executive-room-3"
  ]
);

// Add other rooms...

const CLOUDINARY_CONFIG = {
  cloudName: "dan4iussn", // Replace with your actual cloud name
  apiKey: "534444865735423",       // Replace with your API key
};

const ROOMS = [
  standardRoom,
  executiveRoom,
  // Add other rooms...
];

export { ROOMS, CLOUDINARY_CONFIG };