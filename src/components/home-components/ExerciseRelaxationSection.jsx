import styled from "styled-components";
import Carousel from "../shared/Carousel";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";
import { getCloudinaryUrl } from "../../config/cloudinary";

// Local Gym images
import gym1 from "../../assets/cordis-gym/CORDIS-GYM-1.jpg";
import gym2 from "../../assets/cordis-gym/CORDIS-GYM-2.jpg";
import gym3 from "../../assets/cordis-gym/CORDIS-GYM-3.jpg";
import gym4 from "../../assets/cordis-gym/CORDIS-GYM-4.jpg";
import gym5 from "../../assets/cordis-gym/CORDIS-GYM-5.jpg";

//Local Spa images
import spa1 from "../../assets/cordis-spa/CORDIS-SPA-1.png";
import spa2 from "../../assets/cordis-spa/CORDIS-SPA-2.png";
import spa3 from "../../assets/cordis-spa/CORDIS-SPA-3.png";

//Local image arrays
const gymImages = [gym1, gym2, gym3, gym4, gym5];
const spaImages = [spa1, spa2, spa3];

// //gym images
// const Gym1 = "cordis/gym-1";
// const Gym2 = "cordis/gym-2";
// // const Gym3 = "cordis/gym-3";
// // const Gym4 = "cordis/gym-4";

// //spa images
// const Spa1 = "cordis/spa-1";
// const Spa2 = "cordis/spa-2";
// const Spa3 = "cordis/spa-3";

// const GymImages = [
//   getCloudinaryUrl(Gym1),
//   getCloudinaryUrl(Gym2),
//   // getCloudinaryUrl(Gym3),
//   // getCloudinaryUrl(Gym4),
// ];
// const SpaImages = [
//   getCloudinaryUrl(Spa1),
//   getCloudinaryUrl(Spa2),
//   getCloudinaryUrl(Spa3),
// ];

const StyledExerciseRelaxationSection = styled.section`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 15rem 30rem;
  gap: 6rem;
  height: 120rem;
  width: 100%;

  @media (max-width: 1400px) {
    padding: 15rem 4rem;
  }

  ${media.tablet} {
    flex-direction: column;
    /* height: 240rem; */ /* height when spa pictures are available */
    height: 140rem;
  }

  ${media.mobile} {
    padding: 12rem 0;
    gap: 1rem;
    height: auto;
    /* min-height: 200rem; */ /* min-height when spa pictures are available */
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

  ${media.mobile} {
    height: auto;
    flex: none;
  }
`;

const StyledSpaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: var(--cordis-text-color);
  padding: 2rem 1rem;
`;

const StyledSpaWrapperContainer = styled.div`
  /* height: 110%; */ /* height when spa pictures are available */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  ${media.mobile} {
    padding: 0 2rem;
    height: auto;
    flex: none;
  }
`;

const StyledGym = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--cordis-accent);

  ${media.mobile} {
    height: 35rem;
    min-height: 30rem;
  }
`;

const StyledSpa = styled.div`
  width: 100%;
  height: 100%;

  ${media.mobile} {
    height: 60rem;
    min-height: 55rem;
  }
`;

const GymTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2rem;

  ${media.mobile} {
    padding: 0 2rem;
  }
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

  ${media.mobile} {
    height: auto;
    justify-content: flex-start;
  }
`;

const BackDrop = styled.div`
  background-color: var(--cordis-accent);
  position: absolute;
  top: 10rem;
  right: 40rem;
  width: 60vw;
  /*  height: 60rem; //height when spa pictures are available */
  height: 60rem;
  z-index: -1;

  ${media.tablet} {
    right: 0;
    width: 100%;
    /* height: 220rem; */ /* height when spa pictures are available */
    height: 120rem;
  }

  ${media.mobile} {
    height: auto;
    /* min-height: 186rem; */ /* height when spa pictures are available */
    min-height: 85rem;
  }
`;

export default function ExerciseRelaxationSection() {
  return (
    <StyledExerciseRelaxationSection>
      <StyledGymWrapper>
        <GymTextWrapper>
          <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
            Exercise {/* & Relaxation */}
          </Text>
          <Text $color="var(--cordis-text-color)">
            Elevate your fitness journey with our state‑of‑the‑art gym.{/* ,
            complemented by a serene spa experience. */}
          </Text>
        </GymTextWrapper>

        <StyledGymContainer>
          <StyledGym>
            <Carousel ImageUrls={gymImages} />
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
              Experience a modern fitness center with advanced cardio, strength
              equipment, and spaces for stretching or personal training. Cordis
              Gym is your welcoming space to energize or unwind and reach your
              wellness goals.
            </Text>
          </GymTextWrapper>
        </StyledGymContainer>

        <RouterLink to="/room-booking">
          <StyledButtonContainer>
            <Button $type="emphasis2">
              <Text $weight="bold" $size="medium">
                Reserve
              </Text>
            </Button>
          </StyledButtonContainer>
        </RouterLink>
      </StyledGymWrapper>

      <StyledSpaWrapperContainer>
        {/* <StyledSpaWrapper>
          <StyledSpa>
            <Carousel ImageUrls={spaImages} />
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
              Cordis Spa is your serene retreat for relaxing treatments,
              soothing massages, and expert care to leave you refreshed and
              restored.
            </Text>
          </SpaTextWrapper>
        </StyledSpaWrapper> */}
        <RouterLink to="/room-booking">
          <StyledButtonContainer2>
            <Button $type="emphasis2">
              <Text $weight="bold" $size="medium">
                Reserve
              </Text>
            </Button>
          </StyledButtonContainer2>
        </RouterLink>
      </StyledSpaWrapperContainer>
      <BackDrop></BackDrop>
    </StyledExerciseRelaxationSection>
  );
}
