import Room from "../shared/Room";
import styled from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";
import { ROOMS } from "../../util/room-data";

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

  /* iOS Safari specific fixes */
  /* ${media.mobile} {
    &::-webkit-scrollbar {
      height: 1rem;
      -webkit-appearance: none;
    }
    
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
      height: 1rem;
      border-radius: .5rem;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--cordis-text-color);
      height: 1rem;
      border-radius: .5rem;
      border: 2px solid transparent;
      background-clip: content-box;
    }
  } */
`;

const StyledRoomContainer = styled.div``;

const StyledUnavailableRoomOverlay = styled.div`
  /* background-color: rgba(194, 13, 13, 0.5); */
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

// const StyledUnavailableRoom = styled(Room)`
//   display: relative;
//   opacity: 0.5;
//   cursor: not-allowed;
// `;

export default function RoomSection() {
  const standardRoomExists = ROOMS.find((room) => room.propName === "standard");
  const executiveRoomExists = ROOMS.find(
    (room) => room.propName === "executive"
  );
  const executiveDeluxeRoomExists = ROOMS.find(
    (room) => room.propName === "executiveDeluxe"
  );
  const executiveSuiteRoomExists = ROOMS.find(
    (room) => room.propName === "executiveSuite"
  );

  return (
    <>
      <StyledRoomSection>
        <RoomText>
          <Text $type="h1" $weight="bold" $color="var(--cordis-black)">
            Our Rooms
          </Text>
          <Text $type="p" $size="large" $weight="light">
            Click the images for details
          </Text>
        </RoomText>

        <StyledRooms>
          {ROOMS.filter((room) => room.propName).map((room, index) => (
            <StyledRoomContainer key={index}>
              <Room
                imageType={room.propName}
                headerText={room.name}
                buttonText="Reserve"
                flippable={true}
              />
            </StyledRoomContainer>
          ))}

          {!standardRoomExists && (
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
          )}

          {/* {!ROOMS[0] && <Text>Standard Room not available</Text>}
          {!ROOMS[1] && <Text>Executive Room not available</Text>}
          {!ROOMS[2] && <Text>Executive Deluxe Room not available</Text>}
          {!ROOMS[3] && <Text>Executive Suite not available</Text>} */}
        </StyledRooms>
      </StyledRoomSection>
    </>
  );
}
