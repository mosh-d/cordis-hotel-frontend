import React from "react";
import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { fill, scale, fit, crop } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { face } from '@cloudinary/url-gen/qualifiers/focusOn';
import styled from 'styled-components';

// Create Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'your-cloud-name' // Replace with your actual cloud name
  }
});

const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledAdvancedImage = styled(AdvancedImage)`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$objectFit || 'cover'};
  display: block;
`;

/**
 * CloudinaryImage - Optimized image component with automatic format/quality optimization
 * 
 * @param {string} publicId - Cloudinary public ID (e.g., "hotel/rooms/standard-1")
 * @param {number} width - Image width
 * @param {number} height - Image height  
 * @param {string} alt - Alt text for accessibility
 * @param {string} resizeMode - Resize mode: 'fill', 'fit', 'scale', 'crop'
 * @param {string} objectFit - CSS object-fit property
 * @param {boolean} lazy - Enable lazy loading
 * @param {boolean} responsive - Enable responsive images
 * @param {string} placeholderMode - Placeholder mode: 'blur', 'pixelate', 'vectorize'
 * @param {object} transformations - Additional Cloudinary transformations
 * @param {object} style - Additional CSS styles
 * @param {string} className - CSS class name
 */
export default function CloudinaryImage({
  publicId,
  width = 800,
  height = 600,
  alt = "Image",
  resizeMode = 'fill', // 'fill', 'fit', 'scale', 'crop'
  objectFit = 'cover',
  lazy = true,
  responsive = true,
  placeholderMode = 'blur', // 'blur', 'pixelate', 'vectorize'
  transformations = {},
  style = {},
  className = "",
  ...props
}) {
  // Safety check
  if (!publicId) {
    return (
      <div style={{ 
        width: width, 
        height: height, 
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        No image
      </div>
    );
  }

  // Create optimized image with transformations
  const createOptimizedImage = () => {
    let image = cld.image(publicId);

    // Apply resize mode
    switch (resizeMode) {
      case 'fill':
        image = image.resize(fill().width(width).height(height));
        break;
      case 'fit':
        image = image.resize(fit().width(width).height(height));
        break;
      case 'scale':
        image = image.resize(scale().width(width).height(height));
        break;
      case 'crop':
        image = image.resize(crop().width(width).height(height).gravity(focusOn(face())));
        break;
      default:
        image = image.resize(fill().width(width).height(height));
    }

    // Apply automatic optimizations
    image = image
      .delivery(quality(auto())) // Auto quality optimization
      .delivery(format(autoFormat())); // Auto format (WebP/AVIF)

    // Apply custom transformations if provided
    if (Object.keys(transformations).length > 0) {
      // You can extend this to handle more complex transformations
      console.log('Custom transformations:', transformations);
    }

    return image;
  };

  // Configure plugins
  const plugins = [];
  
  if (lazy) {
    plugins.push(lazyload());
  }
  
  if (responsive) {
    plugins.push(responsive({ steps: 200 }));
  }
  
  if (placeholderMode) {
    plugins.push(placeholder({ mode: placeholderMode }));
  }

  return (
    <StyledImageContainer className={className} style={style}>
      <StyledAdvancedImage
        cldImg={createOptimizedImage()}
        plugins={plugins}
        alt={alt}
        $objectFit={objectFit}
        {...props}
      />
    </StyledImageContainer>
  );
}

// Export some common preset configurations
export const CloudinaryImagePresets = {
  // Hero image - large, high quality
  hero: {
    width: 1920,
    height: 1080,
    resizeMode: 'fill',
    objectFit: 'cover',
    lazy: false, // Don't lazy load hero images
    responsive: true,
    placeholderMode: 'blur'
  },
  
  // Card image - medium size, optimized
  card: {
    width: 400,
    height: 300,
    resizeMode: 'fill',
    objectFit: 'cover',
    lazy: true,
    responsive: true,
    placeholderMode: 'blur'
  },
  
  // Thumbnail - small, fast loading
  thumbnail: {
    width: 150,
    height: 150,
    resizeMode: 'crop',
    objectFit: 'cover',
    lazy: true,
    responsive: false,
    placeholderMode: 'pixelate'
  },
  
  // Avatar - square, face-focused
  avatar: {
    width: 100,
    height: 100,
    resizeMode: 'crop',
    objectFit: 'cover',
    lazy: true,
    responsive: false,
    placeholderMode: 'blur'
  }
};