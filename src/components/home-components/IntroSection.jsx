import styled from "styled-components";
import Banner from "../../assets/BANNER.png";
import Text from "../shared/Text";

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

  margin: 15rem 15rem;

  & p,
  & h1 {
    text-align: center;
  }
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
      <img src={Banner} alt="Banner" />
    </StyledIntroSection>
  );
}
