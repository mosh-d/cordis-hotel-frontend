import BudgetRoom from "../shared/Room";
import Room from "../shared/Room";
import styled from "styled-components";
import Text from "../shared/Text";

const RoomText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const StyledRoomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 15rem 12rem;
`;

const StyledRooms = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export default function RoomSection() {
  return (
    <>
      <StyledRoomSection>
        <RoomText>
          <Text $type="h1" $weight="bold" $color="var(--cordis-black)">
            Our Rooms
          </Text>
          <Text $type="p" $size="large" $weight="light">
            Hover the images for availability details
          </Text>
        </RoomText>

        <StyledRooms>
          <Room imageType="budget" headerText="Budget" buttonText="Reserve" />
          <Room imageType="diplomatic" headerText="Diplomatic" buttonText="Reserve" />
        </StyledRooms>
      </StyledRoomSection>
    </>
  );
}
