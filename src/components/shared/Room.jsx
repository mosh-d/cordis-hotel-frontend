import Text from "./Text";
import styled from "styled-components";
import Carousel from "./Carousel";
import FlippableCarousel from "./FlippableCarousel";
import Button from "./Button";
import { Link as RouteLink } from "react-router-dom";
import { media } from "../../util/breakpoints";
import { ROOMS } from "../../util/room-data";

//budget room images
import BudgetRoom1 from "../../assets/budget-rooms/BUDGET-ROOM-1.png";
import BudgetRoom2 from "../../assets/budget-rooms/BUDGET-ROOM-2.png";
import BudgetRoom3 from "../../assets/budget-rooms/BUDGET-ROOM-3.png";
import BudgetRoom4 from "../../assets/budget-rooms/BUDGET-ROOM-4.png";
import BudgetRoom5 from "../../assets/budget-rooms/BUDGET-ROOM-5.png";

//diplomatic room images
import DiplomaticRoom1 from "../../assets/diplomatic-rooms/DIPLOMATIC-ROOM-1.png";
import DiplomaticRoom2 from "../../assets/diplomatic-rooms/DIPLOMATIC-ROOM-2.png";
import DiplomaticRoom3 from "../../assets/diplomatic-rooms/DIPLOMATIC-ROOM-3.png";
import DiplomaticRoom4 from "../../assets/diplomatic-rooms/DIPLOMATIC-ROOM-4.png";
import DiplomaticRoom5 from "../../assets/diplomatic-rooms/DIPLOMATIC-ROOM-5.png";

const BudgetRoomImages = [
  BudgetRoom1,
  BudgetRoom2,
  BudgetRoom3,
  BudgetRoom4,
  BudgetRoom5,
];
const DiplomaticRoomImages = [
  DiplomaticRoom1,
  DiplomaticRoom2,
  DiplomaticRoom3,
  DiplomaticRoom4,
  DiplomaticRoom5,
];

const StyledRoom = styled.div`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  gap: 1.5rem;

  ${media.tablet} {
    width: 100%;
  }
`;

const StyledRoomCardWrapper = styled.div`
  width: 100%;
  display: flex;

  ${media.tablet} {
    flex-direction: column;
  }
`;

const StyledRoomCarousel = styled.div`
  width: 100%;
  height: 55rem;
  background-color: ${({ $bgColor }) => $bgColor || "transparent"};
  
  ${media.tablet} {
    height: 50rem;
  }
  
  ${media.mobile} {
  }

`;

const RoomDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;

  ${media.tablet} {
    gap: 1rem;
  }

  ${media.mobile} {
    padding: 2rem 0;
  }
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  & * {
    text-align: end;
  }
`;

const AmenitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  
  li {
    padding: 0.25rem 0;
    color: var(--cordis-white);
  }
`;

const StyledButtonContainer = styled.div`
  
`

export default function Room({
  imageType,
  headerText,
  buttonText,
  children,
  $bgColor,
  flippable = false,
}) {
  const images =
    imageType === "budget" ? BudgetRoomImages : DiplomaticRoomImages;

  const backContent = (
    <RoomDetailsContent>
      <Text $type="h2" $color="var(--cordis-white)" $weight="bold">
        {headerText} Room Details
      </Text>
      
      <DetailItem>
        <Text $color="var(--cordis-white)">Price:</Text>
        <Text $color="var(--cordis-emphasis)" $weight="bold">{imageType === "budget" ? ROOMS[0].price : ROOMS[1].price}</Text>
      </DetailItem>
      
      <DetailItem>
        <Text $color="var(--cordis-white)">Size:</Text>
        <Text $color="var(--cordis-white)">{imageType === "budget" ? ROOMS[0].size : ROOMS[1].size}</Text>
      </DetailItem>
      
      <DetailItem>
        <Text $color="var(--cordis-white)">Capacity:</Text>
        <Text $color="var(--cordis-white)">{imageType === "budget" ? ROOMS[0].capacity : ROOMS[1].capacity}</Text>
      </DetailItem>
      
      <div>
        <Text $color="var(--cordis-white)" $weight="bold">Amenities:</Text>
        <AmenitiesList>
          {imageType === "budget" ? ROOMS[0].amenities.map((amenity, index) => (
            <li key={index}>
              <Text $color="var(--cordis-white)" $size="small">• {amenity}</Text>
            </li>
          )) : ROOMS[1].amenities.map((amenity, index) => (
            <li key={index}>
              <Text $color="var(--cordis-white)" $size="small">• {amenity}</Text>
            </li>
          ))}
        </AmenitiesList>
      </div>
      
      <Text $color="var(--cordis-gray)" $size="small" style={{ marginTop: "1rem" }}>
        Click anywhere to flip back
      </Text>
    </RoomDetailsContent>
  );

  return (
    <StyledRoom>
      <Text
        $type="h3"
        $spacing=".2em"
        $typeFace="primary"
        $size="medium"
        $weight="regular"
      >
        {headerText}
      </Text>

      <StyledRoomCardWrapper>
        <StyledRoomCarousel $bgColor={$bgColor}>
          {flippable ? (
            <FlippableCarousel 
              ImageUrls={images} 
              backContent={backContent}
            />
          ) : (
            <Carousel ImageUrls={images} />
          )}
        </StyledRoomCarousel>
        {children}
      </StyledRoomCardWrapper>

      <StyledButtonContainer>
        <RouteLink to="/room-booking">
          <Button $type="underlined">
            <Text $type="p" $size="medium" $weight="regular">
              {buttonText}
            </Text>
          </Button>
        </RouteLink>
      </StyledButtonContainer>
    </StyledRoom>
  );
}
