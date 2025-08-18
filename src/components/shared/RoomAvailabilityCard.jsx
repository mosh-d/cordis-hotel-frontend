import Room from "./Room";
import RoomDetailsBlock from "./RoomDetailsBlock";

export default function RoomAvailabilityCard({ $type }) {
  return (
    <Room
      imageType={
        $type === "standard"
          ? "standard"
          : $type === "executive"
          ? "executive"
          : $type === "executiveDeluxe"
          ? "executiveDeluxe"
          : "executiveSuit"
      }
      headerText={
        $type === "standard"
          ? "Standard"
          : $type === "executive"
          ? "Executive"
          : $type === "executiveDeluxe"
          ? "Executive Deluxe"
          : "Executive Suit"
      }
      buttonText="Reserve"
      $bgColor="var(--cordis-text-color)"
    >
      <RoomDetailsBlock
        $type={
          $type === "standard"
            ? "standard"
            : $type === "executive"
            ? "executive"
            : $type === "executiveDeluxe"
            ? "executiveDeluxe"
            : $type === "executiveSuite"
            ? "executiveSuite"
            : undefined
        }
      />
    </Room>
  );
}
