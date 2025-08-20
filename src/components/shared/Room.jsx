import { useOutletContext } from "react-router-dom";
import Text from "./Text";
import styled from "styled-components";
import Carousel from "./Carousel";
import FlippableCarousel from "./FlippableCarousel";
import Button from "./Button";
import { Link as RouteLink } from "react-router-dom";
import { media } from "../../util/breakpoints";
import { ROOMS } from "../../util/room-data";

//Standard room images
import StandardRoom1 from "../../assets/standard-room/STANDARD-ROOM-1.jpg";
import StandardRoom2 from "../../assets/standard-room/STANDARD-ROOM-2.jpg";
import StandardRoom3 from "../../assets/standard-room/STANDARD-ROOM-3.jpg";

//Executive room images
import ExecutiveRoom1 from "../../assets/executive-room/EXECUTIVE-ROOM-1.jpg";
import ExecutiveRoom2 from "../../assets/executive-room/EXECUTIVE-ROOM-2.jpg";

//Executive Deluxe room images
import ExecutiveDeluxeRoom1 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-1.jpg";
import ExecutiveDeluxeRoom2 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-2.jpg";

//Executive Suite images
import ExecutiveSuite1 from "../../assets/executive-suite/EXECUTIVE-SUITE-1.jpg";
import ExecutiveSuite2 from "../../assets/executive-suite/EXECUTIVE-SUITE-2.jpg";

const StandardRoomImages = [StandardRoom1, StandardRoom2, StandardRoom3];
const ExecutiveRoomImages = [ExecutiveRoom1, ExecutiveRoom2];
const ExecutiveDeluxeRoomImages = [ExecutiveDeluxeRoom1, ExecutiveDeluxeRoom2];
const ExecutiveSuiteImages = [ExecutiveSuite1, ExecutiveSuite2];

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
  gap: 1rem;
  padding: 2rem;
  text-align: center;

  ${media.tablet} {
    gap: .1rem;
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

const AmenitiesWrapper = styled.div`
  width: 100%;

`;

const AmenitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 1rem;

  li {
    padding: 0.25rem 0;
    color: var(--cordis-white);
  }
`;

const StyledButtonContainer = styled.div``;

export default function Room({
  imageType,
  headerText,
  buttonText,
  children,
  $bgColor,
  flippable = false,
}) {
  const { roomCategory, setRoomCategory } = useOutletContext();

  const getRoomData = () => {
    if (ROOMS[0] && imageType === "standard") return ROOMS[0];
    if (ROOMS[1] && imageType === "executive") return ROOMS[1];
    if (ROOMS[2] && imageType === "executiveDeluxe") return ROOMS[2];
    if (ROOMS[3] && imageType === "executiveSuite") return ROOMS[3];
    return ROOMS[0];
  };

  const images =
    imageType === "standard"
      ? StandardRoomImages
      : imageType === "executive"
      ? ExecutiveRoomImages
      : imageType === "executiveDeluxe"
      ? ExecutiveDeluxeRoomImages
      : imageType === "executiveSuite"
      ? ExecutiveSuiteImages
      : StandardRoomImages;

  const backContent = (
    <RoomDetailsContent>
      <Text $type="h2" $color="var(--cordis-white)" $weight="bold">
        {headerText} Room Details
      </Text>

      <DetailItem>
        <Text $color="var(--cordis-white)">Price:</Text>
        <Text $color="var(--cordis-emphasis)" $weight="bold">
          {getRoomData().price}
        </Text>
      </DetailItem>

      <DetailItem>
        <Text $color="var(--cordis-white)">Size:</Text>
        <Text $color="var(--cordis-white)">
          {getRoomData().size}
        </Text>
      </DetailItem>

      <DetailItem>
        <Text $color="var(--cordis-white)">Capacity:</Text>
        <Text $color="var(--cordis-white)">
          {getRoomData().capacity}
        </Text>
      </DetailItem>

      <AmenitiesWrapper>
        <Text $color="var(--cordis-white)" $weight="bold">
          Amenities:
        </Text>
        <AmenitiesList>
          {getRoomData().amenities.map((amenity, index) => (
            <li key={index}>
              <Text $color="var(--cordis-white)" $size="small">
                • {amenity}
              </Text>
            </li>
          ))}
        </AmenitiesList>
      </AmenitiesWrapper>

      <Text
        $color="var(--cordis-gray)"
        $size="small"
        style={{ marginTop: "1rem" }}
      >
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
            <FlippableCarousel ImageUrls={images} backContent={backContent} />
          ) : (
            <Carousel ImageUrls={images} />
          )}
        </StyledRoomCarousel>
        {children}
      </StyledRoomCardWrapper>

      <StyledButtonContainer>
        <RouteLink to="/room-booking">
          <Button onClick={() => setRoomCategory(imageType)} $type="underlined">
            {console.log(roomCategory)}
            <Text $type="p" $size="medium" $weight="regular">
              {buttonText}
            </Text>
          </Button>
        </RouteLink>
      </StyledButtonContainer>
    </StyledRoom>
  );
}
