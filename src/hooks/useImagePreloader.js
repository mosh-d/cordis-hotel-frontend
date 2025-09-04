import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true);
      setLoadingProgress(100);
      return;
    }

    let loadedImages = 0;
    const totalImages = imageUrls.length;
    setLoadedCount(0);
    setLoadingProgress(0);
    setImagesLoaded(false);

    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          const progress = Math.round((loadedImages / totalImages) * 100);
          setLoadingProgress(progress);
          
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          resolve(img);
        };
        img.onerror = (error) => {
          console.warn(`Failed to preload image: ${src}`, error);
          loadedImages++;
          setLoadedCount(loadedImages);
          const progress = Math.round((loadedImages / totalImages) * 100);
          setLoadingProgress(progress);
          
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          resolve(null); // Resolve even on error to continue loading other images
        };
        img.src = src;
      });
    };

    // Preload all images
    Promise.all(imageUrls.map(preloadImage))
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Still allow carousel to work even if some images fail
      });

  }, [imageUrls]);

  return { 
    imagesLoaded, 
    loadedCount, 
    totalImages: imageUrls?.length || 0,
    loadingProgress 
  };
};