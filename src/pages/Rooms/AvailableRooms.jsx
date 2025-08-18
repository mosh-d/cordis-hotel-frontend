import { useOutletContext } from "react-router-dom";
import RoomAvailabilityCard from "../../components/shared/RoomAvailabilityCard";
import { styled } from "styled-components";
import Text from "../../components/shared/Text";
import { media } from "../../util/breakpoints";

const StyledAvailableRoomsPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15rem 12rem;
  gap: 4.8rem;

  ${media.desktop} {
    padding: 12rem 6rem;
  }

  ${media.mobile} {
    padding: 12rem 2rem;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15rem;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export default function AvailableRoomsPage() {
  const context = useOutletContext();
  
  // Handle case where context is undefined
  if (!context) {
    console.error("AvailableRoomsPage: No outlet context found. Make sure this route is nested under RootLayout.");
    return (
      <div>
        <Text $type="h1" $color="var(--cordis-black)">
          Error: Page not properly configured
        </Text>
      </div>
    );
  }

  const {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    countryCode, setCountryCode,
    checkIn, setCheckIn,
    checkOut, setCheckOut,
    roomCategory, setRoomCategory,
    noOfRooms, setNoOfRooms
  } = context;

  return (
    <>
      <StyledAvailableRoomsPage>
        <StyledTextWrapper>
          <Text $type="h1" $size="extra-large" $weight="bold" $color="var(--cordis-black)">
            {checkIn && checkOut 
              ? `21 Rooms available from ${new Date(checkIn).toLocaleDateString()} to ${new Date(checkOut).toLocaleDateString()}`
              : "21 Rooms available"
            }
          </Text>
          <Text>Check available rooms</Text>
        </StyledTextWrapper>
        <StyledCardWrapper>
          <RoomAvailabilityCard $type="standard" />
          <RoomAvailabilityCard $type="executive" />
          <RoomAvailabilityCard $type="executiveDeluxe" />
          <RoomAvailabilityCard $type="executiveSuite" />
        </StyledCardWrapper>
      </StyledAvailableRoomsPage>
    </>
  )
}