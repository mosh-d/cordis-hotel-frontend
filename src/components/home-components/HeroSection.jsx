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
    /* background: url(${HeroImage}) center/cover no-repeat; */
    z-index: -2;
    opacity: ${props => props.$videoLoaded ? 0 : 1};
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
    
    /* Complete control hiding for all browsers */
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
    &::-webkit-media-controls-volume-slider,
    &::-webkit-media-controls-seek-back-button,
    &::-webkit-media-controls-seek-forward-button,
    &::-webkit-media-controls-rewind-button,
    &::-webkit-media-controls-return-to-realtime-button,
    &::-webkit-media-controls-toggle-closed-captions-button {
      display: none !important;
      -webkit-appearance: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      width: 0 !important;
      height: 0 !important;
      overflow: hidden !important;
      pointer-events: none !important;
    }
    
    /* Force no controls */
    &[controls] {
      -webkit-appearance: none !important;
      appearance: none !important;
    }
    
    /* Additional iOS Safari specific properties */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    pointer-events: none;
    
    /* Force remove any possible overlay or pseudo elements */
    &::before,
    &::after {
      display: none !important;
      content: none !important;
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

const StyledVideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  background: transparent;
  
  /* Hide this overlay once video starts playing */
  opacity: ${props => props.$isPlaying ? 0 : 1};
  transition: opacity 0.3s ease;
`;

const StyledVideoControlBlocker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  background: transparent;
  
  /* Always visible to block any native controls */
  opacity: 1;
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
  const [isPlaying, setIsPlaying] = useState(false); // Start as false
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Handle autoplay and video events
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force remove controls attribute completely
      video.removeAttribute('controls');
      video.controls = false;
      
      // Add event listeners
      const handleLoadedData = () => {
        setVideoLoaded(true);
      };
      
      const handlePlay = () => {
        setIsPlaying(true);
      };
      
      const handlePause = () => {
        setIsPlaying(false);
      };
      
      const handleLoadStart = () => {
        // Ensure controls are off during load
        video.removeAttribute('controls');
        video.controls = false;
      };
      
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('loadstart', handleLoadStart);
      
      // Try to play
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // Autoplay failed, user interaction required
          setIsPlaying(false);
        });
      }
      
      // Cleanup
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('loadstart', handleLoadStart);
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
        ref={videoRef} 
        className="video-no-controls"
        autoPlay 
        muted 
        loop 
        playsInline
        webkit-playsinline="true"
        x-webkit-airplay="deny"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        poster=""
        tabIndex="-1"
        style={{ 
          pointerEvents: 'none',
          visibility: videoLoaded ? 'visible' : 'hidden',
          outline: 'none',
          border: 'none'
        }}
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>

      {/* Permanent blocker for native controls */}
      <StyledVideoControlBlocker />
      
      {/* Overlay to hide native controls during initial load */}
      <StyledVideoOverlay $isPlaying={isPlaying && videoLoaded} />

      <StyledVideoControls>
        <StyledPlayButton onClick={togglePlayPause}>
          {isPlaying ? (
            <RiPauseFill color="rgba(255, 255, 255, 0.5)" size="2rem" />
          ) : (
            <RiPlayFill color="rgba(255, 255, 255, 0.5)" size="2rem" />
          )}
        </StyledPlayButton>
      </StyledVideoControls>

      <NavContainer>
        <StyledLogoWrapper>
          <Logo />
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
