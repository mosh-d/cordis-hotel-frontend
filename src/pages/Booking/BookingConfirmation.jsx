import Booking1 from "../../assets/cordis-booking/CORDIS-BOOKING-1.png";
import { RiArrowLeftLine, RiCheckboxCircleLine } from "react-icons/ri";
import Text from "../../components/shared/Text";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "styled-components";
import { media } from "../../util/breakpoints";
import { cloudinaryBg } from "../../config/cloudinary";

//Booking image

const StyledBookingConfirmation = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Booking1});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: center;
  background-position-y: center;
  background-position-x: center;
  padding: 15rem;
  display: flex;

  ${media.tablet} {
    padding: 15rem 4rem;
    flex-direction: column;
  }
`;

const StyledBackArrow = styled.div`
  padding: 1.3rem 0;
  width: 13rem;
  height: 13rem;
  transition: all 0.1s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      transform: translateX(-0.4rem) scale(1.1);
      opacity: 0.7;
    }
  }

  &:active {
    transform: translateX(-0.8rem) scale(1.1);
    opacity: 1;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;

  & * {
    text-align: center;

    ${media.tablet} {
      text-align: left;
    }
  }
`;

const StyledTextIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  ${media.tablet} {
    justify-content: center;
  }
`;

export default function BookingConfirmationPage() {
  return (
    <>
      <StyledBookingConfirmation>
        <RouterLink to="..">
          <StyledBackArrow>
            <RiArrowLeftLine color="var(--cordis-emphasis)" size="7rem" />
          </StyledBackArrow>
        </RouterLink>
        <StyledTextWrapper>
          <StyledTextIconWrapper>
            <Text $color="var(--cordis-white)" $type="h1">
              Booking Confirmed
            </Text>
            <RiCheckboxCircleLine color="var(--cordis-white)" size="10rem" />
          </StyledTextIconWrapper>
          <Text
            style={{ textAlign: "center" }}
            $type="h3"
            $color="var(--cordis-white)"
          >
            Check your email for a confirmation message. Can’t wait to have you
            around!
          </Text>
        </StyledTextWrapper>
      </StyledBookingConfirmation>
    </>
  );
}
