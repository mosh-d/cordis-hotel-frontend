import { styled } from "styled-components";
import Text from "../shared/Text";

//image
import About3_1 from "../../assets/cordis-about-3/CORDIS-ABOUT-3-1.png";

const StyledAboutSection3 = styled.div`
  display: flex;
  width: 100%;
  gap: 12rem;
  align-items: center;
  height: 50vw;
  padding: 12rem;
  justify-content: space-between;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 50%;
  height: 70%;
  justify-content: center;
  position: relative;

  &::before {
    background-color: var(--cordis-light-gray);
    content: "";
    height: 100%;
    width: 120%;
    top: 50%;
    left: -95rem;
    position: absolute;
    z-index: -1;
    transform: translateY(-50%);
  }
`;

const StyledImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${About3_1});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function AboutSection3() {
  return (
    <StyledAboutSection3>
      <StyledImageContainer></StyledImageContainer>
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
    </StyledAboutSection3>
  );
}
