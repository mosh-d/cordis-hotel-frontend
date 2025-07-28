import { styled } from "styled-components";
import HeroImage from "../../assets/HERO.png";
import Logo from "../shared/Logo";
import MainNavBar from "../MainNavBar";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/Button";
import Text from "../shared/Text";
import { forwardRef } from "react";

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  min-height: 50rem;
  width: 100%;
`;

const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 1rem 0;
  background: hsla(180, 2%, 22%, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  & li .main-nav-item-active p {
      color: var(--cordis-emphasis);

      &:hover {
        color: var(--cordis-emphasis);
      }
    }

  & ul li p {
    color: var(--cordis-white);

    &:hover {
      color: var(--cordis-white);
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const QuickCheckIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 2.5rem;
  width: 100%;
  padding: 2rem 0;
  background-color: var(--cordis-text-color);
`;

const HeroSection = forwardRef((props, ref) => {
  return (
    <StyledHeroSection ref={ref}>
      <NavContainer>
        <Logo $type="filled" />
        <StyledNavBar>
          <MainNavBar showLogo={false} />
        </StyledNavBar>
      </NavContainer>

      <QuickCheckIn>
        <CustomInput
          label="When do you check in?"
          $for="check-in"
          $type="date"
        />
        <CustomInput
          label="When do you check out?"
          $for="check-out"
          $type="date"
        />
        <CustomInput label="How many guests?" $for="guests" $type="number" />
        <Button $type="emphasis">
          <Text $weight="bold" $size="small">
            Check Availability
          </Text>
        </Button>
      </QuickCheckIn>
    </StyledHeroSection>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;