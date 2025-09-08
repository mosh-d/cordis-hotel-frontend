import React, { useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Create Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'your-cloud-name' // Replace with your actual cloud name
  }
});

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
`;

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledCloudinaryImage = styled(AdvancedImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const StyledText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default function CloudinaryCarousel({
  imageIds, // Array of Cloudinary public IDs
  Description = [],
  onIndexChange,
  width = 800,
  height = 600,
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Call onIndexChange on mount to set initial index
  useEffect(() => {
    if (onIndexChange) onIndexChange(0);
  }, [onIndexChange]);

  // Safety check for imageIds
  if (!imageIds || imageIds.length === 0) {
    return (
      <div style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'var(--cordis-light-gray)',
        color: 'var(--cordis-text-color)'
      }}>
        No images available
      </div>
    );
  }

  // Create optimized Cloudinary image with transformations
  const createOptimizedImage = (publicId) => {
    return cld.image(publicId)
      .delivery(quality(auto()))           // Auto quality optimization
      .delivery(format(autoFormat()))      // Auto format (WebP/AVIF)
      .resize(fill().width(width).height(height)); // Responsive resize
  };

  function showPrevImage() {
    setDirection(-1);
    const newIndex = imageIndex === 0 ? imageIds.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
    if (onIndexChange) onIndexChange(newIndex);
  }

  function showNextImage() {
    setDirection(1);
    const newIndex = imageIndex === imageIds.length - 1 ? 0 : imageIndex + 1;
    setImageIndex(newIndex);
    if (onIndexChange) onIndexChange(newIndex);
  }

  return (
    <StyledCarousel>
      <AnimatePresence initial={false} mode="wait">
        <StyledImageContainer
          key={imageIds[imageIndex]}
          initial={{ opacity: 0.2, x: direction === 1 ? 80 : -80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0.2, x: direction === 1 ? -100 : 100 }}
          transition={{ duration: 0.4, ease: [0, 0.34, 1, 0.34] }}
        >
          <StyledCloudinaryImage
            cldImg={createOptimizedImage(imageIds[imageIndex])}
            plugins={[
              lazyload(),                    // Lazy loading
              responsive({ steps: 200 }),    // Responsive images
              placeholder({ mode: 'blur' })  // Blur placeholder
            ]}
            alt={`Carousel image ${imageIndex + 1}`}
          />
        </StyledImageContainer>
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