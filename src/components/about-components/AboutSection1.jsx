import { styled } from "styled-components";
import Text from "../shared/Text";

//images
import About1_1 from "../../assets/cordis-about-1/CORDIS-ABOUT-1-1.png";
import About1_2 from "../../assets/cordis-about-1/CORDIS-ABOUT-1-2.png";
import About1_3 from "../../assets/cordis-about-1/CORDIS-ABOUT-1-3.png";

const StyledAboutSection1 = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  padding: 12rem;
  gap: 10rem;
  align-items: center;
`;

const StyledImageWrapper = styled.div`
  width: 50%;
  height: 58vw;
  position: relative;

  &::before {
    content: "";
    height: 117%;
    width: 70%;
    position: absolute;
    top: -5vw;
    left: 17vw;
    background-color: var(--cordis-light-gray);
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
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 1.8rem;
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
          Five Clover Inn, Abijo GRA seamlessly blends modern comfort with the
          warmth of West African hospitality, offering a unique and inviting
          experience for our esteemed guests. Located in the serene and upscale
          area of Abijo GRA, Lagos, our hotel offers a balanced mix of
          relaxation, workspaces, and proximity to popular destinations, making
          it a top choice for travelers seeking comfort and convenience in
          Abijo.
        </Text>
      </StyledTextWrapper>
    </StyledAboutSection1>
  );
}
