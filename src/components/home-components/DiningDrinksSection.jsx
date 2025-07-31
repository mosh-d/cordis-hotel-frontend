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
`;

const RestaurantWrapper = styled.div`
  flex: 0.7;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BarWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;

const SpecialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  gap: 1rem;
`;

const StyledRestaurant = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--cordis-text-color);
`;

const StyledBar = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledSpecials = styled.div`
  height: 100%;
  width: 100%;
`;

const DiningDrinksText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

const BarSpecialsContainer = styled.div`
  display: flex;
  gap: 2.4rem;
  height: 100%;
  flex: 1;
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
`;

const BackDrop = styled.div`
  background-color: var(--cordis-text-color);
  position: absolute;
  top: 10rem;
  right: 5rem;
  width: 70vw;
  height: 84.5rem;
  z-index: -1;
`;

export default function DiningDrinksSection() {
  return (
    <StyledDiningDrinksSection>
      <RestaurantWrapper>
        <StyledRestaurant>
          <Carousel ImageUrls={RestaurantImages} />
        </StyledRestaurant>
        <Text
          $type="h3"
          $size="extra-small"
          $typeFace="primary"
          $spacing=".2em"
          $weight="bold"
          $color="var(--cordis-text-color)"
        >
          Cordis Restaurant
        </Text>
        <Text
          $color="var(--cordis-black)"
          $typeFace="secondary"
          $size="large"
          $spacing=".05em"
          $weight="regular"
        >
          A vibrant celebration of authentic Nigerian culinary artistry.
        </Text>
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
