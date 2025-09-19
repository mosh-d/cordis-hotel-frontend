import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useImagePreloader } from "../../hooks/useImagePreloader";
import Text from "../shared/Text";

const StyledButton = styled.button`
  background-color: var(--cordis-white);
  border: none;
  border-radius: 50%;
  padding: 1rem;
  width: 5rem;
  height: 5rem;
  margin: 2rem;
  opacity: 70%;
  z-index: 200;
  position: relative;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 100%;
    }
  }

  &:active {
    outline: 2px solid var(--cordis-emphasis);
    outline-offset: 4px;
  }
`;

const StyledBottomContainer = styled.div`
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0)
  );
  height: 20rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  z-index: 200;
  // position: absolute;
  bottom: 0;
  right: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const StyledCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000px;
  cursor: pointer;
`;

const StyledFlippableCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
`;

const StyledCardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  overflow: hidden;
`;

const StyledCardFront = styled(StyledCardFace)`
  /* Front face - shows carousel */
  z-index: 2;
`;

const StyledCardBack = styled(StyledCardFace)`
  transform: rotateY(180deg);
  background-color: var(--cordis-text-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--cordis-white);
  z-index: 1;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const StyledLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--cordis-light-gray);
  color: var(--cordis-text-color);
  gap: 1rem;
`;

const StyledProgressBar = styled.div`
  width: 60%;
  height: 4px;
  background-color: var(--cordis-gray);
  border-radius: 2px;
  overflow: hidden;
`;

const StyledProgressFill = styled.div`
  height: 100%;
  background-color: var(--cordis-emphasis);
  border-radius: 2px;
  transition: width 0.3s ease;
  width: ${(props) => props.$progress}%;
`;

const StyledLoadingText = styled.div`
  font-size: var(--text-sm);
  color: var(--cordis-text-color);
  text-align: center;
`;

export default function FlippableCarousel({
  ImageUrls,
  Description = [],
  onIndexChange,
  backContent,
}) {
  // All hooks must be called at the top, before any conditional returns
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Preload all images - this hook must always be called
  const { imagesLoaded, loadedCount, totalImages, loadingProgress } =
    useImagePreloader(ImageUrls);

  // Call onIndexChange on mount to set initial index
  useEffect(() => {
    if (onIndexChange) onIndexChange(imageIndex);
  }, []);

  // Safety check for ImageUrls - after all hooks
  if (!ImageUrls || ImageUrls.length === 0) {
    return (
      <StyledLoadingContainer>
        <StyledLoadingText>No images available</StyledLoadingText>
      </StyledLoadingContainer>
    );
  }

  // Show loading state while images are preloading
  if (!imagesLoaded) {
    return (
      <StyledLoadingContainer>
        <StyledLoadingText>
          Loading images... ({loadedCount}/{totalImages})
        </StyledLoadingText>
        <StyledProgressBar>
          <StyledProgressFill $progress={loadingProgress} />
        </StyledProgressBar>
        <StyledLoadingText style={{ fontSize: "var(--text-xs)", opacity: 0.7 }}>
          {loadingProgress}%
        </StyledLoadingText>
      </StyledLoadingContainer>
    );
  }

  function showPrevImage(e) {
    e.stopPropagation(); // Prevent flip when clicking navigation
    setDirection(-1);
    setTimeout(() => {
      const newIndex = imageIndex === 0 ? ImageUrls.length - 1 : imageIndex - 1;
      setImageIndex(newIndex);
      if (onIndexChange) onIndexChange(newIndex);
    }, 0);
  }

  function showNextImage(e) {
    e.stopPropagation(); // Prevent flip when clicking navigation
    setDirection(1);
    setTimeout(() => {
      const newIndex = imageIndex === ImageUrls.length - 1 ? 0 : imageIndex + 1;
      setImageIndex(newIndex);
      if (onIndexChange) onIndexChange(newIndex);
    }, 0);
  }

  function handleCardClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <StyledCarouselContainer onClick={handleCardClick}>
      <StyledFlippableCard
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Front Face - Carousel */}
        <StyledCardFront>
          <AnimatePresence initial={false} mode="wait">
            <StyledImage
              key={ImageUrls[imageIndex]}
              src={ImageUrls[imageIndex]}
              alt="Carousel"
              initial={{ opacity: 0.2, x: direction === 1 ? 80 : -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.2, x: direction === 1 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: [0, 0.34, 1, 0.34] }}
            />
          </AnimatePresence>

          <AnimatePresence initial={false} mode="wait">
            {Description && Description.length > 0 && (
              <StyledText>{Description[imageIndex]}</StyledText>
            )}
          </AnimatePresence>

          <StyledBottomContainer>
            <Text
              $size="extra-large"
              $color="var(--cordis-white)"
              style={{ marginLeft: "2rem", marginBottom: "3rem" }}
            >
              Click the image for details
            </Text>
            <StyledButtonContainer
              style={{
                opacity: isFlipped ? 0 : 1,
                pointerEvents: isFlipped ? "none" : "auto",
              }}
            >
              <StyledButton onClick={showPrevImage}>
                <MoveLeft color="black" />
              </StyledButton>
              <StyledButton onClick={showNextImage}>
                <MoveRight color="black" />
              </StyledButton>
            </StyledButtonContainer>
          </StyledBottomContainer>
        </StyledCardFront>

        {/* Back Face - Room Details */}
        <StyledCardBack>
          {backContent || (
            <div>
              <h3>Room Details</h3>
              <p>Click to flip back</p>
            </div>
          )}
        </StyledCardBack>
      </StyledFlippableCard>
    </StyledCarouselContainer>
  );
}
