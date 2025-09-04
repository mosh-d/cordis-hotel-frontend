class Room {
  constructor(name, propName, price, size, bed, capacity, view, amenities, services, images) {
    this.name = name;
    this.propName = propName;
    this.price = price;
    this.size = size;
    this.bed = bed;
    this.capacity = capacity;
    this.view = view;
    this.amenities = amenities;
    this.services = services;
    this.images = images;
  }
}

const standardRoom = new Room(
  "Standard",
  "standard",
  "₦120,000",
  "150 M2",
  "1 King size bed",
  "2 Adults & 1 Child",
  "City or Lagoon View",
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  "StandardRoomImages"
);

const executiveRoom = new Room(
  "Executive",
  "executive",
  "₦250,000",
  "250 M2",
  "2 King size bed",
  "3 Adults & 2 Children",
  "Exotic City View",
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  "ExecutiveRoomImages"
);

const executiveDeluxeRoom = new Room(
  "Executive Deluxe",
  "executiveDeluxe",
  "₦160,000",
  "250 M2",
  "2 King size bed",
  "3 Adults & 2 Children",
  "Exotic City View",
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  "ExecutiveDeluxeRoomImages"
);

const executiveSuiteRoom = new Room(
  "Executive Suite",
  "executiveSuite",
  "₦250,000",
  "250 M2",
  "2 King size bed",
  "3 Adults & 2 Children",
  "Exotic City View",
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  ["Free WiFi", "Kettle", "Smart TV", "Towel", "Water heater", "Fridge", "Sofa", "Desk", "Wooden Closet"],
  "ExecutiveSuiteImages"
);

const ROOMS = [
  standardRoom,
  executiveRoom,
  executiveDeluxeRoom,
  executiveSuiteRoom
];

export { ROOMS };