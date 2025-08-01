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

  // Determine the booking path based on current location
  const getBookingPath = () => {
    if (location.pathname === "/about") return "/about/room-booking";
    if (location.pathname === "/contact") return "/contact/room-booking";
    if (location.pathname === "/blog") return "/blog/room-booking";
    return "/room-booking"; // fallback
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
