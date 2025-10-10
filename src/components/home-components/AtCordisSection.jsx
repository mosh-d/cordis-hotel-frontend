import styled from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";
import { cloudinaryBg } from "../../config/cloudinary";

//image
import AtCordisBackground from "../../assets/at-cordis/AT-CORDIS.jpg";

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
          At Cordis Hotel, we do not just provide a room—we create an
          experience. Each of our rooms and suites is thoughtfully designed with
          your comfort in mind. Enjoy spacious layouts, premium linens, tasteful
          furnishings, and a calming ambiance perfect for rest or productivity.
          Our restaurants delivers an eclectic culinary experience, combining
          bold Nigerian flavors with international cuisine — all crafted by our
          seasoned chefs at Ember Restaurant, Bistrol and Bar and Cordis
          Restaurant and Bar for its vibrant buffet breakfast paired with an
          inviting bar for after-hours relaxation. The facility offers elegant
          and versatile banquet hall perfect for weddings, social events, and
          celebrations, Boutique-style professional meeting room designed for
          business meetings and corporate gatherings in the heart of Ikeja’s
          commercial district, a refreshing indoor swimming pool for relaxation
          and leisure, well equipped gym for your fitness and calming sanctuary
          Spar offering massages, facial treatments, and therapies designed to
          rejuvenate body and mind. Whether you're visiting for business,
          pleasure, or a blend of both, your stay with us promises more than
          accommodation — it promises an experience.
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
