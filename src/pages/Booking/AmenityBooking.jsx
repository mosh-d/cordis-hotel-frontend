import { useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import Booking1 from "../../assets/cordis-booking/CORDIS-BOOKING-1.png";
import { RiArrowLeftLine } from "react-icons/ri";
import Text from "../../components/shared/Text";
import { Link as RouterLink } from "react-router-dom";
import CustomInput2 from "../../components/shared/CustomInput2";
import Button from "../../components/shared/Button";
import { media } from "../../util/breakpoints";

//State Imports
import { useState } from "react";

//Styles
const StyledRoomBookingPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;

  ${media.tablet} {
    flex-direction: column;
  }
`;

const StyledRoomBooking = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 55%;
  padding: 6rem;

  ${media.tablet} {
    width: 100%;
  }

  ${media.mobile} {
    padding: 6rem 2rem;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  gap: 4rem;

  ${media.mobile} {
    flex-direction: column;
    gap: 0;
    padding: 0 2rem;
  }
`;

const StyledInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledInputRow = styled.div`
  display: flex;
  gap: 8rem;

  ${media.desktop} {
    gap: 2rem;
  }

  ${media.mobile} {
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const StyledBackArrow = styled.div`
  padding: 1.3rem 0;
  width: 6rem;
  height: 6rem;
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

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 1.6rem;
  border: 1px solid var(--cordis-black);
  font-family: var(--font-family-primary);
  font-size: 1.4rem;
  resize: vertical;
  flex-shrink: 0;

  &::placeholder {
    font-size: 1.4rem;
    color: #999;
    font-family: var(--font-family-primary);
  }

  &:focus {
    outline: none;
    border-color: var(--cordis-emphasis);
  }
`;

const StyledBookingSummary = styled.div`
  background-image: url(${Booking1});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: center;
  background-position-y: center;
  background-position-x: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  padding: 4.8rem;
  gap: 4.8rem;

  ${media.tablet} {
    width: 100%;
  }
`;

const StyledConfirmationHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledTextWrapper = styled.div``;

const StyledConfirmationTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledMessagerow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledConfirmationTotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledPhoneInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  flex: 1;
  padding-bottom: 0.3rem;
`;

const StyledPhoneInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`;

const StyledCountrySelect = styled.select`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--cordis-black);
  font-size: var(--text-sm);
  letter-spacing: 0.2rem;
  border-bottom: 1px solid var(--cordis-black);
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;
  width: 9rem;

  ${media.mobile} {
    padding: 0;
  }

  &:focus-visible {
    outline: none;
    border-color: var(--cordis-emphasis);
  }
`;

const StyledPhoneInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: transparent;
  height: 100%;
  width: 100%;
  color: var(--cordis-black);
  font-size: var(--text-sm);
  letter-spacing: 0.2rem;
  border-bottom: 1px solid var(--cordis-black);
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;

  &:focus-visible {
    outline: none;
    border-color: var(--cordis-emphasis);
  }

  &::placeholder {
    color: var(--cordis-black);
    font-size: var(--text-sm);
    opacity: 0.5;
    letter-spacing: 0.2rem;
  }
`;

export default function AmenityBookingPage() {
  // Get shared state from outlet context
  const {
    firstName, setFirstName,
    lastName, setLastName,
    email, setEmail,
    phoneNumber, setPhoneNumber,
    countryCode, setCountryCode,
    checkIn, setCheckIn,
  } = useOutletContext();

  // Local state for amenity-specific fields
  const [sessionStart, setSessionStart] = useState("");
  const [amenity, setAmenity] = useState("");
  const [duration, setDuration] = useState(0);

  //Amenity price
  const AMENITY_PRICES = {
    spa: 10000,
    gym: 5000,
  };

  const AMENITY_NAMES = {
    spa: "Spa",
    gym: "Gym",
  };

  const durationText = () => {
    if (duration === 1) {
      return "1 hour";
    } else {
      return duration + " hours";
    }
  };

  const amenityPrice = AMENITY_PRICES[amenity] || 0;
  const amenityName = AMENITY_NAMES[amenity] || "Select an Amenity";

  const subtotal = amenityPrice * duration;
  const vat = subtotal * 0.075; // 7.5%
  const stateTax = subtotal * 0.05; // 5%
  const serviceCharge = subtotal * 0.1; // 10%
  const total = subtotal + vat + stateTax + serviceCharge;

  // Phone number formatting function
  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, "");

    // Format based on length
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        6
      )} ${phoneNumber.slice(6)}`;
    } else {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
        3,
        6
      )} ${phoneNumber.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  // Country codes data
  const countryCodes = [
    { code: "+234", country: "NG", name: "Nigeria" },
    { code: "+1", country: "US", name: "United States" },
    { code: "+44", country: "GB", name: "United Kingdom" },
    { code: "+33", country: "FR", name: "France" },
    { code: "+49", country: "DE", name: "Germany" },
    { code: "+86", country: "CN", name: "China" },
    { code: "+91", country: "IN", name: "India" },
    { code: "+81", country: "JP", name: "Japan" },
    { code: "+27", country: "ZA", name: "South Africa" },
    { code: "+254", country: "KE", name: "Kenya" },
    { code: "+233", country: "GH", name: "Ghana" },
  ];

  return (
    <>
      <StyledRoomBookingPage>
        <StyledRoomBooking>
          <StyledHeaderWrapper>
            <RouterLink to="..">
              <StyledBackArrow>
                <RiArrowLeftLine color="var(--cordis-black)" size="3rem" />
              </StyledBackArrow>
            </RouterLink>
            <Text $type="h2" $weight="bold" $color="var(--cordis-black)">
              Amenity Booking
            </Text>
          </StyledHeaderWrapper>
          <StyledInputs>
            <StyledInputRow>
              <CustomInput2
                header="First Name"
                $placeholder="eg. John"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <CustomInput2
                header="Amenity"
                $type="select"
                $placeholder="Select Amenity"
                name="room-category"
                value={amenity}
                onChange={(e) => setAmenity(e.target.value)}
              >
                <option value="">Choose an Amenity</option>
                <option value="spa">Spa</option>
                <option value="gym">Gym</option>
              </CustomInput2>
            </StyledInputRow>
            <StyledInputRow>
              <CustomInput2
                header="Last Name"
                $placeholder="eg. Doe"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <CustomInput2
                header="Check-In"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </StyledInputRow>
            <StyledInputRow>
              <CustomInput2
                header="Email"
                $placeholder="example@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CustomInput2
                header="Session Start"
                type="time"
                value={sessionStart}
                onChange={(e) => setSessionStart(e.target.value)}
              />
            </StyledInputRow>
            <StyledInputRow>
              <StyledPhoneInputWrapper>
                <Text
                  $type="p"
                  $color="var(--cordis-black)"
                  $weight="light"
                  $typeFace="primary"
                >
                  Phone Number
                </Text>
                <StyledPhoneInputContainer>
                  <StyledCountrySelect
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.country} {country.code}
                      </option>
                    ))}
                  </StyledCountrySelect>
                  <StyledPhoneInput
                    type="tel"
                    placeholder="803 123 4567"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    maxLength="13"
                  />
                </StyledPhoneInputContainer>
              </StyledPhoneInputWrapper>
              <CustomInput2
                header="Duration"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </StyledInputRow>
          </StyledInputs>
          <StyledMessagerow>
            <Text
              $type="p"
              $color="var(--cordis-black)"
              $weight="light"
              $typeFace="primary"
            >
              Additional Message
            </Text>
            <StyledTextarea placeholder="Write a message here" />
          </StyledMessagerow>
        </StyledRoomBooking>
        <StyledBookingSummary>
          <StyledConfirmationHeaderWrapper>
            <Text $type="h2" $color="var(--cordis-white)" $weight="bold">
              Booking Summary
            </Text>
          </StyledConfirmationHeaderWrapper>
          <StyledConfirmationTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Check-In
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {checkIn}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Session Start
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {sessionStart}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                {amenityName}
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{amenityPrice.toLocaleString()} per hour
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Duration
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                {durationText()}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                VAT (7.5%)
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{vat.toLocaleString()}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Lagos State Tax (5%)
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{stateTax.toLocaleString()}
              </Text>
            </StyledTextWrapper>
            <StyledTextWrapper>
              <Text
                $typeFace="secondary"
                $size="extra-large"
                $spacing=".05em"
                $weight="bold"
                $color="var(--cordis-white)"
              >
                Service Charge (10%)
              </Text>
              <Text
                $size="small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                ₦{serviceCharge.toLocaleString()}
              </Text>
            </StyledTextWrapper>
          </StyledConfirmationTextWrapper>
          <StyledConfirmationTotalWrapper>
            <Text $type="h3" $color="var(--cordis-white)" $weight="bold">
              Total
            </Text>
            <Text $color="var(--cordis-white)" $size="extra-large">
              ₦{total.toLocaleString()}
            </Text>
            <RouterLink to="/booking-confirmation">
              <Button $type="emphasis">
                <Text>Confirm Booking</Text>
              </Button>
            </RouterLink>
          </StyledConfirmationTotalWrapper>
        </StyledBookingSummary>
      </StyledRoomBookingPage>
    </>
  );
}
