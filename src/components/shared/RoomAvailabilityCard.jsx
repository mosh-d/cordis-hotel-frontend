import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import Room from "./Room";
import RoomDetailsBlock from "./RoomDetailsBlock";
import { useDynamicRoomData } from "../../hooks/useDynamicRoomData";

export default function RoomAvailabilityCard({ $type }) {
  const context = useOutletContext();

  // Generate search parameters using context dates
  const searchParams = useMemo(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return {
      checkInDate: context?.checkIn || today.toISOString().split('T')[0],
      checkOutDate: context?.checkOut || tomorrow.toISOString().split('T')[0],
      adultNo: context?.noOfAdults || 2,
      childNo: context?.noOfChildren || 1,
      facilityTypeId: 1
    };
  }, [context?.checkIn, context?.checkOut, context?.noOfAdults, context?.noOfChildren]);

  // Get API room data
  const { ROOMS } = useDynamicRoomData(searchParams);
  
  // Find the specific room data for this type
  const roomData = ROOMS.find(room => room.propName === $type);
  
  return (
    <Room
      imageType={$type}
      headerText={roomData?.name || $type} // Use API name or fallback
      buttonText="Reserve"
      $bgColor="var(--cordis-text-color)"
    >
      <RoomDetailsBlock $type={$type} />
    </Room>
  );
}
