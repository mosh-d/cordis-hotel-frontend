import { styled } from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";
// import { ROOMS } from "../../util/room-data"; // No longer needed - only using API data

const StyledRoomDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 8rem;
  gap: 1.8rem;
  height: 55rem;
  width: 70%;
  background-color: var(--cordis-text-color);

  ${media.tablet} {
    width: 100%;
  }

  ${media.mobile} {
    padding: 0 4rem;
  }
`;

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function RoomDetailsBlock({ $type, roomData = null }) {
  const getRoomData = () => {
    // Only use passed roomData (API data), no static fallback
    if (!roomData || roomData.length === 0) {
      return null;
    }

    // Find the room by propName from API data
    const roomIndex = roomData.findIndex(room => room.propName === $type);
    const room = roomData[roomIndex];

    if (room && roomIndex !== -1) {
      // Format availability display
      let availabilityText = "Available";
      if (typeof room.available === 'number') {
        availabilityText = room.available > 0 ? `${room.available} Available` : "Not Available";
      } else if (typeof room.available === 'boolean') {
        availabilityText = room.available ? "Available" : "Not Available";
      }

      return {
        data: room,
        index: roomIndex,
        available: availabilityText
      };
    }

    // Return null if room not found - let parent component handle this
    return null;
  };

  const roomInfo = getRoomData();

  // If no room data available, don't render anything
  if (!roomInfo) {
    return null;
  }

  return (
    <StyledRoomDetailsBlock>
      <Text
        $type="h2"
        $typeFace="primary"
        $weight="bold"
        $spacing=".2em"
        $color="var(--cordis-white)"
      >
        {roomInfo.available}
      </Text>
      <StyledTextWrapper>
        <Text
          $typeFace="secondary"
          $size="extra-large"
          $spacing=".05em"
          $weight="regular"
          $color="var(--cordis-white)"
        >
          Price per room
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {roomInfo.data.price}
        </Text>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <Text
          $typeFace="secondary"
          $size="extra-large"
          $spacing=".05em"
          $weight="regular"
          $color="var(--cordis-white)"
        >
          Size
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {roomInfo.data.size}
        </Text>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <Text
          $typeFace="secondary"
          $size="extra-large"
          $spacing=".05em"
          $weight="regular"
          $color="var(--cordis-white)"
        >
          Bed
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {roomInfo.data.bed}
        </Text>
      </StyledTextWrapper>
      <StyledTextWrapper>
        <Text
          $typeFace="secondary"
          $size="extra-large"
          $spacing=".05em"
          $weight="regular"
          $color="var(--cordis-white)"
        >
          Capacity
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {roomInfo.data.capacity}
        </Text>
      </StyledTextWrapper>
      {/* <StyledTextWrapper>
        <Text
          $typeFace="secondary"
          $size="extra-large"
          $spacing=".05em"
          $weight="regular"
          $color="var(--cordis-white)"
        >
          View
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {roomInfo.data.view}
        </Text>
      </StyledTextWrapper> */}

      <StyledButtonContainer>
        <RouterLink to={`details/${roomInfo.index}`}>
          <Button $type="white">
            <Text>More Details</Text>
          </Button>
        </RouterLink>
      </StyledButtonContainer>
    </StyledRoomDetailsBlock>
  );
}
