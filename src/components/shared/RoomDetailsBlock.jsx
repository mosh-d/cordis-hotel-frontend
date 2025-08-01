import { styled } from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { ROOMS } from "../../util/room-data.js";

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
  const roomIndex = $type === "budget" ? 0 : 1;

  return (
    <StyledRoomDetailsBlock>
      <Text
        $type="h2"
        $typeFace="primary"
        $weight="bold"
        $spacing=".2em"
        $color="var(--cordis-white)"
      >
        {$type === "budget" ? "12 Available" : "9 Available"}
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
          {$type === "budget" ? ROOMS[0].price : ROOMS[1].price}
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
          {$type === "budget" ? ROOMS[0].size : ROOMS[1].size}
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
          {$type === "budget" ? ROOMS[0].bed : ROOMS[1].bed}
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
          {$type === "budget" ? ROOMS[0].capacity : ROOMS[1].capacity}
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
          {$type === "budget" ? ROOMS[0].view : ROOMS[1].view}
        </Text>
      </StyledTextWrapper>

      <StyledButtonContainer>
        <RouterLink to={`details/${roomIndex}`}>
          <Button $type="white">
            <Text>More Details</Text>
          </Button>
        </RouterLink>
      </StyledButtonContainer>
    </StyledRoomDetailsBlock>
  );
}
