import { styled } from "styled-components";
import { useMemo } from "react";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink, useOutletContext } from "react-router-dom";
import { useDynamicRoomData } from "../../hooks/useDynamicRoomData";
import { media } from "../../util/breakpoints";

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

export default function RoomDetailsBlock({ $type }) {
  const context = useOutletContext();

  // Generate search parameters using context dates
  const searchParams = useMemo(() => {
    // Fallback dates if context doesn't have them
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    return {
      checkInDate: context?.checkIn || today.toISOString().split('T')[0],
      checkOutDate: context?.checkOut || tomorrow.toISOString().split('T')[0],
      adultNo: context?.noOfAdults || 2,
      childNo: context?.noOfChildren || 1,
      facilityTypeId: 1
    };
  }, [context?.checkIn, context?.checkOut, context?.noOfAdults, context?.noOfChildren]);

  // Get API room data
  const { ROOMS, loading, error } = useDynamicRoomData(searchParams);

  const getRoomData = () => {
    // Find the room by propName from API data
    const roomIndex = ROOMS.findIndex(room => room.propName === $type);
    const room = ROOMS[roomIndex];
    
    if (room && roomIndex !== -1) {
      return { 
        data: room, 
        index: roomIndex, 
        available: room.available ? `${room.available} Available` : "Not Available"
      };
    }
    
    // Fallback if room not found
    return { 
      data: ROOMS[0] || {}, 
      index: 0, 
      available: "Loading..." 
    };
  };

  if (loading) {
    return (
      <StyledRoomDetailsBlock>
        <Text $color="var(--cordis-white)">Loading room details...</Text>
      </StyledRoomDetailsBlock>
    );
  }

  if (error || !ROOMS.length) {
    return (
      <StyledRoomDetailsBlock>
        <Text $color="var(--cordis-white)">Error loading room data</Text>
      </StyledRoomDetailsBlock>
    );
  }

  const roomInfo = getRoomData();

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
