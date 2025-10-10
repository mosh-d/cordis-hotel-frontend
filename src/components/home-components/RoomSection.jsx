import Room from "../shared/Room";
import styled from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";
import { ROOMS } from "../../util/room-data";
import { useDynamicRoomData } from "../../hooks/useDynamicRoomData";
import { useOutletContext } from "react-router-dom";
import { useMemo } from "react";

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

  ${media.desktop} {
    padding: 15rem 4rem;
  }

  ${media.tablet} {
    padding: 15rem 4rem;
  }

  ${media.mobile} {
    padding: 12rem 1rem;
  }

  /* Alternative: Add scroll indicators */
  position: relative;

  &::after {
    content: "← Scroll for more →";
    position: absolute;
    bottom: 16rem;
    font-size: 1.2rem;
    color: var(--cordis-gray);
    pointer-events: none;
    opacity: 0.7;

    ${media.large} {
      bottom: 16rem;
      left: 12rem;
    }

    ${media.desktop} {
      bottom: 16rem;
      left: 4rem;
    }

    ${media.tablet} {
      bottom: 16rem;
      left: 4rem;
    }

    ${media.mobile} {
      bottom: 13.5rem;
      left: 1rem;
    }
  }
`;

const StyledRooms = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 4rem;
  -webkit-overflow-scrolling: touch;

  & > * {
    min-width: calc(50% - 0.5rem);

    ${media.tablet} {
      min-width: 90%;
    }
  }
  display: flex;
  flex-direction: row;
  gap: 1rem;

  /* Standard scrollbar styling */
  &::-webkit-scrollbar {
    width: 0.1rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--cordis-light-gray);
    height: 0.5rem;
    /* border-radius: .4rem; */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--cordis-text-color);
    height: 0.5rem;
    /* border-radius: .4rem; */

    &:hover {
      background-color: var(--cordis-black);
      cursor: grab;
    }
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`;

const StyledRoomContainer = styled.div``;

const StyledUnavailableRoomOverlay = styled.div`
  backdrop-filter: blur(0.5rem);
`;

const StyledUnavailableTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
`;

export default function RoomSection({ $type }) {
  // Get context data for search parameters
  const { checkIn, checkOut, noOfAdults, noOfChildren } = useOutletContext();

  // Generate search parameters using context dates or fallback to current/next day
  const searchParams = useMemo(() => {
    // Fallback dates if context doesn't have them
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return {
      checkInDate: checkIn || today.toISOString().split("T")[0],
      checkOutDate: checkOut || tomorrow.toISOString().split("T")[0],
      adultNo: noOfAdults || 2,
      childNo: noOfChildren || 1,
      facilityTypeId: 1,
    };
  }, [checkIn, checkOut, noOfAdults, noOfChildren]);

  // Helper function to check if a room is available based on API data
  const isRoomAvailable = (room) => {
    // If available is a number, check if it's greater than 0
    if (typeof room.available === "number") {
      return room.available > 0;
    }
    // If available is a boolean, use it directly
    if (typeof room.available === "boolean") {
      return room.available;
    }
    // If no available property exists, assume room is available
    return true;
  };

  // Use the dynamic room data hook to get API data
  const {
    ROOMS: dynamicRooms,
    loading,
    error,
    isFromApi,
  } = useDynamicRoomData(searchParams);

  // Helper function to get room availability by propName
  const getRoomAvailability = (propName) => {
    const room = dynamicRooms.find((r) => r.propName === propName);
    return room ? isRoomAvailable(room) : true; // Default to available if not found
  };

  // Clear data source logging (reduced frequency)
  if (dynamicRooms.length > 0) {
    console.log(
      isFromApi
        ? "🌐 ROOMSECTION: Displaying live API data"
        : "📁 ROOMSECTION: Displaying static fallback data",
      {
        totalRooms: dynamicRooms.length,
        dataSource: isFromApi ? "Live API" : "Static file",
      }
    );
  }

  return (
    <>
      <StyledRoomSection>
        <RoomText>
          <Text $type="h1" $weight="bold" $color="var(--cordis-black)">
            Our Rooms and Suites
          </Text>
          <Text $type="p" $size="large" $weight="light">
            Designed for Comfort and Style
          </Text>
        </RoomText>

        {loading ? (
          <Text $type="p" $size="large">
            Loading room availability...
          </Text>
        ) : error && !isFromApi ? (
          <>
            <Text
              $type="p"
              $size="small"
              $color="var(--cordis-gray)"
              style={{ marginBottom: "1rem" }}
            >
              PMS unavailable - using default data
            </Text>
            <StyledRooms>
              {ROOMS.map((room, index) => (
                <StyledRoomContainer key={index}>
                  <Room
                    imageType={room.propName}
                    headerText={room.name}
                    buttonText="Reserve"
                    flippable={true}
                    unavailable={!isRoomAvailable(room)}
                    roomData={ROOMS} // Pass static data to Room component
                  />
                </StyledRoomContainer>
              ))}
            </StyledRooms>
          </>
        ) : (
          // Display all individual API rooms with their actual names and prices
          <StyledRooms>
            {dynamicRooms.map((apiRoom, index) => {
              return (
                <StyledRoomContainer key={index}>
                  <Room
                    imageType={apiRoom.propName} // Use mapped propName for correct images
                    headerText={apiRoom.name} // Use actual API room name
                    buttonText="Reserve"
                    flippable={true}
                    unavailable={apiRoom.available <= 0} // Use API availability directly
                    roomData={dynamicRooms} // Use API data
                  />
                </StyledRoomContainer>
              );
            })}
          </StyledRooms>
        )}

        {/* {!standardRoomExists && (
            <>
              <StyledUnavailableRoomOverlay>
                <Room
                  imageType="standard"
                  headerText="Standard"
                  buttonText="Reserve"
                  flippable={true}
                  unavailable={true}
                />
                <StyledUnavailableTextContainer>
                  <Text
                    $type="h3"
                    $color="var(--cordis-white)"
                    $weight="bold"
                    $size="extra-large"
                  >
                    Unavailable
                  </Text>
                </StyledUnavailableTextContainer>
              </StyledUnavailableRoomOverlay>
            </>
          )}

          {!executiveRoomExists && (
            <StyledUnavailableRoomOverlay>
              <Room
                imageType="executive"
                headerText="Executive"
                buttonText="Reserve"
                flippable={true}
                unavailable={true}
              />
              <StyledUnavailableTextContainer>
                <Text
                  $type="h3"
                  $color="var(--cordis-white)"
                  $weight="bold"
                  $size="extra-large"
                >
                  Unavailable
                </Text>
              </StyledUnavailableTextContainer>
            </StyledUnavailableRoomOverlay>
          )}

          {!executiveDeluxeRoomExists && (
            <StyledUnavailableRoomOverlay>
              <Room
                imageType="executiveDeluxe"
                headerText="Executive Deluxe"
                buttonText="Reserve"
                flippable={true}
                unavailable={true}
              />
              <StyledUnavailableTextContainer>
                <Text
                  $type="h3"
                  $color="var(--cordis-white)"
                  $weight="bold"
                  $size="extra-large"
                >
                  Unavailable
                </Text>
              </StyledUnavailableTextContainer>
            </StyledUnavailableRoomOverlay>
          )}

          {!executiveSuiteRoomExists && (
            <StyledUnavailableRoomOverlay>
              <Room
                imageType="executiveSuite"
                headerText="Executive Suite"
                buttonText="Reserve"
                flippable={true}
                unavailable={true}
              />
              <StyledUnavailableTextContainer>
                <Text
                  $type="h3"
                  $color="var(--cordis-white)"
                  $weight="bold"
                  $size="extra-large"
                >
                  Unavailable
                </Text>
              </StyledUnavailableTextContainer>
            </StyledUnavailableRoomOverlay>
          )} */}

        {/* {!ROOMS[0] && <Text>Standard Room not available</Text>}
          {!ROOMS[1] && <Text>Executive Room not available</Text>}
          {!ROOMS[2] && <Text>Executive Deluxe Room not available</Text>}
          {!ROOMS[3] && <Text>Executive Suite not available</Text>} */}
      </StyledRoomSection>
    </>
  );
}
