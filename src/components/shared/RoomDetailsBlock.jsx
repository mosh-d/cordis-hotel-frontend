import { styled } from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";

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
          {$type === "budget" ? "Price per room" : "Price per room"}
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {$type === "budget" ? "#150,000" : "#250,000"}
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
          {$type === "budget" ? "Size" : "Size"}
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {$type === "budget" ? "150 M2" : "250 M2"}
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
          {$type === "budget" ? "Bed" : "Bed"}
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {$type === "budget" ? "1 King size bed" : "2 King size beds"}
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
          {$type === "budget" ? "Capacity" : "Capacity"}
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {$type === "budget" ? "2 Adults & 1 Child" : "3 Adults & 2 Children"}
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
          {$type === "budget" ? "View" : "View"}
        </Text>
        <Text
          $size="extra-small"
          $weight="light"
          $color="var(--cordis-light-gray)"
        >
          {$type === "budget" ? "City or Lagoon View" : "Exotic City View"}
        </Text>
      </StyledTextWrapper>

      <StyledButtonContainer>
        <RouterLink to="/rooms/details">
          <Button $type="white">
            <Text>More Details</Text>
          </Button>
        </RouterLink>
      </StyledButtonContainer>
    </StyledRoomDetailsBlock>
  );
}
