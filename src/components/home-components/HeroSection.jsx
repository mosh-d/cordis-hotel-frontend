import { Link as RouterLink } from "react-router-dom";
import { styled } from "styled-components";
import Logo from "../shared/Logo";
import MainNavBar from "../MainNavBar";
import CustomInput from "../shared/CustomInput";
import Button from "../shared/Button";
import Text from "../shared/Text";
import { forwardRef, useState, useRef, useEffect } from "react";
import { RiPlayFill, RiPauseFill } from "react-icons/ri";
import { media } from "../../util/breakpoints";
import CustomInput2 from "../shared/CustomInput2";
import {
  cloudinaryBg,
  getCloudinaryUrl,
  getCloudinaryVideoUrl,
} from "../../config/cloudinary";

//Hero image
const HeroImage = "cordis/hero/image";

//Hero video
const HeroVideo = "cordis/hero/video";
// Test with Cloudinary's sample video (uncomment to test)
// const HeroVideo = "sample";

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
    background: ${cloudinaryBg(HeroImage)} center/cover no-repeat;
    z-index: -2;
    opacity: ${(props) => (props.$videoLoaded ? 0 : 1)};
    transition: opacity 0.5s ease;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgb(36, 25, 4) 0%, rgb(255, 255, 255) 60%, transparent);
    mix-blend-mode: multiply;
    z-index: 1;
    pointer-events: none;
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

  /* Only hide controls for non-Safari browsers */
  &:not(.safari-browser) video {
    -webkit-appearance: none !important;

    /* Aggressive control hiding for non-Safari browsers */
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

    /* Additional fixes for non-Safari */
    &[controls] {
      -webkit-appearance: none !important;
    }

    /* Force remove any possible overlay */
    &::before,
    &::after {
      display: none !important;
    }

    &::-webkit-media-controls-overlay-enclosure {
      display: none !important;
    }
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  /* min-height: 50vw; */
  width: 100%;

  ${media.mobile} {
    min-height: 110rem;
  }
`;

const StyledLogoWrapper = styled.div`
  z-index: 10;
  position: relative;
  
  ${media.mobile} {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
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
  z-index: 10;
  position: relative;

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
  z-index: 10;
  position: relative;
  /* gap: .1rem; */
`;

const QuickCheckIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 4.8rem;
  width: 100%;
  padding: 2rem 8rem;
  background: hsla(180, 2%, 22%, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease-in-out;

  ${media.tablet} {
    flex-direction: column;
    /* justify-content: center; */
    padding: 2rem 8rem;
    align-items: center;

    & input {
      width: 100%;
    }
  }

  ${media.mobile} {
    padding: 2rem;
    & input {
      width: 100%;
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
    top: 35%;
  }
  ${media.mobile} {
    top: 30%;
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
    noOfAdults,
    setNoOfAdults,
    noOfChildren,
    setNoOfChildren,
    rollawayBed,
    setRollawayBed,
    roomsAndGuests,
    setRoomsAndGuests,
  } = props;
  const [isPlaying, setIsPlaying] = useState(false); // Start as false
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const videoRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  // Detect Safari browser
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const safari = /safari/.test(userAgent) && !/chrome/.test(userAgent) && !/chromium/.test(userAgent);
    setIsSafari(safari);
    console.log("🔍 Browser detection:", safari ? "Safari" : "Other browser");
  }, []);

  // Update roomsAndGuests display value when individual values change
  useEffect(() => {
    const updateRoomsAndGuests = () => {
      const roomText = noOfRooms === 1 ? "room" : "rooms";
      const adultText = noOfAdults === 1 ? "adult" : "adults";
      const childText = noOfChildren === 1 ? "child" : "children";
      let display = `${noOfRooms} ${roomText}, ${noOfAdults} ${adultText}`;
      if (noOfChildren > 0) {
        display += `, ${noOfChildren} ${childText}`;
      }
      setRoomsAndGuests(display);
    };
    updateRoomsAndGuests();
  }, [noOfRooms, noOfAdults, noOfChildren, setRoomsAndGuests]);

  // Handle autoplay and video events
  useEffect(() => {
    const video = videoRef.current;
    if (video && isSafari !== null) { // Wait for Safari detection to complete
      // Debug: Log the video URL to check if it's correct
      const videoUrl = getCloudinaryVideoUrl(HeroVideo);
      console.log("🎬 Video URL:", videoUrl);
      console.log("🎬 Video public ID:", HeroVideo);

      // Add event listeners
      const handleLoadedData = () => {
        console.log("✅ Video loaded successfully");
        setVideoLoaded(true);
        
        // Only attempt autoplay for non-Safari browsers
        if (!isSafari) {
          // Force autoplay for non-Safari browsers
          const attemptAutoplay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log("🎬 Autoplay successful");
                  setIsPlaying(true);
                })
                .catch((error) => {
                  console.log("⚠️ Autoplay failed:", error.message);
                  // Try again after a short delay
                  setTimeout(() => {
                    video.play().then(() => {
                      console.log("🎬 Delayed autoplay successful");
                      setIsPlaying(true);
                    }).catch(() => {
                      console.log("❌ All autoplay attempts failed - user interaction required");
                      setIsPlaying(false);
                    });
                  }, 100);
                });
            }
          };
          
          // Try autoplay immediately and after a short delay
          attemptAutoplay();
          setTimeout(attemptAutoplay, 50);
        } else {
          console.log("🍎 Safari detected - letting native controls handle playback");
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
        console.log("🔄 Video load start");
        setVideoLoaded(false);
      };

      const handleError = (e) => {
        console.error("❌ Video error:", e);
        console.error("❌ Video error details:", video.error);
        console.error("❌ Video src:", video.src);
        console.error("❌ Video networkState:", video.networkState);
        console.error("❌ Video readyState:", video.readyState);
      };

      video.addEventListener("loadeddata", handleLoadedData);
      video.addEventListener("canplay", handleCanPlay);
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("loadstart", handleLoadStart);
      video.addEventListener("error", handleError);

      // Force load the video
      video.load();

      // Cleanup
      return () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("loadstart", handleLoadStart);
        video.removeEventListener("error", handleError);
      };
    }
  }, [isSafari]);

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
    <StyledHeroSection ref={ref} $videoLoaded={videoLoaded} className={isSafari ? 'safari-browser' : ''}>
      <video
        key="hero-video"
        ref={videoRef}
        autoPlay={!isSafari} // Disable autoplay for Safari
        muted
        loop
        playsInline
        webkit-playsinline="true"
        x-webkit-airplay="deny"
        controls={isSafari} // Show controls for Safari, hide for others
        controlsList={isSafari ? "" : "nodownload nofullscreen noremoteplayback"}
        disablePictureInPicture={!isSafari}
        preload="auto"
        poster=""
        style={{
          pointerEvents: isSafari ? "auto" : "none", // Allow interaction for Safari
          opacity: videoLoaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          WebkitAppearance: isSafari ? "auto" : "none",
        }}
      >
        <source src={getCloudinaryVideoUrl(HeroVideo)} type="video/mp4" />
      </video>

      {/* Overlay to hide native controls during initial load */}
      <StyledVideoOverlay $isPlaying={isPlaying && videoLoaded} />

      <StyledVideoControls>
        {videoLoaded && !isSafari && ( // Hide custom controls for Safari
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
        <CustomInput2
          header="When do you check in?"
          $style="accent"
          type="date"
          value={checkIn}
          min={today}
          onChange={(e) => {
            const val = e.target.value;
            if (val === "") {
              setCheckIn("");
              return;
            }
            const newCheckIn = val < today ? today : val;
            setCheckIn(newCheckIn);
            
            // If check-out is before the new check-in date, update check-out
            if (checkOut && checkOut < newCheckIn) {
              setCheckOut(newCheckIn);
            }
          }}
        />
        <CustomInput2
          header="When do you check out?"
          $style="accent"
          type="date"
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
        <CustomInput2
          dropdown="true"
          header="Rooms and Guests"
          $placeholder="Select rooms and guests"
          $style="accent"
          type="text"
          value={roomsAndGuests}
          readOnly
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
