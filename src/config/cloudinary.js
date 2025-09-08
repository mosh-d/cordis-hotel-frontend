import { Cloudinary } from '@cloudinary/url-gen';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import { fill } from '@cloudinary/url-gen/actions/resize';

// Create and configure your Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dan4iussn' // Replace with your actual cloud name from Cloudinary dashboard
  }
});

// Configuration object for easy access
export const CLOUDINARY_CONFIG = {
  cloudName: 'dan4iussn', // Replace with your actual cloud name
  
  // Common transformation presets
  presets: {
    thumbnail: { width: 150, height: 150, crop: 'fill' },
    card: { width: 400, height: 300, crop: 'fill' },
    hero: { width: 1920, height: 1080, crop: 'fill' },
    avatar: { width: 100, height: 100, crop: 'fill', gravity: 'face' }
  },
  
  // Quality settings
  quality: {
    low: 'auto:low',
    good: 'auto:good', 
    best: 'auto:best',
    auto: 'auto'
  },
  
  // Format settings
  formats: {
    auto: 'auto', // Automatically choose best format (WebP, AVIF, etc.)
    webp: 'webp',
    avif: 'avif',
    jpg: 'jpg',
    png: 'png'
  }
};

// Simple helper to get optimized Cloudinary URL (no forced dimensions)
export const getCloudinaryUrl = (publicId, options = {}) => {
  let image = cld.image(publicId);
  
  // Apply automatic optimizations (format and quality)
  image = image
    .delivery(quality(auto()))     // Auto quality optimization
    .delivery(format(autoFormat())); // Auto format (WebP/AVIF)
  
  // Only apply resize if dimensions are specifically provided
  if (options.width || options.height) {
    const { width, height, crop = 'fill' } = options;
    if (width && height) {
      image = image.resize(fill().width(width).height(height));
    } else if (width) {
      image = image.resize(fill().width(width));
    } else if (height) {
      image = image.resize(fill().height(height));
    }
  }
  
  return image.toURL();
};

// Helper to get optimized Cloudinary VIDEO URL
export const getCloudinaryVideoUrl = (publicId, options = {}) => {
  let video = cld.video(publicId);
  
  // Apply automatic optimizations (format and quality)
  video = video
    .delivery(quality(auto()))     // Auto quality optimization
    .delivery(format(autoFormat())); // Auto format optimization
  
  // Only apply resize if dimensions are specifically provided
  if (options.width || options.height) {
    const { width, height, crop = 'fill' } = options;
    if (width && height) {
      video = video.resize(fill().width(width).height(height));
    } else if (width) {
      video = video.resize(fill().width(width));
    } else if (height) {
      video = video.resize(fill().height(height));
    }
  }
  
  return video.toURL();
};

// Helper for background-image property in styled-components
export const cloudinaryBg = (publicId, options = {}) => {
  return `url("${getCloudinaryUrl(publicId, options)}")`;
};

// Helper for high-resolution displays (2x pixel density)
export const cloudinaryBgHiDPI = (publicId, options = {}) => {
  const normalUrl = getCloudinaryUrl(publicId, options);
  const hiDPIUrl = getCloudinaryUrl(publicId, { 
    ...options, 
    dpr: 2 // Device pixel ratio for retina displays
  });
  
  return `url("${normalUrl}"), url("${hiDPIUrl}") 2x`;
};