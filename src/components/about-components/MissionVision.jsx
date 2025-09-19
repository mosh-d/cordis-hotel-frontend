import { styled } from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";
import { cloudinaryBg } from "../../config/cloudinary";

//image
import MissionVisionBachground from "../../assets/mission-vision/MISSION-VISION-1.png";

const StyledMissionVision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12rem 12rem;
  background-image: url(${MissionVisionBachground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.mobile} {
    padding: 12rem 2rem;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(180, 1.8%, 21.4%, 0.6);
  backdrop-filter: blur(6px);
  border: 1px solid hsla(45, 66.7%, 88.6%, 0.3);
  padding: 6rem 2.4rem;
  gap: 2.4rem;
  text-align: center;

  ${media.tablet} {
    flex-direction: column;
  }
`;

const StyledTextContainer = styled.div`
  width: 50%;

  ${media.tablet} {
    width: 100%;
  }

  p,
  h2 {
    text-align: center;
  }
`;

export default function MissionVision() {
  return (
    <StyledMissionVision>
      <StyledTextWrapper>
        <StyledTextContainer>
          <Text $type="h2" $color="var(--cordis-white)" $weight="bold">
            Our Mission
          </Text>
          <Text
            style={{
              textAlign: "center",
            }}
            $typeFace="secondary"
            $size="large"
            $spacing=".05em"
            $weight="light"
            $color="var(--cordis-light-gray)"
            $opacity="0.7"
          >
            At Cordis Hotel, our mission is to create unforgettable experiences
            by offering world-class comfort, personalized service, and genuine
            hospitality.
          </Text>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text $type="h2" $color="var(--cordis-white)" $weight="bold">
            Our Vision
          </Text>
          <Text
            style={{
              textAlign: "center",
            }}
            $typeFace="secondary"
            $size="large"
            $spacing=".05em"
            $weight="light"
            $color="var(--cordis-light-gray)"
            $opacity="0.7"
          >
            We aspire to grow into a globally recognized hotel brand, built
            organically on the pillars of exceptional places, remarkable
            service, dedicated people, and innovative systems.
          </Text>
        </StyledTextContainer>
      </StyledTextWrapper>
    </StyledMissionVision>
  );
}
