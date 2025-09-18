import Room from "./Room";
import RoomDetailsBlock from "./RoomDetailsBlock";

export default function RoomAvailabilityCard({ $type, roomData = null, unavailable = false }) {
  // Find the specific room data for this type
  const specificRoomData = roomData?.find(room => room.propName === $type);
  
  return (
    <Room
      imageType={$type}
      headerText={specificRoomData?.name || $type} // Use API name or fallback
      buttonText="Reserve"
      $bgColor="var(--cordis-text-color)"
      roomData={roomData} // Pass room data to Room component
      unavailable={unavailable} // Pass availability status
    >
      <RoomDetailsBlock $type={$type} roomData={roomData} />
    </Room>
  );
}
