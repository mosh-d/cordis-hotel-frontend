import { styled } from "styled-components";
import Text from "./Text";
import Button from "./Button";

//image
import AD1 from "../../assets/cordis-ads/CORDIS-AD-1.png";

const StyledAd = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 2.4rem;
`;

const StyledMainAd = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cordis-text-color);
  height: 60%;
  margin-bottom: 2.4rem;
`;

const StyledMainAdImage = styled.div`
  background-image: url(${AD1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 70%;
  width: 100%;
`;

const StyledMainAdText = styled.div`
  //For both text and CTA button
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 4.8rem 0.8rem;
  gap: 2.4rem;
  align-items: center;

  & * {
    text-align: center;
  }
`;

const StyledAdText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 40%;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      transparent 70%,
      var(--cordis-emphasis) 100%
    );
  }
`;

const StyledParagraphContainer = styled.div`
  height: 100%;
  overflow: auto;
  padding: 0 2rem;
  
  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--cordis-black) var(--cordis-light-gray);

  &::-webkit-scrollbar {
    width: .2rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--cordis-light-gray);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--cordis-black);
    
    &:hover {
      background-color: var(--cordis-text-color);
    }
    
    &:active {
      background-color: var(--cordis-emphasis);
    }
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  & * {
    text-align: justify;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: circle;
  margin-bottom: 8rem;
`;

export default function Ad() {
  return (
    <StyledAd>
      <StyledMainAd>
        <StyledMainAdImage></StyledMainAdImage>
        <StyledMainAdText>
          <Text $color="var(--cordis-white)" $size="large" $weight="regular">
            Sun, Swim, Repeat: The Ultimate Cordis Poolside Guide
          </Text>
          <Button $type="white-ghost">
            <Text $weight="regular">CTA</Text>
          </Button>
        </StyledMainAdText>
      </StyledMainAd>
      <StyledAdText>
        <Text $type="h2" $color="var(--cordis-black)" $weight="bold">
          Sun, Swim, Repeat: The Ultimate Cordis Poolside Guide
        </Text>
        <StyledParagraphContainer>
          <Text $typeFace="secondary" $weight="regular" $size="large" $spacing=".05em">
            Whether you’re here to work or play, Cordis Splash has everything
            you need for the perfect day by the water:
            <StyledUl>
              <li>
                Sunrise Swim: Beat the heat and the crowds with a tranquil
                morning laps session in our Infinity Pool.
              </li>
              <li>
                Aqua Fitness Flow: Join our certified instructor for a
                low-impact water aerobics class—strengthen core muscles while
                splashing to upbeat tunes.
              </li>
              <li>
                Poolside Brunch: Order from the Splash menu—think avocado toast
                topped with dukkah or chilled ginger-lime mocktails—delivered
                right to your cabana.
              </li>
              <li>
                Sunset Lounging: Recline on our teak loungers as the sky turns
                orange and the city skyline sparkles.
              </li>
              <li>
                Starlit Night Dip: Cap your evening with our signature Night
                Swim, where soft under-water lights create a dreamy glow.
              </li>
              <li>
                Tip: reserve a Splash Cabana in advance for extra shade,
                privacy, and dedicated server service. With these rituals in
                hand, your days at Cordis Splash will become the highlight of
                any Lagos itinerary.
              </li>
            </StyledUl>
          </Text>
        </StyledParagraphContainer>
      </StyledAdText>
    </StyledAd>
  );
}
