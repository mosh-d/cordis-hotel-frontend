import styled from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";

//image
import AtCordisBackground from "../../assets/at-cordis/AT-CORDIS.png";

const StyledAtCordisSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12rem 12rem;
  background-image: url(${AtCordisBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${media.tablet} {
    padding: 12rem 2rem;
  }
`;

const StyledTextButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: hsla(180, 1.8%, 21.4%, 0.6);
  backdrop-filter: blur(6px);
  border: 1px solid hsla(45, 66.7%, 88.6%, 0.3);
  padding: 6rem 2.4rem;
  gap: 2.4rem;
  text-align: center;
`;

export default function AtCordisSection() {
  return (
    <StyledAtCordisSection>
      <StyledTextButtonWrapper>
        <Text $type="h2" $color="var(--cordis-white)" $weight="bold">
          At Cordis
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
          We’re your partner in crafting memorable journeys. Rooted in the
          vibrant spirit of Lagos, we blend impeccable service, thoughtful
          design, and local flair to create experiences that go beyond a place
          to stay. Whether you’re here for business, leisure, or discovery,
          Cordis welcomes you with warmth, elegance, and the kind of hospitality
          that turns every visit into a story worth sharing.
        </Text>
        <RouterLink to="/about">
          <Button $type="accent">
            <Text $weight="light" $size="medium">
              Read More
            </Text>
          </Button>
        </RouterLink>
      </StyledTextButtonWrapper>
    </StyledAtCordisSection>
  );
}
