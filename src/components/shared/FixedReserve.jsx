import { styled } from "styled-components";
import Button from "./Button";
import Text from "./Text";

const StyledFixedReserve = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.4rem 0;
  background-color: var(--cordis-white);
  z-index: 100;
`;

export default function FixedReserve() {
  return (
    <StyledFixedReserve>
      <Button style={{ height: "5rem" }} $type="emphasis-ghost">
        <Text $weight="bold" $size="large">
          Reserve
        </Text>
      </Button>
    </StyledFixedReserve>
  );
}
