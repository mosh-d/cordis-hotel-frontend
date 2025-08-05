import { styled } from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";

//image
import About2_1 from "../../assets/cordis-about-2/CORDIS-ABOUT-2-1.png";

const StyledAboutSection2 = styled.div`
  display: flex;
  width: 100%;
  gap: 12rem;
  align-items: center;
  height: max-content;
  padding: 12rem;
  justify-content: space-between;

  ${media.desktop} {
    gap: 6rem;
    padding: 12rem 4rem;
  }

  ${media.tablet} {
    flex-direction: column;
    padding: 0 0 12rem 0;
  }
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 50%;
  height: 70%;
  justify-content: center;
  position: relative;

  ${media.tablet} {
    width: 100%;
    padding: 0 4rem;
    display: none;
  }

  &::before {
    background-color: var(--cordis-light-gray);
    content: "";
    height: 150%;
    width: 170%;
    top: 50%;
    left: -5rem;
    position: absolute;
    z-index: -1;
    transform: translateY(-50%);

    ${media.tablet} {
      left: -16vw;
    }
  }
`;

const StyledTextWrapper2 = styled.div`
  display: none;
  flex-direction: column;
  gap: 1.8rem;
  width: 50%;
  height: 70%;
  justify-content: center;
  position: relative;

  ${media.tablet} {
    width: 100%;
    padding: 0 4rem;
    display: flex;
  }

  ${media.mobile} {
    padding: 0 2rem;
  }

  &::before {
    background-color: var(--cordis-light-gray);
    content: "";
    height: 150%;
    width: 170%;
    top: 50%;
    left: -5rem;
    position: absolute;
    z-index: -1;
    transform: translateY(-50%);

    ${media.tablet} {
      left: -16vw;
    }
  }
`;

const StyledImageContainer = styled.div`
  width: 50%;
  height: 50rem;
  background-image: url(${About2_1});
  background-repeat: no-repeat;
  background-size: cover;

  ${media.mobile} {
    width: 100%;
  }
`;

export default function AboutSection2() {
  return (
    <StyledAboutSection2>
      <StyledTextWrapper>
        <Text
          $type="h1"
          $size="extra-large"
          $weight="bold"
          $color="var(--cordis-black)"
        >
          Your Ideal Retreat for Comfort and Convenience
        </Text>
        <Text
          $type="p"
          $typeFace="secondary"
          $size="extra-large"
          $weight="bold"
          $spacing="0.04em"
        >
          Welcome to a new standard of hospitality in Abijo GRA. The Five Clover
          Inn is a modern hotel located in the peaceful Abijo area with few
          minutes' drive from the lekki Epe-Expressway. It offers a perfect
          environment for both business and leisure travelers by combining
          comfort, functionality, and elegance. The inn features a variety of
          well-appointed rooms designed for relaxation, including king-sized
          beds with luxurious bedding, a coffee station with complimentary
          packages, air conditioning, free Wi-Fi, flat-screen TVs, and ensuite
          bathrooms.
        </Text>
      </StyledTextWrapper>
      <StyledImageContainer></StyledImageContainer>
      <StyledTextWrapper2>
        <Text
          $type="h1"
          $size="extra-large"
          $weight="bold"
          $color="var(--cordis-black)"
        >
          Your Ideal Retreat for Comfort and Convenience
        </Text>
        <Text
          $type="p"
          $typeFace="secondary"
          $size="extra-large"
          $weight="bold"
          $spacing="0.04em"
        >
          Welcome to a new standard of hospitality in Abijo GRA. The Five Clover
          Inn is a modern hotel located in the peaceful Abijo area with few
          minutes' drive from the lekki Epe-Expressway. It offers a perfect
          environment for both business and leisure travelers by combining
          comfort, functionality, and elegance. The inn features a variety of
          well-appointed rooms designed for relaxation, including king-sized
          beds with luxurious bedding, a coffee station with complimentary
          packages, air conditioning, free Wi-Fi, flat-screen TVs, and ensuite
          bathrooms.
        </Text>
      </StyledTextWrapper2>
    </StyledAboutSection2>
  );
}
