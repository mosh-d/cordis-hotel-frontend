import styled from "styled-components";
import Carousel from "../shared/Carousel";
import Text from "../shared/Text";
import { Link as RouterLink } from "react-router-dom";

//restaurantimages
import Restaurant1 from "../../assets/cordis-restaurant/CORDIS-RESTAURANT-1.png";
import Restaurant2 from "../../assets/cordis-restaurant/CORDIS-RESTAURANT-2.png";
import Restaurant3 from "../../assets/cordis-restaurant/CORDIS-RESTAURANT-3.png";

//bar images
import Bar1 from "../../assets/cordis-bar/CORDIS-BAR-1.png";
import Bar2 from "../../assets/cordis-bar/CORDIS-BAR-2.png";
import Bar3 from "../../assets/cordis-bar/CORDIS-BAR-3.png";

//specials images
import Specials1 from "../../assets/cordis-specials/CORDIS-SPECIALS-1.png";
import Specials2 from "../../assets/cordis-specials/CORDIS-SPECIALS-2.png";
import Specials3 from "../../assets/cordis-specials/CORDIS-SPECIALS-3.png";
import Button from "../shared/Button";
import { media } from "../../util/breakpoints";

const RestaurantImages = [Restaurant1, Restaurant2, Restaurant3];
const BarImages = [Bar1, Bar2, Bar3];
const SpecialsImages = [Specials1, Specials2, Specials3];

const StyledDiningDrinksSection = styled.section`
  position: relative;
  height: 120rem;
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 15rem 15rem;

  @media (max-width: 1400px) {
    padding: 15rem 4rem;
  }

  ${media.desktop} {
    padding: 15rem 4rem;
  }

  ${media.tablet} {
    flex-direction: column;
    height: 200rem;
    /* align-items: flex-start; */
  }

  ${media.mobile} {
    padding: 12rem 0;
    height: auto;
    min-height: 230rem;
  }
`;

const RestaurantWrapper = styled.div`
  flex: 0.7;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${media.tablet} {
    height: 200rem;
    flex: 1;
    width: 100%;
  }

  ${media.mobile} {
    height: auto;
    min-height: 75rem;
    flex: none;
  }
`;

const BarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;

  ${media.mobile} {
    height: auto;
    min-height: 35rem;
    flex: none;
  }
`;

const SpecialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  gap: 1rem;

  ${media.mobile} {
    height: auto;
    min-height: 35rem;
    flex: none;
  }
`;

const StyledRestaurant = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--cordis-text-color);

  ${media.mobile} {
    height: 70rem;
    min-height: 60rem;
  }
`;

const StyledBar = styled.div`
  height: 100%;
  width: 100%;

  ${media.mobile} {
    height: 35rem;
    min-height: 30rem;
  }
`;

const StyledSpecials = styled.div`
  height: 100%;
  width: 100%;

  ${media.mobile} {
    height: 35rem;
    min-height: 30rem;
  }
`;

const DiningDrinksText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

  ${media.tablet} {
    display: none;
  }
`;

const DiningDrinksText2 = styled.div`
  display: none;

  ${media.tablet} {
    display: block;
  }

  ${media.mobile} {
    padding: 0 2rem;
  }
`;

const BarSpecialsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  height: 100%;
  flex: 1;

  ${media.mobile} {
    flex-direction: column;
    padding: 0 2rem;
    height: auto;
    min-height: 50rem;
  }
`;

const StyledBarSpecials = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8rem;

  ${media.tablet} {
    align-items: center;
  }

  ${media.mobile} {
    flex: none;
    height: auto;
    gap: 4rem;
  }
`;

const RestaurantTitle = styled(Text)`
  font-weight: 1000;
  font-size: var(--text-xl);

  ${media.tablet} {
    color: var(--cordis-white) !important;
    font-weight: 1000;
    font-size: var(--text-xl);
  }

  ${media.mobile} {
    padding: 0 2rem;
  }
`;
const RestaurantTitle2 = styled(Text)`
  font-family: var(--font-family-secondary);
  font-size: var(--text-lg);
  font-weight: 1000;

  ${media.tablet} {
    color: var(--cordis-gray) !important;
    font-family: var(--font-family-secondary);
    font-size: var(--text-lg);
  }

  ${media.mobile} {
    padding: 0 2rem;
  }
`;

const BackDrop = styled.div`
  background-color: var(--cordis-text-color);
  position: absolute;
  top: 10rem;
  right: 5rem;
  width: 70vw;
  height: 84.5rem;
  z-index: -1;

  ${media.desktop} {
    right: 1.5rem;
  }

  @media (max-width: 1400px) {
    right: 1.5rem;
  }

  ${media.tablet} {
    width: 100%;
    right: 0;
    height: 180rem;
  }

  ${media.mobile} {
    height: auto;
    min-height: 217rem;
  }
`;

export default function DiningDrinksSection() {
  return (
    <StyledDiningDrinksSection>
      <DiningDrinksText2>
        <Text $type="h1" $color="var(--cordis-white)" $weight="bold">
          Dining & Drinks
        </Text>
        <Text $color="var(--cordis-gray)">
          Indulge in flame‑grilled specialties, authentic Nigerian tastes, and
          chef‑crafted tasting menus—where every dish blends local ingredients
          with global flair.
        </Text>
      </DiningDrinksText2>
      <RestaurantWrapper>
        <StyledRestaurant>
          <Carousel ImageUrls={RestaurantImages} />
        </StyledRestaurant>
        <RestaurantTitle
          $type="h3"
          $size="extra-small"
          $typeFace="primary"
          $spacing=".2em"
          $weight="bold"
          $color="var(--cordis-text-color)"
        >
          Cordis Restaurant
        </RestaurantTitle>
        <RestaurantTitle2
          $color="var(--cordis-black)"
          $typeFace="secondary"
          $size="large"
          $spacing=".05em"
          $weight="regular"
        >
          A vibrant celebration of authentic Nigerian culinary artistry.
        </RestaurantTitle2>
      </RestaurantWrapper>

      <StyledBarSpecials>
        <DiningDrinksText>
          <Text $type="h1" $color="var(--cordis-white)" $weight="bold">
            Dining & Drinks
          </Text>
          <Text $color="var(--cordis-gray)">
            Indulge in flame‑grilled specialties, authentic Nigerian tastes, and
            chef‑crafted tasting menus—where every dish blends local ingredients
            with global flair.
          </Text>
        </DiningDrinksText>
        <BarSpecialsContainer>
          <BarWrapper>
            <StyledBar>
              <Carousel ImageUrls={BarImages} />
            </StyledBar>
            <Text
              $type="h3"
              $size="extra-small"
              $typeFace="primary"
              $spacing=".2em"
              $weight="bold"
              $color="var(--cordis-white)"
            >
              Cordis Bar
            </Text>
            <Text
              $typeFace="secondary"
              $color="var(--cordis-gray)"
              $size="large"
              $spacing=".05em"
              $weight="regular"
            >
              An intimate, multi-course journey curated by our executive chef.
            </Text>
          </BarWrapper>

          <SpecialsWrapper>
            <StyledSpecials>
              <Carousel ImageUrls={SpecialsImages} />
            </StyledSpecials>
            <Text
              $type="h3"
              $size="extra-small"
              $typeFace="primary"
              $spacing=".2em"
              $weight="bold"
              $color="var(--cordis-white)"
            >
              Cordis Specials
            </Text>
            <Text
              $typeFace="secondary"
              $color="var(--cordis-gray)"
              $size="large"
              $spacing=".05em"
              $weight="regular"
            >
              An intimate, multi-course journey curated by our executive chef.
            </Text>
          </SpecialsWrapper>
        </BarSpecialsContainer>
        <RouterLink to="/room-booking">
          <Button $type="emphasis2">
            <Text $weight="bold" $size="medium">
              Reserve
            </Text>
          </Button>
        </RouterLink>
      </StyledBarSpecials>
      <BackDrop></BackDrop>
    </StyledDiningDrinksSection>
  );
}
