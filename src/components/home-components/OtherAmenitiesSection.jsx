import { useState } from "react";
import styled from "styled-components";
import Text from "../shared/Text";
import Carousel from "../shared/Carousel";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";

//images
import Laundry1 from "../../assets/cordis-laundry/CORDIS-LAUNDRY-1.png";
import ConferenceRoom1 from "../../assets/cordis-conference-room/CORDIS-CONFERENCE-ROOM-1.png";

//pool images
import Pool1 from "../../assets/cordis-pool/CORDIS-POOL-1.png";
import Pool2 from "../../assets/cordis-pool/CORDIS-POOL-2.png";
import Pool3 from "../../assets/cordis-pool/CORDIS-POOL-3.png";
import Pool4 from "../../assets/cordis-pool/CORDIS-POOL-4.png";

const PoolImages = [Pool1, Pool2, Pool3, Pool4];

const StyledOtherAmenitiesSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 120rem;
  width: 100%;
  padding: 15rem 30rem;
  gap: 6rem;

  @media (max-width: 1400px) {
    padding: 15rem 4rem;
  }

  ${media.tablet} {
    flex-direction: column;
    height: 220rem;
  }

  ${media.tablet} {
    padding: 12rem 0;
  }
`;

const StyledAmenityText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: .5rem;
  width: 100%;
  gap: 2rem;
`;

const StyledAmenityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 100%;
  width: 100%;
  gap: 4.8rem;

  ${media.tablet} {
    align-items: center;
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
`;

const StyledAmenity = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${media.mobile} {
    padding: 0 2rem;
  }
`;

const AmenityTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  
  ${media.tablet} {
    display: none;
  }
`;

const AmenityTextWrapper1 = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  ${media.tablet} {
    display: flex;
  }

  ${media.mobile} {
    padding: 0 2rem;
  }
`;

const StyledPool = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--cordis-light-gray);
`;

const StyledPoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;

const StyledPoolTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  ${media.mobile} {
    padding: 0 2rem;
  }
`;  

const BackDrop = styled.div`
  background-color: var(--cordis-light-gray);
  position: absolute;
  top: 10rem;
  right: 20rem;
  width: 55vw;
  height: 105rem;
  z-index: -1;

  ${media.tablet} {
    right: 0;
    width: 100%;
    height: 200rem;
  }
`;

const LaundryText = (
  <StyledAmenityText>
    <Text
      $type="h3"
      $size="extra-small"
      $typeFace="primary"
      $spacing=".2em"
      $weight="bold"
      $color="var(--cordis-black)"
    >
      Laundry Services
    </Text>
    <Text
      $typeFace="secondary"
      $size="large"
      $spacing=".05em"
      $weight="regular"
      $color="var(--cordis-black)"
    >
      Enjoy our convenient laundry services, available to all guests for a fresh and comfortable stay.
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
      Host your meetings and events in our fully equipped conference room, designed for productivity and comfort.
    </Text>
  </StyledAmenityText>
);

const Amenities = [
  {
    ImageUrl: Laundry1,
    text: LaundryText,
  },
  {
    ImageUrl: ConferenceRoom1,
    text: ConferenceRoomText,
  },
];

export default function OtherAmenitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <StyledOtherAmenitiesSection>
      <AmenityTextWrapper1>
        <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
          Other Amenities
        </Text>
        <Text $color="var(--cordis-black)">
          Discover a range of thoughtful amenities designed to make your stay comfortable and convenient, from our modern laundry facilities to versatile conference spaces and more.
        </Text>
      </AmenityTextWrapper1>
      <StyledPoolWrapper>
        <StyledPool>
          <Carousel ImageUrls={PoolImages} />
        </StyledPool>
        <StyledPoolTextWrapper>
          <Text
            $type="h3"
            $size="extra-small"
            $typeFace="primary"
            $spacing=".2em"
            $weight="bold"
          >
            Cordis Pool
          </Text>
          <Text
            $typeFace="secondary"
            $size="large"
            $spacing=".05em"
            $weight="regular"
          >
            Dive into relaxation at the Cordis Pool, where you can swim, unwind, or simply soak up the tranquil atmosphere in a refreshing oasis designed for your leisure and enjoyment.
          </Text>
        </StyledPoolTextWrapper>
      </StyledPoolWrapper>

      <StyledAmenityWrapper>
        <StyledTextAmenityWrapper>
          <AmenityTextWrapper>
            <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
              Other Amenities
            </Text>
            <Text $color="var(--cordis-black)">
              Discover a range of thoughtful amenities designed to make your stay comfortable and convenient, from our modern laundry facilities to versatile conference spaces and more.
            </Text>
          </AmenityTextWrapper>
          <StyledAmenity>
            <Carousel
              ImageUrls={Amenities.map((amenity) => amenity.ImageUrl)}
              onIndexChange={setCurrentIndex}
            />
            {Amenities[currentIndex] && (
              <StyledAmenityText>{Amenities[currentIndex].text}</StyledAmenityText>
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
      <BackDrop></BackDrop>
    </StyledOtherAmenitiesSection>
  );
}
