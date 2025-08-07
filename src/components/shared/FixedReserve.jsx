import { styled } from "styled-components";
import Button from "./Button";
import Text from "./Text";
import { Link as RouterLink, useLocation} from "react-router-dom";

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
  const location = useLocation();

  // Navigate to room-booking with return path parameter
  const getBookingPath = () => {
    const returnPath = encodeURIComponent(location.pathname);
    return `/room-booking?returnTo=${returnPath}`;
  }

  return (
    <StyledFixedReserve>
      <RouterLink to={getBookingPath()}>
        <Button style={{ height: "5rem" }} $type="emphasis-ghost">
          <Text $weight="bold" $size="large">
            Reserve
          </Text>
        </Button>
      </RouterLink>
    </StyledFixedReserve>
  );
}
