import { Link as RouterLink } from "react-router-dom";
import { styled } from "styled-components";
import HeroImage from "../../assets/HERO.png";
import HeroVideo from "../../assets/bg-videos/CORDIS-HERO-VIDEO.mp4";
import Logo from "../shared/Logo";
import MainNavBar from "../MainNavBar";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/Button";
import Text from "../shared/Text";
import { forwardRef, useState, useRef, useEffect } from "react";
import { RiPlayFill, RiPauseFill } from "react-icons/ri";
import { media } from "../../util/breakpoints";

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
    opacity: ${(props) => (props.$videoLoaded ? 0 : 1)};
    transition: opacity 0.5s ease;
  }

  & video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;

    /* Aggressive iOS Safari control hiding */
    &::-webkit-media-controls,
    &::-webkit-media-controls-panel,
    &::-webkit-media-controls-play-button,
    &::-webkit-media-controls-start-playback-button,
    &::-webkit-media-controls-enclosure,
    &::-webkit-media-controls-overlay-play-button,
    &::-webkit-media-controls-fullscreen-button,
    &::-webkit-media-controls-timeline,
    &::-webkit-media-controls-current-time-display,
    &::-webkit-media-controls-time-remaining-display,
    &::-webkit-media-controls-mute-button,
    &::-webkit-media-controls-volume-slider {
      display: none !important;
      -webkit-appearance: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
    }

    /* Additional iOS specific fixes */
    &[controls] {
      /* -webkit-appearance: none !important; */
    }

    /* Force remove any possible overlay */
    &::before,
    &::after {
      display: none !important;
    }
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  /* min-height: 50vw; */
  width: 100%;
`;

const StyledLogoWrapper = styled.div`
  ${media.mobile} {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const StyledNavBar1 = styled.div`
  ${media.mobile} {
    display: none;
  }
`;

const StyledNavBar2 = styled.div`
  display: none;

  ${media.mobile} {
    display: block;
  }
`;

const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 1rem 0;
  background: hsla(180, 2%, 22%, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease-in-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--cordis-text-color);
    }
  }

  & li .main-nav-item-active p {
    color: var(--cordis-emphasis);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: var(--cordis-emphasis);
      }
    }
  }

  & ul li p {
    color: var(--cordis-white);

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        color: var(--cordis-white);
      }
    }
  }

  ${media.mobile} {
    display: none;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* gap: .1rem; */
`;

const QuickCheckIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 2.5rem;
  width: 100%;
  padding: 2rem 0;
  background: hsla(180, 2%, 22%, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease-in-out;

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: stretch;

    & input {
      width: 40vw;
    }
  }

  ${media.mobile} {
    & input {
      width: 60vw;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--cordis-text-color);
    }
  }
`;

const StyledCustomInput = styled(CustomInput)`
  text-align: center;
  height: 4rem;
`;

const StyledVideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  background: transparent;

  /* Hide this overlay once video starts playing */
  opacity: ${(props) => (props.$isPlaying ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

const StyledVideoControls = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${media.tablet} {
    top: 45%;
  }
`;

const StyledPlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: hsla(180, 2%, 22%, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  cursor: pointer;
  transition: all 0.15s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      border-color: hsla(45, 100%, 55.7%, 0.5);
      transform: scale(1.07);
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const HeroSection = forwardRef((props, ref) => {
  const {
    checkIn,
    setCheckIn,
    checkOut,
    setCheckOut,
    noOfRooms,
    setNoOfRooms,
  } = props;
  const [isPlaying, setIsPlaying] = useState(false); // Start as false
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const today = new Date().toISOString().split('T')[0];

  // Handle autoplay and video events
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Add event listeners
      const handleLoadedData = () => {
        setVideoLoaded(true);
        // Try to play after video is loaded
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Autoplay failed, user interaction required
              setIsPlaying(false);
            });
        }
      };

      const handleCanPlay = () => {
        setVideoLoaded(true);
      };

      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      const handleLoadStart = () => {
        setVideoLoaded(false);
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("loadstart", handleLoadStart);

      // Force load the video
      video.load();

      // Cleanup
      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("loadstart", handleLoadStart);
      };
    }
  }, []);

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
    <StyledHeroSection ref={ref} $videoLoaded={videoLoaded}>
      <video
        key="hero-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline="true"
        controls={false}
        disablePictureInPicture
        preload="metadata"
        poster=""
        style={{
          pointerEvents: "none",
          opacity: videoLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* Overlay to hide native controls during initial load */}
      <StyledVideoOverlay $isPlaying={isPlaying && videoLoaded} />

      <StyledVideoControls>
        {videoLoaded && (
          <StyledPlayButton onClick={togglePlayPause}>
            {isPlaying ? (
              <RiPauseFill color="rgba(255, 255, 255, 0.5)" size="2rem" />
            ) : (
              <RiPlayFill color="rgba(255, 255, 255, 0.5)" size="2rem" />
            )}
          </StyledPlayButton>
        )}
      </StyledVideoControls>

      <NavContainer>
        <StyledLogoWrapper>
          <Logo />
          {/* <Logo $type="filled" /> */}
        </StyledLogoWrapper>
        <StyledNavBar>
          <StyledNavBar1>
            <MainNavBar showLogo={false} />
          </StyledNavBar1>
        </StyledNavBar>
        <StyledNavBar2>
          <MainNavBar showLogo={false} $type="mobile" />
        </StyledNavBar2>
      </NavContainer>

      <QuickCheckIn>
        <CustomInput
          label="When do you check in?"
          $for="check-in"
          $type="date"
          value={checkIn}
          min={today}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              setCheckIn("");
              return;
            }
            setCheckIn(val < today ? today : val);
          }}
        />
        <CustomInput
          label="When do you check out?"
          $for="check-out"
          $type="date"
          value={checkOut}
          min={checkIn || today}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              setCheckOut("");
              return;
            }
            const minDate = checkIn || today;
            setCheckOut(val < minDate ? minDate : val);
          }}
        />
        <StyledCustomInput
          label="How many rooms? (1-4)"
          $for="guests"
          $type="number"
          min="1"
          max="4"
          step="1"
          inputMode="numeric"
          value={noOfRooms}
          onChange={(e) => {
            const rawValue = e.target.value;
            const digitsOnly = rawValue.replace(/\D/g, "");
            if (digitsOnly === "") {
              setNoOfRooms("");
              return;
            }
            const firstDigit = digitsOnly[0];
            if (["1", "2", "3", "4"].includes(firstDigit)) {
              setNoOfRooms(firstDigit);
            }
          }}
        />
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
