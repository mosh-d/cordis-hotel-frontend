import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useImagePreloader } from "../../hooks/useImagePreloader";

const StyledButton = styled.button`
  background-color: var(--cordis-black);
  border: none;
  border-radius: 50%;
  padding: 1rem;
  margin: 2rem;
  opacity: 70%;

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

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 3rem;

  z-index: 100;
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
`;

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
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

export default function Carousel({
  ImageUrls,
  Description = [],
  onIndexChange,
}) {
  // All hooks must be called at the top, before any conditional returns
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  function showPrevImage() {
    setDirection(-1);
    // Delay the index change until next render cycle
    setTimeout(() => {
      const newIndex = imageIndex === 0 ? ImageUrls.length - 1 : imageIndex - 1;
      setImageIndex(newIndex);
      if (onIndexChange) onIndexChange(newIndex);
    }, 0);
  }

  function showNextImage() {
    setDirection(1);
    // Delay the index change until next render cycle
    setTimeout(() => {
      const newIndex = imageIndex === ImageUrls.length - 1 ? 0 : imageIndex + 1;
      setImageIndex(newIndex);
      if (onIndexChange) onIndexChange(newIndex);
    }, 0);
  }

  return (
    <StyledCarousel>
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

      <StyledButtonContainer>
        <StyledButton onClick={showPrevImage}>
          <MoveLeft color="white" />
        </StyledButton>
        <StyledButton onClick={showNextImage}>
          <MoveRight color="white" />
        </StyledButton>
      </StyledButtonContainer>
    </StyledCarousel>
  );
}
