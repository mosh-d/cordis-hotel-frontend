import styled from "styled-components";
import Carousel from "../shared/Carousel";
import Text from "../shared/Text";
import { Link as RouterLink } from "react-router-dom";
import { getCloudinaryUrl } from "../../config/cloudinary";
import Button from "../shared/Button";
import { media } from "../../util/breakpoints";

// Local Restaurant images
import restaurant1 from "../../assets/cordis-restaurant/CORDIS-RESTAURANT-1.jpg";
import restaurant2 from "../../assets/cordis-restaurant/CORDIS-RESTAURANT-2.jpg";

// Local Bar images
import bistro1 from "../../assets/cordis-bistro/CORDIS-BISTRO-1.jpg";
import bistro2 from "../../assets/cordis-bistro/CORDIS-BISTRO-2.jpg";
import bistro3 from "../../assets/cordis-bistro/CORDIS-BISTRO-3.jpg";

// Local Fine Dining images
import fineDining1 from "../../assets/cordis-fine-dining/CORDIS-FINE-DINING-1.jpg";
import fineDining2 from "../../assets/cordis-fine-dining/CORDIS-FINE-DINING-2.jpg";
import fineDining3 from "../../assets/cordis-fine-dining/CORDIS-FINE-DINING-3.jpg";
import fineDining4 from "../../assets/cordis-fine-dining/CORDIS-FINE-DINING-4.jpg";
import fineDining5 from "../../assets/cordis-fine-dining/CORDIS-FINE-DINING-5.jpg";

//Local image arrays
const restaurantImages = [restaurant1, restaurant2];
const bistroImages = [bistro1, bistro2, bistro3];
const fineDiningImages = [
  fineDining1,
  fineDining2,
  fineDining3,
  fineDining4,
  fineDining5,
];

// //restaurantimages
// const Restaurant1 = "cordis/restaurant-1";
// const Restaurant2 = "cordis/restaurant-2";
// const Restaurant3 = "cordis/restaurant-3";

// //bar images
// const Bistro1 = "cordis/bistro-1";
// const Bistro2 = "cordis/bistro-2";
// const Bistro3 = "cordis/bistro-3";

// //fine dining images
// const FineDining1 = "cordis/fine-dining-1";
// const FineDining2 = "cordis/fine-dining-2";
// const FineDining3 = "cordis/fine-dining-3";

// const RestaurantImages = [getCloudinaryUrl(Restaurant1), getCloudinaryUrl(Restaurant2), getCloudinaryUrl(Restaurant3)];
// const BistroImages = [getCloudinaryUrl(Bistro1), getCloudinaryUrl(Bistro2), getCloudinaryUrl(Bistro3)];
// const FineDiningImages = [getCloudinaryUrl(FineDining1), getCloudinaryUrl(FineDining2), getCloudinaryUrl(FineDining3)];

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
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    min-height: 223rem;
  }
`;

export default function FlavorsOfCordisSection() {
  return (
    <StyledDiningDrinksSection>
      <DiningDrinksText2>
        <Text $type="h1" $color="var(--cordis-white)" $weight="bold">
          Flavors of Cordis
        </Text>
        <Text $color="var(--cordis-gray)">
          Indulge in flame‑grilled specialties, authentic Nigerian tastes, and
          chef‑crafted tasting menus—where every dish blends local ingredients
          with global flair.
        </Text>
      </DiningDrinksText2>
      <RestaurantWrapper>
        <StyledRestaurant>
          <Carousel ImageUrls={restaurantImages} />
        </StyledRestaurant>
        <RestaurantTitle
          $type="h3"
          $size="extra-small"
          $typeFace="primary"
          $spacing=".2em"
          $weight="bold"
          $color="var(--cordis-text-color)"
        >
          Restaurant
        </RestaurantTitle>
        <RestaurantTitle2
          $color="var(--cordis-black)"
          $typeFace="secondary"
          $size="large"
          $spacing=".05em"
          $weight="regular"
        >
          A vibrant dining hub serving a rich mix of local and international
          flavors.{" "}
        </RestaurantTitle2>
      </RestaurantWrapper>

      <StyledBarSpecials>
        <DiningDrinksText>
          <Text $type="h1" $color="var(--cordis-white)" $weight="bold">
            Flavors of Cordis
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
              <Carousel ImageUrls={bistroImages} />
            </StyledBar>
            <Text
              $type="h3"
              $size="extra-small"
              $typeFace="primary"
              $spacing=".2em"
              $weight="bold"
              $color="var(--cordis-white)"
            >
              Bistro
            </Text>
            <Text
              $typeFace="secondary"
              $color="var(--cordis-gray)"
              $size="large"
              $spacing=".05em"
              $weight="regular"
            >
              The perfect spot for light bites, fresh brews, and relaxed
              conversations.{" "}
            </Text>
          </BarWrapper>

          <SpecialsWrapper>
            <StyledSpecials>
              <Carousel ImageUrls={fineDiningImages} />
            </StyledSpecials>
            <Text
              $type="h3"
              $size="extra-small"
              $typeFace="primary"
              $spacing=".2em"
              $weight="bold"
              $color="var(--cordis-white)"
            >
              Fine Dining
            </Text>
            <Text
              $typeFace="secondary"
              $color="var(--cordis-gray)"
              $size="large"
              $spacing=".05em"
              $weight="regular"
            >
              An elevated culinary experience where every plate is a
              masterpiece.{" "}
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
