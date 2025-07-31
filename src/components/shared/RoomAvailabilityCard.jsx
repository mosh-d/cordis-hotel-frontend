import Room from "./Room";
import RoomDetailsBlock from "./RoomDetailsBlock";

export default function RoomAvailabilityCard({ $type }) {
  return (
    <Room
      imageType={$type === "budget" ? "budget" : undefined}
      headerText={$type === "budget" ? "Budget" : "Diplomatic"}
      buttonText="Reserve"
      bgColor="var(--cordis-text-color)"
    >
      <RoomDetailsBlock $type={$type === "budget" ? "budget" : undefined} />
    </Room>
  );
}
