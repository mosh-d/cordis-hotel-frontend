import RoomAvailabilityCard from "../../components/shared/RoomAvailabilityCard";
import { styled } from "styled-components";
import Text from "../../components/shared/Text";

const StyledAvailableRoomsPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15rem 12rem;
  gap: 4.8rem;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
`;

const StyledTextWrapper = styled.div`
  
`;

export default function AvailableRoomsPage() {
  return (
    <>
      <StyledAvailableRoomsPage>
        <StyledTextWrapper>
          <Text $type="h1" $weight="bold" $color="var(--cordis-black)">21 Rooms available from June 12 to June 13</Text>
          <Text>Check available rooms</Text>
        </StyledTextWrapper>
        <StyledCardWrapper>
          <RoomAvailabilityCard $type="budget" />
          <RoomAvailabilityCard />
        </StyledCardWrapper>
      </StyledAvailableRoomsPage>
    </>
  )
}