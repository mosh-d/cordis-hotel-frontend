import Booking2 from "../../assets/cordis-booking-confirmation/CORDIS-BOOKING-CONFIRMATION-1.jpg";
import { RiArrowLeftLine, RiCheckboxCircleLine } from "react-icons/ri";
import Text from "../../components/shared/Text";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { media } from "../../util/breakpoints";
import { cloudinaryBg } from "../../config/cloudinary";
import { useEffect, useState } from "react";
import Button from "../../components/shared/Button";

//Booking image

const StyledBookingConfirmation = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Booking2});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: center;
  background-position-y: center;
  background-position-x: center;
  padding: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    padding: 15rem 4rem;
    flex-direction: column;
  }
`;

// const StyledBackArrow = styled.div`
//   padding: 1.3rem 0;
//   width: 13rem;
//   height: 13rem;
//   transition: all 0.1s ease-in-out;

//   @media (hover: hover) and (pointer: fine) {
//     &:hover {
//       cursor: pointer;
//       transform: translateX(-0.4rem) scale(1.1);
//       opacity: 0.7;
//     }
//   }

//   &:active {
//     transform: translateX(-0.8rem) scale(1.1);
//     opacity: 1;
//   }
// `;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: start;
  gap: 4.8rem;

  & * {
    text-align: center;

    ${media.tablet} {
      text-align: left;
    }
  }
`;

// const StyledTextIconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2.4rem;

//   ${media.tablet} {
//     justify-content: center;
//   }
// `;

const StyledBookingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 2rem;
  background-color: hsla(0, 0.00%, 100.00%, 1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function BookingConfirmationPage() {
  const location = useLocation();
  const [bookingRef, setBookingRef] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Parse URL parameters
    const params = new URLSearchParams(location.search);
    const ref = params.get("bookingRef");
    const msg = params.get("message");

    if (ref) {
      setBookingRef(ref);
    }
    if (msg) {
      setMessage(decodeURIComponent(msg));
    }

    setLoading(false);
  }, [location]);

  if (loading) {
    return (
      <StyledBookingConfirmation>
        <StyledTextWrapper>
          <Text $color="var(--cordis-white)" $type="h1">
            Loading booking details...
          </Text>
        </StyledTextWrapper>
      </StyledBookingConfirmation>
    );
  }

  return (
    <>
      <StyledBookingConfirmation>
        {/* <RouterLink to="..">
          <StyledBackArrow>
            <RiArrowLeftLine color="var(--cordis-white)" size="5rem" />
          </StyledBackArrow>
        </RouterLink> */}
        <StyledTextWrapper>
          <StyledBookingCard>
            <Text
              $type="h3"
              $color="var(--cordis-text-color)"
              style={{ marginBottom: "1rem", textAlign: "center" }}
            >
              {message || "Your reservation has been successfully made."}
            </Text>

            <div
              style={{
                backgroundColor: "var(--cordis-light-gray)",
                padding: "1.5rem",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                $type="p"
                $color="var(--cordis-text-color)"
                style={{ marginBottom: "0.5rem" }}
              >
                Booking Reference
              </Text>
              <Text
                $type="h2"
                $color="var(--cordis-black)"
                style={{
                  fontFamily: "monospace",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                {bookingRef}
              </Text>
            </div>

            <Text
              style={{ textAlign: "center", marginBottom: "2rem" }}
              $type="p"
              $color="var(--cordis-text-color)"
            >
              Check your email for a confirmation message. Can't wait to have
              you around!
            </Text>

            <StyledButtonContainer>
              <RouterLink to="/">
                <Button $type="black">
                  <Text $type="p" $size="small">
                    Return to Home
                  </Text>
                </Button>
              </RouterLink>

              <RouterLink to="/rooms">
                <Button $type="underlined">
                  <Text $type="p" $size="small">
                    Reserve another Room
                  </Text>
                </Button>
              </RouterLink>
            </StyledButtonContainer>
          </StyledBookingCard>
        </StyledTextWrapper>
      </StyledBookingConfirmation>
    </>
  );
}
