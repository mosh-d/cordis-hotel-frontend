import { styled } from "styled-components";
import Text from "../shared/Text";

const StyledGetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12rem;
  gap: 1.8rem;
  background-color: var(--cordis-light-gray);
`;

export default function GetInTouchSection() {
  return (
    <StyledGetInTouch>
      <Text
        $type="h1"
        $size="extra-large"
        $weight="bold"
        $color="var(--cordis-black)"
      >
        Get In Touch
      </Text>
      <Text
        $type="p"
        $typeFace="secondary"
        $size="extra-large"
        $weight="bold"
        $spacing="0.04em"
      >
        Have any questions or need assistance? The team at Five Clover Inn,
        Abijo is always ready to ensure your stay is flawless. Don’t hesitate to
        reach out—we’re here to help with anything you need.
      </Text>
    </StyledGetInTouch>
  );
}
