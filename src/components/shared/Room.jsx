import Text from "./Text";
import styled from "styled-components";
import Carousel from "./Carousel";
import Button from "./Button";
import { Link as RouteLink } from "react-router-dom";

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
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  gap: 1.5rem;
`;

const StyledRoomCardWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const StyledRoomCarousel = styled.div`
  width: 100%;
  height: 55rem;
  background-color: ${({ $bgColor }) => $bgColor || "transparent"};
`;

export default function Room({
  imageType,
  headerText,
  buttonText,
  children,
  $bgColor,
}) {
  const images =
    imageType === "budget" ? BudgetRoomImages : DiplomaticRoomImages;

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
          <Carousel ImageUrls={images} />
        </StyledRoomCarousel>
        {children}
      </StyledRoomCardWrapper>

      <RouteLink to="/room-booking">
        <Button $type="underlined">
          <Text $type="p" $size="medium" $weight="regular">
            {buttonText}
          </Text>
        </Button>
      </RouteLink>
    </StyledRoom>
  );
}
