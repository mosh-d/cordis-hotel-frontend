import { styled } from "styled-components";
import Booking1 from "../assets/cordis-booking/CORDIS-BOOKING-1.png";
import { RiArrowLeftLine } from "react-icons/ri";
import Text from "../components/shared/Text";
import { Link as RouterLink } from "react-router-dom";
import CustomInput2 from "../components/shared/CustomInput2";
import Button from "../components/shared/Button";

//State Imports
import { useState } from "react";

//Styles
const StyledRoomBookingPage = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: stretch;
`;

const StyledRoomBooking = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 55%;
  padding: 6rem;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  gap: 4rem;
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
`;

const StyledBackArrow = styled.div`
  padding: 1.3rem 0;
  width: 6rem;
  height: 6rem;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: translateX(-0.4rem) scale(1.1);
    opacity: 0.7;
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

const StyledBookingConfirmation = styled.div`
  background-image: url(${Booking1});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: center;
  background-position-y: center;
  background-position-x: center;
  display: flex;
  flex-direction: column;
  width: 45%;
  padding: 4.8rem;
  gap: 4.8rem;
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

const StyledConfirmationTotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export default function RoomBookingPage() {
  //State Declarations
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomCategory, setRoomCategory] = useState("");
  const [noOfRooms, setNoOfRooms] = useState(0);

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
              Room Details
            </Text>
          </StyledHeaderWrapper>
          <StyledInputs>
            <StyledInputRow>
              <CustomInput2
                header="First Name"
                $placeholder="eg. John"
                type="text"
              />
              <CustomInput2 header="Check-In" type="date" />
            </StyledInputRow>
            <StyledInputRow>
              <CustomInput2
                header="Last Name"
                $placeholder="eg. Doe"
                type="text"
              />
              <CustomInput2 header="Check-Out" type="date" />
            </StyledInputRow>
            <StyledInputRow>
              <CustomInput2
                header="Email"
                $placeholder="example@email.com"
                type="email"
              />
              <CustomInput2
                header="Room Category"
                $type="select"
                $placeholder="Diplomatic Room"
                name="room-category"
              >
                <option value="">Choose a room type</option>
                <option value="budget">Budget Room</option>
                <option value="diplomatic">Diplomatic Room</option>
              </CustomInput2>
            </StyledInputRow>
            <StyledInputRow>
              <CustomInput2
                header="Phone Number"
                $placeholder="eg. 08999999999"
                type="tel"
              />
              <CustomInput2
                header="Number of Rooms"
                $placeholder="eg. 2"
                type="number"
              />
            </StyledInputRow>
          </StyledInputs>
          <StyledTextarea placeholder="Write a message here" />
        </StyledRoomBooking>
        <StyledBookingConfirmation>
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
                $weight="regular"
                $color="var(--cordis-white)"
              >
                Check-In
              </Text>
              <Text
                $size="extra-small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                Wed, 11 Jun
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
                Check-Out
              </Text>
              <Text
                $size="extra-small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                Wed, 13 Jun
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
                Diplomatic Room
              </Text>
              <Text
                $size="extra-small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                #150,000
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
                Number of Rooms
              </Text>
              <Text
                $size="extra-small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                2
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
                VAT
              </Text>
              <Text
                $size="extra-small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                #11,000
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
                Lagos State Tax
              </Text>
              <Text
                $size="extra-small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                #13,400
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
                Service Charge
              </Text>
              <Text
                $size="extra-small"
                $weight="light"
                $color="var(--cordis-light-gray)"
              >
                #19,700
              </Text>
            </StyledTextWrapper>
          </StyledConfirmationTextWrapper>
          <StyledConfirmationTotalWrapper>
            <Text $type="h3" $color="var(--cordis-white)" $weight="bold">
              Total
            </Text>
            <Text $color="var(--cordis-white)" $size="extra-large">
              #350,000
            </Text>
            <RouterLink to="/booking-confirmation">
              <Button $type="emphasis">
                <Text>Confirm Booking</Text>
              </Button>
            </RouterLink>
          </StyledConfirmationTotalWrapper>
        </StyledBookingConfirmation>
      </StyledRoomBookingPage>
    </>
  );
}
