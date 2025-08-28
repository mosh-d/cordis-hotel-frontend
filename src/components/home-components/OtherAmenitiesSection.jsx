import { useState } from "react";
import styled from "styled-components";
import Text from "../shared/Text";
import Carousel from "../shared/Carousel";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";

//images
import CoffeeShop from "../../assets/cordis-amenities/CORDIS-COFFEE-SHOP.png";
import ConferenceRoom from "../../assets/cordis-amenities/CORDIS-CONFERENCE-HALL.png";
import ParkingSpace from "../../assets/cordis-amenities/CORDIS-PARKING-SPACE.png";
import SafeDepositBox from "../../assets/cordis-amenities/CORDIS-SAFE-DEPOSIT-BOXES.png";
import SitOut from "../../assets/cordis-amenities/CORDIS-SIT-OUT.png";

const StyledOtherAmenitiesSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 120rem;
  width: 100%;
  padding: 15rem 40rem;
  gap: 6rem;

  @media (max-width: 1400px) {
    padding: 15rem 15rem;
  }

  ${media.tablet} {
    flex-direction: column;
    padding: 12rem 10rem;
    height: 120rem;
  }

  ${media.mobile} {
    height: 100rem;
    padding: 12rem 0rem;
  }
`;

const StyledAmenityText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 0.5rem;
  width: 100%;
  gap: 2rem;
`;

const StyledAmenityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 4.8rem;

  ${media.tablet} {
    align-items: center;
    padding: 0 4rem;
  }

  ${media.mobile} {
    height: 60rem;
    padding: 0 2rem;
  }
`;

const StyledTextAmenityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 4.8rem;

  ${media.mobile} {
    height: 50rem;
  }
`;

const StyledAmenity = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${media.mobile} {
    padding: 0 2rem;
    height: auto;
    min-height: 50rem;
  }
`;

const AmenityTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  text-align: center;

  & * {
    text-align: center;
  }

  ${media.tablet} {
    display: none;
  }
`;

const AmenityTextWrapper1 = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  text-align: center;

  & * {
    text-align: center;
  }

  ${media.tablet} {
    display: flex;
    padding: 0 4rem;
  }

  ${media.mobile} {
    padding: 0 2rem;
  }
`;

const BackDrop = styled.div`
  background-color: var(--cordis-brown);
  position: absolute;
  top: 10rem;
  right: 7rem;
  width: 84vw;
  height: 105rem;
  z-index: -1;

  ${media.tablet} {
    right: 0;
    width: 100%;
    height: 100rem;
  }

  ${media.mobile} {
    height: 100rem;
    top: 1rem;
  }
`;

const CoffeeShopText = (
  <StyledAmenityText>
    <Text
      $type="h3"
      $size="extra-small"
      $typeFace="primary"
      $spacing=".2em"
      $weight="bold"
      $color="var(--cordis-black)"
    >
      Coffee Shop
    </Text>
    <Text
      $typeFace="secondary"
      $size="large"
      $spacing=".05em"
      $weight="regular"
      $color="var(--cordis-black)"
    >
      Freshly brewed moments — enjoy artisanal coffee and light bites in a cozy,
      welcoming space.
    </Text>
  </StyledAmenityText>
);
const ConferenceRoomText = (
  <StyledAmenityText>
    <Text
      $type="h3"
      $size="extra-small"
      $typeFace="primary"
      $spacing=".2em"
      $weight="bold"
      $color="var(--cordis-black)"
    >
      Conference Room
    </Text>
    <Text
      $typeFace="secondary"
      $size="large"
      $spacing=".05em"
      $weight="regular"
      $color="var(--cordis-black)"
    >
      Host with confidence — our fully equipped conference hall is designed for
      seamless meetings, events, and gatherings.
    </Text>
  </StyledAmenityText>
);

const ParkingSpaceText = (
  <StyledAmenityText>
    <Text
      $type="h3"
      $size="extra-small"
      $typeFace="primary"
      $spacing=".2em"
      $weight="bold"
      $color="var(--cordis-black)"
    >
      Parking Space
    </Text>
    <Text
      $typeFace="secondary"
      $size="large"
      $spacing=".05em"
      $weight="regular"
      $color="var(--cordis-black)"
    >
      Convenient and secure — ample parking space ensures peace of mind for all
      our guests.
    </Text>
  </StyledAmenityText>
);

const SafeDepositBoxText = (
  <StyledAmenityText>
    <Text
      $type="h3"
      $size="extra-small"
      $typeFace="primary"
      $spacing=".2em"
      $weight="bold"
      $color="var(--cordis-black)"
    >
      Safe Deposit Box
    </Text>
    <Text
      $typeFace="secondary"
      $size="large"
      $spacing=".05em"
      $weight="regular"
      $color="var(--cordis-black)"
    >
      Your valuables, our priority — secure storage with modern safe deposit
      boxes.
    </Text>
  </StyledAmenityText>
);

const SitOutText = (
  <StyledAmenityText>
    <Text
      $type="h3"
      $size="extra-small"
      $typeFace="primary"
      $spacing=".2em"
      $weight="bold"
      $color="var(--cordis-black)"
    >
      Sit Out
    </Text>
    <Text
      $typeFace="secondary"
      $size="large"
      $spacing=".05em"
      $weight="regular"
      $color="var(--cordis-black)"
    >
      Relax in style — our outdoor sit-out offers a refreshing retreat for
      casual conversations or quiet reflection.
    </Text>
  </StyledAmenityText>
);

const Amenities = [
  {
    ImageUrl: CoffeeShop,
    text: CoffeeShopText,
  },
  {
    ImageUrl: ConferenceRoom,
    text: ConferenceRoomText,
  },
  {
    ImageUrl: ParkingSpace,
    text: ParkingSpaceText,
  },

  {
    ImageUrl: SafeDepositBox,
    text: SafeDepositBoxText,
  },

  {
    ImageUrl: SitOut,
    text: SitOutText,
  },
];

export default function OtherAmenitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <StyledOtherAmenitiesSection>
      <AmenityTextWrapper1>
        <Text
          style={{ textAlign: "center" }}
          $type="h1"
          $color="var(--cordis-black)"
          $weight="bold"
        >
          Other Amenities
        </Text>
        <Text $color="var(--cordis-black)">
          Discover a range of thoughtful amenities designed to make your stay
          comfortable and convenient, from our modern laundry facilities to
          versatile conference spaces and more.
        </Text>
      </AmenityTextWrapper1>

      <StyledAmenityWrapper>
        <StyledTextAmenityWrapper>
          <AmenityTextWrapper>
            <Text
              style={{ textAlign: "center" }}
              $type="h1"
              $color="var(--cordis-black)"
              $weight="bold"
            >
              Other Amenities
            </Text>
            <Text $color="var(--cordis-black)">
              Discover a range of thoughtful amenities designed to make your
              stay comfortable and convenient, from our modern laundry
              facilities to versatile conference spaces and more.
            </Text>
          </AmenityTextWrapper>
          <StyledAmenity>
            <Carousel
              ImageUrls={Amenities.map((amenity) => amenity.ImageUrl)}
              onIndexChange={setCurrentIndex}
            />
            {Amenities[currentIndex] && (
              <StyledAmenityText>
                {Amenities[currentIndex].text}
              </StyledAmenityText>
            )}
          </StyledAmenity>
        </StyledTextAmenityWrapper>
        <RouterLink to="/room-booking">
          <Button $type="emphasis2">
            <Text $weight="bold" $size="medium">
              Reserve
            </Text>
          </Button>
        </RouterLink>
      </StyledAmenityWrapper>
      {/* <BackDrop></BackDrop> */}
    </StyledOtherAmenitiesSection>
  );
}
