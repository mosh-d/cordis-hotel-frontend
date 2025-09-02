import { useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import Text from "../shared/Text";
import { TbPlus, TbMinus } from "react-icons/tb";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { media } from "../../util/breakpoints";
import { useState } from "react";

const StyledRoomGuests = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
  gap: 0.1rem;
  box-shadow: var(--popup-md);
  background-color: var(--cordis-white);
  width: 100%;
`;

const StyledVariableItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
  border-bottom: 1px solid var(--cordis-gray);
  padding: 1.2rem;
  width: 100%;

  ${media.desktop} {
  }
`;

const StyledCheckItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--cordis-light-gray);
  }
`;

const StyledCheckboxContainer = styled.div``;

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledOptionContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 8rem;
`;

const StyledIconContainer = styled.div`
  border: 1px solid var(--cordis-black);
  border-radius: 1000rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function RoomsAndGuestsPopup() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    countryCode,
    setCountryCode,
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    roomCategory,
    setRoomCategory,
    noOfRooms,
    setNoOfRooms,
    noOfAdults,
    setNoOfAdults,
    noOfChildren,
    setNoOfChildren,
    rollawayBed,
    setRollawayBed,
    roomsAndGuests,
    setRoomsAndGuests,
  } = useOutletContext();

  // Setting button disabled states
  let roomsMinusDisabled = noOfRooms <= 1 ? true : false;
  let roomsPlusDisabled = noOfRooms >= 4 ? true : false;
  let adultsMinusDisabled = noOfAdults <= 1 ? true : false;
  let adultsPlusDisabled = noOfAdults >= 2 ? true : false;
  let childrenMinusDisabled = noOfChildren <= 0 ? true : false;
  let childrenPlusDisabled =
    noOfChildren >= 1 && roomCategory != "Executive Suite Room"
      ? true
      : noOfChildren >= 2 && roomCategory == "Executive Suite Room"
      ? true
      : false;

  return (
    <StyledRoomGuests>
      <StyledVariableItem>
        <StyledTextContainer>
          <Text $size="extra-small" $weight="bold">
            Rooms
          </Text>
        </StyledTextContainer>
        <StyledOptionContainer>
          <StyledIconContainer
            onClick={() => !roomsMinusDisabled && setNoOfRooms(noOfRooms - 1)}
            style={{ opacity: roomsMinusDisabled && ".3" }}
          >
            {roomsMinusDisabled ? (
              <TbMinus size="1.5rem" opacity=".5" />
            ) : (
              <TbMinus size="1.5rem" />
            )}
          </StyledIconContainer>
          <Text $size="large" style={{ lineHeight: "1" }}>
            {noOfRooms}
          </Text>
          <StyledIconContainer
            onClick={() => !roomsPlusDisabled && setNoOfRooms(noOfRooms + 1)}
            style={{ opacity: roomsPlusDisabled && ".3" }}
          >
            {roomsPlusDisabled ? (
              <TbPlus size="1.5rem" opacity=".5" />
            ) : (
              <TbPlus size="1.5rem" />
            )}
          </StyledIconContainer>
        </StyledOptionContainer>
      </StyledVariableItem>
      <StyledVariableItem>
        <StyledTextContainer>
          <Text $size="extra-small" $weight="bold">
            Adults
          </Text>
          <Text $size="extra-small" $color="var(--cordis-gray)">
            (Max: 2 adults per room)
          </Text>
        </StyledTextContainer>
        <StyledOptionContainer>
          <StyledIconContainer
            onClick={() =>
              !adultsMinusDisabled && setNoOfAdults(noOfAdults - 1)
            }
            style={{ opacity: adultsMinusDisabled && ".3" }}
          >
            {adultsMinusDisabled ? (
              <TbMinus size="1.5rem" opacity=".5" />
            ) : (
              <TbMinus size="1.5rem" />
            )}
          </StyledIconContainer>
          <Text $size="large" style={{ lineHeight: "1" }}>
            {noOfAdults}
          </Text>
          <StyledIconContainer
            onClick={() => !adultsPlusDisabled && setNoOfAdults(noOfAdults + 1)}
            style={{ opacity: adultsPlusDisabled && ".3" }}
          >
            {adultsPlusDisabled ? (
              <TbPlus size="1.5rem" opacity=".5" />
            ) : (
              <TbPlus size="1.5rem" />
            )}
          </StyledIconContainer>
        </StyledOptionContainer>
      </StyledVariableItem>
      <StyledVariableItem>
        <StyledTextContainer>
          <Text $size="extra-small" $weight="bold">
            Children
          </Text>
          <Text $size="extra-small" $color="var(--cordis-gray)">
            (Max: 1 child per room aged 7 or younger)
          </Text>
        </StyledTextContainer>
        <StyledOptionContainer>
          <StyledIconContainer
            onClick={() =>
              !childrenMinusDisabled && setNoOfChildren(noOfChildren - 1)
            }
            style={{ opacity: childrenMinusDisabled && ".3" }}
          >
            {childrenMinusDisabled ? (
              <TbMinus size="1.5rem" opacity=".5" />
            ) : (
              <TbMinus size="1.5rem" />
            )}
          </StyledIconContainer>
          <Text $size="large" style={{ lineHeight: "1" }}>
            {noOfChildren}
          </Text>
          <StyledIconContainer
            onClick={() =>
              !childrenPlusDisabled && setNoOfChildren(noOfChildren + 1)
            }
            style={{ opacity: childrenPlusDisabled && ".3" }}
          >
            {childrenPlusDisabled ? (
              <TbPlus size="1.5rem" opacity=".5" />
            ) : (
              <TbPlus size="1.5rem" />
            )}
          </StyledIconContainer>
        </StyledOptionContainer>
      </StyledVariableItem>
      <StyledCheckItem onClick={() => setRollawayBed((checked) => !checked)}>
        <StyledTextContainer>
          <Text $size="extra-small" $weight="bold">
            Rollaway bed?
          </Text>
          <Text $size="extra-small" $color="var(--cordis-gray)">
            (1 rollaway bed for ₦20,000)
          </Text>
        </StyledTextContainer>
        <StyledCheckboxContainer>
          {!rollawayBed && <MdCheckBoxOutlineBlank size="2rem" />}
          {rollawayBed && <MdCheckBox size="2rem" />}
        </StyledCheckboxContainer>
      </StyledCheckItem>
    </StyledRoomGuests>
  );
}
