import styled from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";
import { cloudinaryBg } from "../../config/cloudinary";
import banner from "../../assets/BANNER.jpg";

// Images
// const Banner = "cordis/banner";

const StyledIntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 15rem;

  ${media.tablet} {
    padding: 15rem 12rem;
  }

  ${media.mobile} {
    padding: 12rem 2rem;
  }

  & p,
  & h1 {
    text-align: center;
  }
`;

const StyledBanner = styled.div`
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--cordis-emphasis);
`;

export default function IntroSection() {
  return (
    <StyledIntroSection>
      <IntroText>
        <Text $type="h1" $size="extra-large" $weight="bold" $color="var(--cordis-black)">The Cordis Hotel, where Lagos comes alive</Text>
        <Text $type="p" $typeFace="secondary" $size="extra-large" $weight="bold" $spacing="0.04em">
          Step into a world of effortless style and genuine warmth. Nestled in
          the city’s pulse, we offer thoughtfully appointed rooms, inspired
          dining, and many more—all designed to make every stay a seamless blend
          of comfort and discovery.
        </Text>
      </IntroText>
      <StyledBanner>
        <img src={banner} alt="Banner" style={{ width: "100%", height: "auto" }}   />
      </StyledBanner>
    </StyledIntroSection>
  );
}
