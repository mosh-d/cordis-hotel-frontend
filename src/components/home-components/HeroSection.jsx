import { Link as RouterLink } from "react-router-dom";
import { styled } from "styled-components";
import HeroImage from "../../assets/HERO.png";
import HeroVideo from "../../assets/bg-videos/CORDIS-HERO-VIDEO.mp4";
import Logo from "../shared/Logo";
import MainNavBar from "../MainNavBar";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/Button";
import Text from "../shared/Text";
import { forwardRef, useState, useRef } from "react";
import { RiPlayFill, RiPauseFill } from "react-icons/ri";

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${HeroImage}) center/cover no-repeat;
    z-index: -2;
  }

  & video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
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

const StyledVideoControls = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const StyledPlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-color: hsla(45, 100%, 55.7%, 0.5);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HeroSection = forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <StyledHeroSection ref={ref}>
      <video ref={videoRef} autoPlay muted loop>
        <source src={HeroVideo} type="video/mp4" />
      </video>

      <StyledVideoControls>
        <StyledPlayButton onClick={togglePlayPause}>
          {isPlaying ? (
            <RiPauseFill color="white" size="3rem" />
          ) : (
            <RiPlayFill color="white" size="3rem" />
          )}
        </StyledPlayButton>
      </StyledVideoControls>

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
        <CustomInput label="How many rooms?" $for="guests" $type="number" />
        <RouterLink to="/rooms">
          <Button $type="emphasis">
            <Text $weight="bold" $size="small">
              Check Availability
            </Text>
          </Button>
        </RouterLink>
      </QuickCheckIn>
    </StyledHeroSection>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
