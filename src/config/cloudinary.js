import { Cloudinary } from "@cloudinary/url-gen";
import { quality, format, dpr } from "@cloudinary/url-gen/actions/delivery";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as autoFormat } from "@cloudinary/url-gen/qualifiers/format";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { sharpen } from "@cloudinary/url-gen/actions/adjust";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { face } from "@cloudinary/url-gen/qualifiers/focusOn";

// Create and configure your Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: "dan4iussn", // Replace with your actual cloud name from Cloudinary dashboard
  },
});

// Configuration object for easy access
export const CLOUDINARY_CONFIG = {
  cloudName: "dan4iussn", // Replace with your actual cloud name

  // Common transformation presets
  presets: {
    thumbnail: { width: 150, height: 150, crop: "fill" },
    card: { width: 400, height: 300, crop: "fill" },
    hero: { width: 1920, height: 1080, crop: "fill" },
    avatar: { width: 100, height: 100, crop: "fill", gravity: "face" },
  },

  // Quality settings
  quality: {
    low: "auto:low",
    good: "auto:good",
    best: "auto:best",
    auto: "auto",
  },

  // Format settings
  formats: {
    auto: "auto", // Automatically choose best format (WebP, AVIF, etc.)
    webp: "webp",
    avif: "avif",
    jpg: "jpg",
    png: "png",
  },
};

// Simple helper to get optimized Cloudinary URL (no forced dimensions)
export const getCloudinaryUrl = (publicId, options = {}) => {
  let image = cld.image(publicId);

  // Apply automatic optimizations (format and quality)
  image = image
    .delivery(quality(auto())) // Auto quality optimization
    .delivery(format(autoFormat())) // Auto format (WebP/AVIF)
    .delivery(dpr("auto")); // Auto device pixel ratio for retina displays

  // Add Cloudinary's built-in progressive loading (using addFlag)
  if (options.progressive !== false) {
    image = image.addFlag('progressive');
  }

  // Add subtle sharpening for better clarity (optional)
  if (options.sharpen !== false) {
    image = image.adjust(sharpen());
  }

  // Only apply resize if dimensions are specifically provided
  if (options.width || options.height) {
    const { width, height, crop = "fill", gravity } = options;
    if (width && height) {
      let resizeTransform = fill().width(width).height(height);
      if (gravity === "face") {
        resizeTransform = resizeTransform.gravity(focusOn(face()));
      }
      image = image.resize(resizeTransform);
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
    .delivery(quality(auto())) // Auto quality optimization
    .delivery(format(autoFormat())); // Auto format optimization

  // Only apply resize if dimensions are specifically provided
  if (options.width || options.height) {
    const { width, height, crop = "fill" } = options;
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
    dpr: 2, // Device pixel ratio for retina displays
  });

  return `url("${normalUrl}"), url("${hiDPIUrl}") 2x`;
};

// Enhanced helper with more optimization options
export const getOptimizedCloudinaryUrl = (publicId, options = {}) => {
  const {
    width,
    height,
    crop = "fill",
    quality: qualityLevel = "auto",
    format: formatType = "auto",
    sharpen: shouldSharpen = true,
    gravity,
    blur,
    brightness,
    contrast,
    saturation,
  } = options;

  let image = cld.image(publicId);

  // Core optimizations
  image = image
    .delivery(quality(qualityLevel === "auto" ? auto() : qualityLevel))
    .delivery(format(formatType === "auto" ? autoFormat() : formatType))
    .delivery(dpr("auto"));

  // Resize if dimensions provided
  if (width || height) {
    let resizeTransform = fill();
    if (width) resizeTransform = resizeTransform.width(width);
    if (height) resizeTransform = resizeTransform.height(height);
    if (gravity === "face")
      resizeTransform = resizeTransform.gravity(focusOn(face()));
    image = image.resize(resizeTransform);
  }

  // Enhancement adjustments
  if (shouldSharpen) image = image.adjust(sharpen());
  if (blur) image = image.adjust(blur(blur));
  if (brightness) image = image.adjust(brightness(brightness));
  if (contrast) image = image.adjust(contrast(contrast));
  if (saturation) image = image.adjust(saturation(saturation));

  return image.toURL();
};

/* 
=== OPTIMIZATION EXAMPLES & USAGE NOTES ===

Current Automatic Optimizations Applied:
- q_auto: Automatic quality optimization (30-50% size reduction)
- f_auto: Automatic format selection (WebP, AVIF when supported - up to 80% smaller)
- dpr_auto: Automatic device pixel ratio for retina displays
- Subtle sharpening for better image clarity

=== USAGE EXAMPLES ===

// 1. Room Images (High Quality Hero Images)
getOptimizedCloudinaryUrl('cordis/standard-room-1', {
  width: 800,
  height: 600,
  quality: 'auto:good', // Higher quality for important images
  sharpen: true
});

// 2. Thumbnails (Optimized for Speed)
getOptimizedCloudinaryUrl('cordis/standard-room-1', {
  width: 300,
  height: 200,
  quality: 'auto:low', // Lower quality for thumbnails
  sharpen: true
});

// 3. Portrait Images with Face Detection
getOptimizedCloudinaryUrl('cordis/staff-photo', {
  width: 400,
  height: 400,
  gravity: 'face', // Smart crop focusing on faces
  sharpen: true
});

// 4. Background Images with Effects
getOptimizedCloudinaryUrl('cordis/hero-bg', {
  width: 1920,
  height: 1080,
  brightness: 10,    // Slightly brighter
  contrast: 5,       // More contrast
  saturation: -10    // Slightly desaturated
});

// 5. Blurred Background Images
getOptimizedCloudinaryUrl('cordis/room-bg', {
  width: 1200,
  height: 800,
  blur: 300,         // Blur effect for backgrounds
  brightness: -20    // Darker for text overlay
});

// 6. Progressive Loading URLs
const progressiveUrls = getProgressiveUrls('cordis/hero-image', {
  width: 1200,
  height: 800
});
// Returns: { tiny, low, medium, high } URLs for progressive loading

=== PERFORMANCE BENEFITS ===
- 30-80% smaller file sizes with modern formats
- Automatic retina support without manual 2x images
- Better image clarity with subtle sharpening
- Smart cropping for better composition
- Adaptive quality based on content and context
- CDN delivery for global performance

=== PROGRESSIVE LOADING HELPER ===
// Generate multiple quality URLs for progressive loading
export const getProgressiveUrls = (publicId, options = {}) => {
  const { width = 800, height = 600 } = options;
  
  return {
    tiny: getCloudinaryUrl(publicId, {
      width: Math.max(width * 0.05, 20),
      height: Math.max(height * 0.05, 20),
      quality: 'auto:low'
    }),
    low: getCloudinaryUrl(publicId, {
      width: width * 0.3,
      height: height * 0.3,
      quality: 'auto:low'
    }),
    medium: getCloudinaryUrl(publicId, {
      width: width * 0.6,
      height: height * 0.6,
      quality: 'auto'
    }),
    high: getCloudinaryUrl(publicId, {
      width,
      height,
      quality: 'auto:good'
    })
  };
};

=== QUALITY LEVELS ===
- 'auto:low' - Best for thumbnails, icons (smallest files)
- 'auto' - Balanced quality/size (default)
- 'auto:good' - Higher quality for hero images
- 'auto:best' - Maximum quality for critical images

=== FORMAT PRIORITY ===
1. AVIF (newest, smallest, best quality)
2. WebP (widely supported, great compression)
3. JPEG/PNG (fallback for older browsers)

*/
