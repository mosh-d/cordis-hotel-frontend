import { useOutletContext } from "react-router-dom";
import { useMemo } from "react";
import RoomAvailabilityCard from "../../components/shared/RoomAvailabilityCard";
import { styled } from "styled-components";
import Text from "../../components/shared/Text";
import { media } from "../../util/breakpoints";
import { useDynamicRoomData } from "../../hooks/useDynamicRoomData";

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
    console.error(
      "AvailableRoomsPage: No outlet context found. Make sure this route is nested under RootLayout."
    );
    return (
      <div>
        <Text $type="h1" $color="var(--cordis-black)">
          Error: Page not properly configured
        </Text>
      </div>
    );
  }

  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    roomCategory,
    setRoomCategory,
    noOfRooms,
    setNoOfRooms,
    noOfAdults,
    noOfChildren,
  } = context;

  // Generate search parameters using context dates
  const searchParams = useMemo(() => {
    // Fallback dates if context doesn't have them
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return {
      checkInDate: checkIn || today.toISOString().split('T')[0],
      checkOutDate: checkOut || tomorrow.toISOString().split('T')[0],
      adultNo: noOfAdults || 2,
      childNo: noOfChildren || 1,
      facilityTypeId: 1
    };
  }, [checkIn, checkOut, noOfAdults, noOfChildren]);

  // Get API room data
  console.log("🔍 AVAILABLE ROOMS: API search parameters:", searchParams);
  const { ROOMS, loading, error, isFromApi } = useDynamicRoomData(searchParams);
  
  console.log("🏨 AVAILABLE ROOMS: Received room data:", ROOMS.map(room => ({
    name: room.name,
    propName: room.propName,
    price: room.price,
    available: room.available,
    availableType: typeof room.available
  })));

  if (loading) {
    return (
      <StyledAvailableRoomsPage>
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <Text $type="h2" $color="var(--cordis-black)">
            Loading available rooms...
          </Text>
        </div>
      </StyledAvailableRoomsPage>
    );
  }

  if (error) {
    return (
      <StyledAvailableRoomsPage>
        <div style={{ textAlign: 'center', padding: '4rem', color: 'red' }}>
          <Text $type="h2">Error loading rooms: {error}</Text>
          <Text>Showing fallback room data</Text>
        </div>
      </StyledAvailableRoomsPage>
    );
  }

  return (
    <>
      <StyledAvailableRoomsPage>
        <StyledTextWrapper>
          <Text
            $type="h1"
            $size="extra-large"
            $weight="bold"
            $color="var(--cordis-black)"
          >
            {checkIn && checkOut
              ? `${ROOMS.length} Rooms available from ${new Date(
                  checkIn
                ).toLocaleDateString()} to ${new Date(
                  checkOut
                ).toLocaleDateString()}`
              : `${ROOMS.length} Rooms available`}
            {/* {isFromApi && (
              <span style={{ 
                background: 'green', 
                color: 'white', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                fontSize: '14px',
                marginLeft: '1rem'
              }}>
                LIVE DATA
              </span>
            )} */}
          </Text>
          <Text>Check available rooms {isFromApi ? '(Real-time availability)' : '(Please refresh the page for live-data)'}</Text>
        </StyledTextWrapper>
        <StyledCardWrapper>
          {ROOMS.map((room, index) => {
            // Check if room is available
            const isAvailable = typeof room.available === 'number' ? room.available > 0 : 
                               typeof room.available === 'boolean' ? room.available : true;
            
            console.log(`🔍 AVAILABLE ROOMS: Checking ${room.name} (${room.propName})`, {
              available: room.available,
              availableType: typeof room.available,
              isAvailable: isAvailable,
              unavailable: !isAvailable,
              logicCheck: {
                isNumber: typeof room.available === 'number',
                numberCheck: typeof room.available === 'number' ? room.available > 0 : 'N/A',
                isBoolean: typeof room.available === 'boolean',
                booleanValue: typeof room.available === 'boolean' ? room.available : 'N/A',
                defaultsToTrue: typeof room.available !== 'number' && typeof room.available !== 'boolean'
              }
            });
            
            return (
              <RoomAvailabilityCard 
                key={index} 
                $type={room.propName} 
                roomData={ROOMS}
                unavailable={!isAvailable}
              />
            );
          })}
        </StyledCardWrapper>
      </StyledAvailableRoomsPage>
    </>
  );
}
