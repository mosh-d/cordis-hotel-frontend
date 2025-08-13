import { styled } from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { ROOMS } from "../../util/room-data.js";
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
  const getRoomData = () => {
    if ($type === "standard") return { data: ROOMS[0], index: 0, available: "12 Available" };
    if ($type === "executive") return { data: ROOMS[1], index: 1, available: "9 Available" };
    if ($type === "executiveDeluxe") return { data: ROOMS[2], index: 2, available: "7 Available" };
    if ($type === "executiveSuite") return { data: ROOMS[3], index: 3, available: "5 Available" };
    return { data: ROOMS[0], index: 0, available: "12 Available" };
  };

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
      <StyledTextWrapper>
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
      </StyledTextWrapper>

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
