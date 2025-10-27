import styled from "styled-components";
import { media } from "../../util/breakpoints";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import Carousel from "../shared/Carousel";
import { getCloudinaryUrl } from "../../config/cloudinary";

// local pool images
import pool1 from "../../assets/cordis-pool/CORDIS-POOL-1.jpg";
import pool2 from "../../assets/cordis-pool/CORDIS-POOL-2.jpg";
import pool3 from "../../assets/cordis-pool/CORDIS-POOL-3.jpg";
import pool4 from "../../assets/cordis-pool/CORDIS-POOL-4.jpg";
import pool5 from "../../assets/cordis-pool/CORDIS-POOL-5.jpg";

// local bar images
import bar1 from "../../assets/cordis-bar/CORDIS-BAR-1.jpg";
import bar2 from "../../assets/cordis-bar/CORDIS-BAR-2.jpg";
import bar3 from "../../assets/cordis-bar/CORDIS-BAR-3.jpg";
import bar4 from "../../assets/cordis-bar/CORDIS-BAR-4.jpg";
import bar5 from "../../assets/cordis-bar/CORDIS-BAR-5.jpg";
import bar6 from "../../assets/cordis-bar/CORDIS-BAR-6.jpg";
import bar7 from "../../assets/cordis-bar/CORDIS-BAR-7.jpg";

// Local image arrays
const poolImages = [pool1, pool2, pool3, pool4, pool5];
const barImages = [bar1, bar2, bar3, bar4, bar5, bar6, bar7];

// //pool images
// const Pool1 = "cordis/pool-1";
// const Pool2 = "cordis/pool-2";
// const Pool3 = "cordis/pool-3";
// const Pool4 = "cordis/pool-4";

// //bar images - update these to match your actual Cloudinary public IDs
// const Bar1 = "cordis/bar-1"; 
// const Bar2 = "cordis/bar-2"; 
// const Bar3 = "cordis/bar-3";

// const PoolImages = [getCloudinaryUrl(Pool1), getCloudinaryUrl(Pool2), getCloudinaryUrl(Pool3), getCloudinaryUrl(Pool4)];
// const BarImages = [getCloudinaryUrl(Bar1), getCloudinaryUrl(Bar2), getCloudinaryUrl(Bar3)];

const StyledPoolAndBarSection = styled.section`
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
    padding: 12rem 0;
    height: 220rem;
  }

  ${media.mobile} {
    height: 180rem;
  }
`;

const PoolAndBarTextWrapper1 = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  ${media.tablet} {
    display: flex;
    padding: 0 4rem;
  }

  ${media.mobile} {
    padding: 0 2rem;
  }
`;

const PoolAndBarTextWrapper2 = styled.div`
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

const StyledPool = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: var(--cordis-light-gray);

  ${media.mobile} {
    height: auto;
    min-height: 60rem;
  }
`;

const StyledPoolWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;

  ${media.tablet} {
    padding: 0 4rem;
  }

  ${media.mobile} {
    height: 75rem;
    padding: 0;
  }
`;

const StyledPoolTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 2rem;

  /* ${media.tablet} {
    padding: 0 4rem;
  } */

  ${media.mobile} {
    padding: 0 2rem;
  }
`;

const StyledBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

const StyledBarTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

const StyledBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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

  ${media.mobile} {
    height: 170rem;
    top: 1rem;
  }
`;

export default function PoolAndBarSection() {
  return (
    <StyledPoolAndBarSection>
      <PoolAndBarTextWrapper1>
        <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
          Pool and Bar
        </Text>
        <Text $color="var(--cordis-black)">
          Discover a range of thoughtful amenities designed to make your stay
          comfortable and convenient, from our modern laundry facilities to
          versatile conference spaces and more.
        </Text>
      </PoolAndBarTextWrapper1>
      <StyledPoolWrapper>
        <StyledPool>
          <Carousel ImageUrls={poolImages} />
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
            Dive into serenity — our indoor pool offers year-round relaxation in
            a calm, elegant setting.
          </Text>
        </StyledPoolTextWrapper>
      </StyledPoolWrapper>
      <StyledBarWrapper>
        <PoolAndBarTextWrapper2>
          <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
            Pool and Bar
          </Text>
          <Text $color="var(--cordis-black)">
            Discover a range of thoughtful amenities designed to make your stay
            comfortable and convenient, from our modern laundry facilities to
            versatile conference spaces and more.
          </Text>
        </PoolAndBarTextWrapper2>
        <StyledBar>
          <Carousel ImageUrls={barImages} />
        </StyledBar>
        <StyledBarTextWrapper>
          <Text
            $type="h3"
            $size="extra-small"
            $typeFace="primary"
            $spacing=".2em"
            $weight="bold"
          >
            Cordis Bar
          </Text>
          <Text
            $typeFace="secondary"
            $size="large"
            $spacing=".05em"
            $weight="regular"
          >
            Sip and savor — from classic cocktails to modern mixes, our bar is
            the perfect place to unwind and connect.
          </Text>
        </StyledBarTextWrapper>
        <RouterLink to="/room-booking">
          <Button $type="emphasis2">
            <Text $weight="bold" $size="medium">
              Reserve
            </Text>
          </Button>
        </RouterLink>
      </StyledBarWrapper>
      <BackDrop></BackDrop>
    </StyledPoolAndBarSection>
  );
}
