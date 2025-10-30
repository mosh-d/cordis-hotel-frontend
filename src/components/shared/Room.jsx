import { useOutletContext } from "react-router-dom";
import Text from "./Text";
import styled from "styled-components";
import Carousel from "./Carousel";
import FlippableCarousel from "./FlippableCarousel";
import Button from "./Button";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { media } from "../../util/breakpoints";
import { getCloudinaryUrl } from "../../config/cloudinary";
import { ROOMS as localRooms } from "../../util/room-data";

// Local Standard Room Images
import standardRoom1 from "../../assets/standard-room/STANDARD-ROOM-1.jpg";
import standardRoom2 from "../../assets/standard-room/STANDARD-ROOM-2.jpg";
import standardRoom3 from "../../assets/standard-room/STANDARD-ROOM-3.jpg";
import standardRoom4 from "../../assets/standard-room/STANDARD-ROOM-4.jpg";
import standardRoom5 from "../../assets/standard-room/STANDARD-ROOM-5.jpg";
import standardRoom6 from "../../assets/standard-room/STANDARD-ROOM-6.jpg";
import standardRoom7 from "../../assets/standard-room/STANDARD-ROOM-7.jpg";

// Local Executive Room Images
// import executiveRoom1 from "../../assets/executive-room/EXECUTIVE-ROOM-1.jpg";
// import executiveRoom2 from "../../assets/executive-room/EXECUTIVE-ROOM-2.jpg";
// import executiveRoom3 from "../../assets/executive-room/EXECUTIVE-ROOM-3.jpg";
// import executiveRoom4 from "../../assets/executive-room/EXECUTIVE-ROOM-4.jpg";
// import executiveRoom5 from "../../assets/executive-room/EXECUTIVE-ROOM-5.jpg";

// Local Executive Deluxe Room Images
import executiveDeluxeRoom1 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-1.jpg";
import executiveDeluxeRoom2 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-2.jpg";
import executiveDeluxeRoom3 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-3.jpg";
import executiveDeluxeRoom4 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-4.jpg";
import executiveDeluxeRoom5 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-5.jpg";
import executiveDeluxeRoom6 from "../../assets/executive-deluxe-room/EXECUTIVE-DELUXE-ROOM-6.jpg";

// Local Executive Suite Room Images
import executiveSuiteRoom1 from "../../assets/executive-suite/EXECUTIVE-SUITE-1.jpg";
import executiveSuiteRoom2 from "../../assets/executive-suite/EXECUTIVE-SUITE-2.jpg";
import executiveSuiteRoom3 from "../../assets/executive-suite/EXECUTIVE-SUITE-3.jpg";
import executiveSuiteRoom4 from "../../assets/executive-suite/EXECUTIVE-SUITE-4.jpg";
import executiveSuiteRoom5 from "../../assets/executive-suite/EXECUTIVE-SUITE-5.jpg";
import executiveSuiteRoom6 from "../../assets/executive-suite/EXECUTIVE-SUITE-6.jpg";
import executiveSuiteRoom7 from "../../assets/executive-suite/EXECUTIVE-SUITE-7.jpg";
import executiveSuiteRoom8 from "../../assets/executive-suite/EXECUTIVE-SUITE-8.jpg";
import executiveSuiteRoom9 from "../../assets/executive-suite/EXECUTIVE-SUITE-9.jpg";

// Local Room Arrays
const standardRoomImages = [
  standardRoom1,
  standardRoom2,
  standardRoom3,
  standardRoom4,
  standardRoom5,
  standardRoom6,
  standardRoom7,
];

const executiveDeluxeRoomImages = [
  executiveDeluxeRoom1,
  executiveDeluxeRoom2,
  executiveDeluxeRoom3,
  executiveDeluxeRoom4,
  executiveDeluxeRoom5,
  executiveDeluxeRoom6,
];

const executiveSuiteImages = [
  executiveSuiteRoom1,
  executiveSuiteRoom2,
  executiveSuiteRoom3,
  executiveSuiteRoom4,
  executiveSuiteRoom5,
  executiveSuiteRoom6,
  executiveSuiteRoom7,
  executiveSuiteRoom8,
  executiveSuiteRoom9,
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

const StyledRoomCarousel2 = styled.div`
  width: 100%;
  height: 55rem;
  background-color: ${({ $bgColor }) => $bgColor || "transparent"};
  position: relative;
  /* opacity: 0.7; */

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(41, 34, 22, 0.9);
    z-index: 1;
  }

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
    gap: 0.1rem;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;

  li {
    padding: 0.25rem 0;
    color: var(--cordis-white);
    list-style-type: circle;
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
  unavailable = false,
  roomData = null, // Accept room data as prop from parent
}) {
  const { roomCategory, setRoomCategory } = useOutletContext();
  const location = useLocation();

  console.log(`🏠 ROOM COMPONENT: ${imageType}`, {
    imageType,
    headerText,
    unavailable,
    unavailableType: typeof unavailable,
    hasRoomData: !!roomData,
    roomDataLength: roomData?.length || 0,
    willShowAsUnavailable: unavailable === true,
  });

  const getRoomData = () => {
    // First try to get data from API
    let selectedRoom = null;
    
    if (roomData && roomData.length > 0) {
      // Find room by propName from API data
      selectedRoom = roomData.find((room) => room.propName === imageType);
      
      if (selectedRoom) {
        console.log(`📊 USING API ROOM DATA: ${imageType}`, {
          name: selectedRoom.name,
          price: selectedRoom.price,
          size: selectedRoom.size,
          capacity: selectedRoom.capacity,
          dataSource: "API"
        });
        return selectedRoom;
      }
    }
    
    // If no API data, fall back to local room data
    const localRoom = localRooms.find(room => room.propName === imageType);
    
    if (localRoom) {
      console.log(`📊 USING LOCAL ROOM DATA: ${imageType}`, {
        name: localRoom.name,
        price: localRoom.price,
        size: localRoom.size,
        capacity: localRoom.capacity,
        dataSource: "Local"
      });
      return localRoom;
    }

    // Fallback if no data is found
    console.error(`No room data found for type: ${imageType}`);
    return {
      name: headerText || 'Room',
      price: 'N/A',
      size: 'N/A',
      capacity: 'N/A',
      amenities: [],
      services: []
    };
  };

  const images =
    imageType === "standard"
      ? standardRoomImages
      : imageType === "executiveDeluxe"
      ? executiveDeluxeRoomImages
      : imageType === "executiveSuite"
      ? executiveSuiteImages
      : standardRoomImages;

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
        <Text $color="var(--cordis-white)">{getRoomData().size}</Text>
      </DetailItem>

      <DetailItem>
        <Text $color="var(--cordis-white)">Capacity:</Text>
        <Text $color="var(--cordis-white)">{getRoomData().capacity}</Text>
      </DetailItem>

      <AmenitiesWrapper>
        <Text $color="var(--cordis-white)" $weight="bold">
          Amenities:
        </Text>
        <AmenitiesList>
          {getRoomData().amenities.map((amenity, index) => (
            <li key={index}>
              <Text $color="var(--cordis-white)" $size="small">
                {/* •  */}
                {amenity}
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
      {unavailable ? (
        <Text
          $type="h3"
          $spacing=".2em"
          $typeFace="primary"
          $size="medium"
          $weight="regular"
          $opacity=".5"
        >
          {headerText}
        </Text>
      ) : (
        <Text
          $type="h3"
          $spacing=".2em"
          $typeFace="primary"
          $size="medium"
          $weight="regular"
        >
          {headerText}
        </Text>
      )}

      <StyledRoomCardWrapper>
        {unavailable ? (
          <>
            {/* <StyledUnavailableOverlay>
            <Text>Unavailable</Text>
          </StyledUnavailableOverlay> */}
            <StyledRoomCarousel2>
              {flippable ? (
                <>
                  <FlippableCarousel
                    ImageUrls={images}
                    backContent={backContent}
                  />
                  <Text $size="extra-large" $weight="bold" $color="var(--cordis-white)" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1000 }}>Unavailable</Text>
                </>
              ) : (
                <Carousel ImageUrls={images} />
              )}
            </StyledRoomCarousel2>
          </>
        ) : flippable ? (
          <StyledRoomCarousel $bgColor={$bgColor}>
              <FlippableCarousel ImageUrls={images} backContent={backContent} />
          </StyledRoomCarousel>
        ) : (
          <StyledRoomCarousel $bgColor={$bgColor}>
            <Carousel ImageUrls={images} />
          </StyledRoomCarousel>
        )}

        {children}
      </StyledRoomCardWrapper>

      <StyledButtonContainer>
        <RouteLink to={`/room-booking?returnTo=${encodeURIComponent(location.pathname)}`}>
          {unavailable ? null : (
            <Button
              onClick={() => setRoomCategory(imageType)}
              $type="underlined"
            >
              <Text $type="p" $size="medium" $weight="regular">
                {buttonText}
              </Text>
            </Button>
          )}
        </RouteLink>
      </StyledButtonContainer>
    </StyledRoom>
  );
}
