import styled from "styled-components";
import { media } from "../../util/breakpoints";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import Carousel from "../shared/Carousel";

//pool images
import Pool1 from "../../assets/cordis-pool/CORDIS-POOL-1.png";
import Pool2 from "../../assets/cordis-pool/CORDIS-POOL-2.png";
import Pool3 from "../../assets/cordis-pool/CORDIS-POOL-3.png";
import Pool4 from "../../assets/cordis-pool/CORDIS-POOL-4.png";

//bar images
import Bar1 from "../../assets/cordis-bar/CORDIS-BAR-1.png";
import Bar2 from "../../assets/cordis-bar/CORDIS-BAR-2.png";
import Bar3 from "../../assets/cordis-bar/CORDIS-BAR-3.png";

const PoolImages = [Pool1, Pool2, Pool3, Pool4];
const BarImages = [Bar1, Bar2, Bar3];

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
          <Carousel ImageUrls={BarImages} />
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
