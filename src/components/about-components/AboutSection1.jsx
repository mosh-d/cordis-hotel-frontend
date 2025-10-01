import { styled } from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";
import { cloudinaryBg } from "../../config/cloudinary";

//images
import About1_1 from "../../assets/cordis-about-1/CORDIS-ABOUT-1-1.jpg";
import About1_2 from "../../assets/cordis-about-1/CORDIS-ABOUT-1-2.jpg";
import About1_3 from "../../assets/cordis-about-1/CORDIS-ABOUT-1-3.jpg";

const StyledAboutSection1 = styled.section`
  position: relative;
  width: 100%;
  height: 100rem;
  display: flex;
  padding: 12rem 9rem;
  gap: 15rem;
  align-items: center;

  ${media.large} {
    height: 130rem;
  }

  @media (min-width: 1700px) {
    height: 160rem;
  }

  ${media.tablet} {
    height: 120rem;
    gap: 8rem;
    padding: 12rem 4rem;
    flex-direction: column;
  }

  ${media.mobile} {
    padding: 12rem 1.2rem;
    height: 125rem;
  }
`;

const StyledImageWrapper = styled.div`
  width: 50%;
  height: 58vw;
  position: relative;

  &::before {
    content: "";
    height: 117%;
    width: 80%;
    position: absolute;
    top: -5vw;
    left: 17vw;
    background-color: var(--cordis-light-gray);

    @media (min-width: 1700px) {
      top: -4vw;
      width: 70%;
    }

    ${media.tablet} {
      width: 57%;
      left: 22vw;
    }
  }

  @media (min-width: 1700px) {
    top: 1vw;
  }

  ${media.tablet} {
    top: 0vw;
    height: 53rem;
    width: 100%;
  }
`;

const StyledImageContainer1 = styled.div`
  position: absolute;
  top: 13vw;
  left: -1vw;
  background-image: url(${About1_1});
  height: 39vw;
  width: 29vw;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 10;

  ${media.tablet} {
    width: 27rem;
    height: 38rem;
    top: 13rem;
    left: 13vw;
  }

  ${media.mobile} {
    width: 20rem;
    height: 30rem;
    left: 5vw;
  }
`;

const StyledImageContainer2 = styled.div`
  position: absolute;
  top: -3vw;
  left: 25vw;
  background-image: url(${About1_2});
  height: 25vw;
  width: 21vw;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.tablet} {
    width: 20rem;
    height: 25rem;
    top: 0;
    left: 40vw;
  }

  ${media.mobile} {
    width: 17rem;
    height: 25rem;
  }
`;

const StyledImageContainer3 = styled.div`
  position: absolute;
  top: 40vw;
  left: 29vw;
  background-image: url(${About1_3});
  height: 22vw;
  width: 16vw;
  background-repeat: no-repeat;
  background-size: cover;

  ${media.tablet} {
    width: 15rem;
    height: 20rem;
    top: 35rem;
    left: 48vw;
  }

  ${media.mobile} {
    width: 15rem;
    height: 19rem;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1.8rem;
  position: relative;

  ${media.tablet} {
    width: 100%;
  }
`;

export default function AboutSection1() {
  return (
    <StyledAboutSection1>
      <StyledImageWrapper>
        <StyledImageContainer1></StyledImageContainer1>
        <StyledImageContainer2></StyledImageContainer2>
        <StyledImageContainer3></StyledImageContainer3>
      </StyledImageWrapper>
      <StyledTextWrapper>
        <Text
          $type="h1"
          $size="extra-large"
          $weight="bold"
          $color="var(--cordis-black)"
        >
          Seamless Comfort and Hospitality
        </Text>
        <Text
          $type="p"
          $typeFace="secondary"
          $size="extra-large"
          $weight="bold"
          $spacing="0.04em"
        >
          Cordis Hotel perfectly combines modern elegance with the warmth of
          Nigerian hospitality, creating a refined yet welcoming experience for
          every guest. Nestled in the heart of Lagos, our hotel offers the ideal
          balance of relaxation, stylish workspaces, and easy access to the
          city’s key destinations, making Cordis a preferred choice for
          travelers who value both comfort and convenience.
        </Text>
      </StyledTextWrapper>
    </StyledAboutSection1>
  );
}
