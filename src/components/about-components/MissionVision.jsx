import { styled } from "styled-components";
import Text from "../shared/Text";

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
`;

const StyledTextContainer = styled.div`
  width: 50%;

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
            Our mission is to be the most hospitable company in the world by
            creating world-class experiences for guests.
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
            To be an organically developed global hotel management company that
            excels in its core components of place, service, people and system.
          </Text>
        </StyledTextContainer>
      </StyledTextWrapper>
    </StyledMissionVision>
  );
}
