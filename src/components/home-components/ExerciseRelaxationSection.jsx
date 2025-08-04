import styled from "styled-components";
import Carousel from "../shared/Carousel";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";

//gym images
import Gym1 from "../../assets/cordis-gym/CORDIS-GYM-1.png";
import Gym2 from "../../assets/cordis-gym/CORDIS-GYM-2.png";
import Gym3 from "../../assets/cordis-gym/CORDIS-GYM-3.png";
import Gym4 from "../../assets/cordis-gym/CORDIS-GYM-4.png";

//spa images
import Spa1 from "../../assets/cordis-spa/CORDIS-SPA-1.png";
import Spa2 from "../../assets/cordis-spa/CORDIS-SPA-2.png";
import Spa3 from "../../assets/cordis-spa/CORDIS-SPA-3.png";

const GymImages = [Gym1, Gym2, Gym3, Gym4];
const SpaImages = [Spa1, Spa2, Spa3];

const StyledExerciseRelaxationSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15rem 30rem;
  gap: 6rem;
  height: 220rem;

  @media (max-width: 1400px) {
    padding: 15rem 4rem;
  }

  ${media.tablet} {
    flex-direction: column;
  }
`;

const StyledGymWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const StyledSpaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 90%;
  background-color: var(--cordis-text-color);
  padding: 2rem 1rem;
`;

const StyledGym = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--cordis-accent);
`;

const StyledSpa = styled.div`
  width: 100%;
  height: 100%;
`;

const GymTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2rem;
`;

const SpaTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2rem;
`;

const StyledButtonContainer = styled.div`
  
  ${media.tablet} {
    display: none;
  }
`;

const StyledButtonContainer2 = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
  }
`;

const StyledGymContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;

const BackDrop = styled.div`
  background-color: var(--cordis-accent);
  position: absolute;
  top: 10rem;
  right: 40rem;
  width: 60vw;
  height: 60rem;
  z-index: -1;

  ${media.tablet} {
    right: 0;
    width: 100%;
    height: 200rem;
  }
`;

export default function ExerciseRelaxationSection() {
  return (
    <StyledExerciseRelaxationSection>
      <StyledGymWrapper>
        <GymTextWrapper>
          <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
            Exercise & Relaxation
          </Text>
          <Text $color="var(--cordis-text-color)">
            Elevate your fitness journey with our state‑of‑the‑art gym,
            complemented by a serene spa experience.
          </Text>
        </GymTextWrapper>

        <StyledGymContainer>
          <StyledGym>
            <Carousel ImageUrls={GymImages} />
          </StyledGym>
          <GymTextWrapper>
            <Text
              $type="h3"
              $size="extra-small"
              $typeFace="primary"
              $spacing=".2em"
              $weight="bold"
              $color="var(--cordis-text-color)"
            >
              Cordis Gym
            </Text>
            <Text
              $typeFace="secondary"
              $color="var(--cordis-black)"
              $size="large"
              $spacing=".05em"
              $weight="regular"
            >
              Experience a modern fitness center with advanced cardio, strength equipment, and spaces for stretching or personal training. Cordis Gym is your welcoming space to energize or unwind and reach your wellness goals.
            </Text>
          </GymTextWrapper>
        </StyledGymContainer>

        <RouterLink to="/amenity-booking">
          <StyledButtonContainer>
            <Button $type="emphasis2">
              <Text $weight="bold" $size="medium">
                Book Gym/Spa
              </Text>
            </Button>
          </StyledButtonContainer>
        </RouterLink>
      </StyledGymWrapper>

      <StyledSpaWrapper>
        <StyledSpa>
          <Carousel ImageUrls={SpaImages} />
        </StyledSpa>
        <SpaTextWrapper>
          <Text
            $type="h3"
            $size="extra-small"
            $typeFace="primary"
            $spacing=".2em"
            $weight="bold"
            $color="var(--cordis-accent)"
          >
            Cordis Spa
          </Text>
          <Text
            $typeFace="secondary"
            $color="var(--cordis-accent)"
            $size="large"
            $spacing=".05em"
            $weight="regular"
          >
            Cordis Spa is your serene retreat for relaxing treatments, soothing massages, and expert care to leave you refreshed and restored.
          </Text>
        </SpaTextWrapper>
      </StyledSpaWrapper>
      <RouterLink to="/amenity-booking">
        <StyledButtonContainer2>
          <Button $type="emphasis2">
            <Text $weight="bold" $size="medium">
              Book Gym/Spa
            </Text>
          </Button>
        </StyledButtonContainer2>
      </RouterLink>
      <BackDrop></BackDrop>
    </StyledExerciseRelaxationSection>
  );
}
