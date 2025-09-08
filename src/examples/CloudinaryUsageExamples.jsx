import React from "react";
import CloudinaryImage, {
  CloudinaryImagePresets,
} from "../components/shared/CloudinaryImage";

// Example usage of CloudinaryImage component
export default function CloudinaryUsageExamples() {
  return (
    <div>
      <h2>Cloudinary Image Examples</h2>

      {/* Basic usage */}
      <div>
        <h3>Basic Image</h3>
        <CloudinaryImage
          publicId="hotel/rooms/standard-room-1"
          width={400}
          height={300}
          alt="Standard hotel room"
        />
      </div>

      {/* Hero image with preset */}
      <div>
        <h3>Hero Image</h3>
        <CloudinaryImage
          publicId="hotel/hero/main-lobby"
          {...CloudinaryImagePresets.hero}
          alt="Hotel main lobby"
        />
      </div>

      {/* Card image with custom transformations */}
      <div>
        <h3>Card Image</h3>
        <CloudinaryImage
          publicId="hotel/rooms/executive-suite"
          {...CloudinaryImagePresets.card}
          alt="Executive suite"
          style={{ borderRadius: "8px" }}
        />
      </div>

      {/* Thumbnail grid */}
      <div style={{ display: "flex", gap: "10px" }}>
        <h3>Thumbnails</h3>
        {["room-1", "room-2", "room-3"].map((room, index) => (
          <CloudinaryImage
            key={index}
            publicId={`hotel/rooms/${room}`}
            {...CloudinaryImagePresets.thumbnail}
            alt={`Room ${index + 1}`}
          />
        ))}
      </div>

      {/* Different resize modes */}
      <div>
        <h3>Different Resize Modes</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          <div>
            <h4>Fill (default)</h4>
            <CloudinaryImage
              publicId="hotel/rooms/standard-room-1"
              width={300}
              height={200}
              resizeMode="fill"
              alt="Fill mode"
            />
          </div>

          <div>
            <h4>Fit</h4>
            <CloudinaryImage
              publicId="hotel/rooms/standard-room-1"
              width={300}
              height={200}
              resizeMode="fit"
              alt="Fit mode"
            />
          </div>

          <div>
            <h4>Crop</h4>
            <CloudinaryImage
              publicId="hotel/rooms/standard-room-1"
              width={300}
              height={200}
              resizeMode="crop"
              alt="Crop mode"
            />
          </div>

          <div>
            <h4>Scale</h4>
            <CloudinaryImage
              publicId="hotel/rooms/standard-room-1"
              width={300}
              height={200}
              resizeMode="scale"
              alt="Scale mode"
            />
          </div>
        </div>
      </div>

      {/* Responsive image */}
      <div>
        <h3>Responsive Image</h3>
        <CloudinaryImage
          publicId="hotel/exterior/building-front"
          width={800}
          height={400}
          responsive={true}
          alt="Hotel exterior"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}

// Example of using CloudinaryImage in your existing components
export function RoomCard({ room }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <CloudinaryImage
        publicId={room.cloudinaryId}
        {...CloudinaryImagePresets.card}
        alt={room.name}
      />
      <div style={{ padding: "16px" }}>
        <h3>{room.name}</h3>
        <p>{room.price}</p>
      </div>
    </div>
  );
}

// Example of using in your carousel
export function OptimizedRoomCarousel({ room }) {
  return (
    <div>
      {room.cloudinaryIds.map((imageId, index) => (
        <CloudinaryImage
          key={index}
          publicId={imageId}
          width={800}
          height={600}
          alt={`${room.name} - Image ${index + 1}`}
          lazy={index > 0} // Don't lazy load first image
          placeholderMode="blur"
        />
      ))}
    </div>
  );
}
