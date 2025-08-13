import Room from "./Room";
import RoomDetailsBlock from "./RoomDetailsBlock";

export default function RoomAvailabilityCard({ $type }) {
  return (
    <Room
      imageType={$type === "standard" ? "standard" : "executive"}
      headerText={$type === "standard" ? "Standard" : "Executive"}
      buttonText="Reserve"
      $bgColor="var(--cordis-text-color)"
    >
      <RoomDetailsBlock $type={$type === "standard" ? "standard" : "executive"} />
    </Room>
  );
}
