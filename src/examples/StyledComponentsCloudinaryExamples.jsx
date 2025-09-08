import React from 'react';
import styled from 'styled-components';
import { createOptimizedImageUrl, getCloudinaryBackgroundUrl, getResponsiveBackgroundUrls } from '../config/cloudinary';

// Example 1: Simple room card with Cloudinary background
const StyledRoomCard = styled.div`
  width: 400px;
  height: 300px;
  background-image: ${props => getCloudinaryBackgroundUrl(props.$imageId, {
    width: 400,
    height: 300,
    crop: 'fill'
  })};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledRoomCardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  padding: 20px;
  border-radius: 0 0 8px 8px;
`;

// Example 2: Hero section with responsive backgrounds
const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  // Mobile background
  background-image: ${props => `url("${props.$backgroundUrls.mobile}")`};
  
  // Tablet background
  @media (min-width: 768px) {
    background-image: ${props => `url("${props.$backgroundUrls.tablet}")`};
  }
  
  // Desktop background
  @media (min-width: 1200px) {
    background-image: ${props => `url("${props.$backgroundUrls.desktop}")`};
  }
  
  // Large screens background
  @media (min-width: 1920px) {
    background-image: ${props => `url("${props.$backgroundUrls.large}")`};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const StyledHeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 600px;
  }
`;

// Example 3: Image gallery with multiple Cloudinary images
const StyledGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const StyledGalleryItem = styled.div`
  height: 250px;
  background-image: ${props => getCloudinaryBackgroundUrl(props.$imageId, {
    width: 400,
    height: 250,
    crop: 'fill'
  })};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
`;

// Example 4: Room section background (like your current booking page)
const StyledBookingSummary = styled.div`
  background-image: ${props => getCloudinaryBackgroundUrl(props.$backgroundId, {
    width: 800,
    height: 1200,
    crop: 'fill'
  })};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  padding: 4.8rem;
  gap: 4.8rem;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 4.8rem 6rem;
  }
`;

// Usage Examples Component
export default function StyledComponentsCloudinaryExamples() {
  // Get responsive background URLs for hero
  const heroBackgroundUrls = getResponsiveBackgroundUrls('cordis-hotel/hero/main-lobby');
  
  // Sample room data with Cloudinary IDs
  const rooms = [
    { id: 1, name: 'Standard Room', imageId: 'cordis-hotel/rooms/standard/bedroom-view' },
    { id: 2, name: 'Executive Suite', imageId: 'cordis-hotel/rooms/executive/suite-living' },
    { id: 3, name: 'Deluxe Room', imageId: 'cordis-hotel/rooms/deluxe/panoramic-view' }
  ];
  
  const galleryImages = [
    'cordis-hotel/amenities/pool-area',
    'cordis-hotel/amenities/spa-treatment',
    'cordis-hotel/amenities/gym-equipment',
    'cordis-hotel/dining/restaurant-interior',
    'cordis-hotel/lobby/reception-area',
    'cordis-hotel/exterior/building-night'
  ];

  return (
    <div>
      {/* Hero Section with Responsive Backgrounds */}
      <StyledHeroSection $backgroundUrls={heroBackgroundUrls}>
        <StyledHeroContent>
          <h1>Welcome to Cordis Hotel</h1>
          <p>Experience luxury and comfort in the heart of Lagos</p>
        </StyledHeroContent>
      </StyledHeroSection>

      {/* Room Cards */}
      <div style={{ padding: '40px 20px' }}>
        <h2>Our Rooms</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {rooms.map(room => (
            <StyledRoomCard key={room.id} $imageId={room.imageId}>
              <StyledRoomCardOverlay>
                <h3>{room.name}</h3>
                <p>Click to view details</p>
              </StyledRoomCardOverlay>
            </StyledRoomCard>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div>
        <h2 style={{ textAlign: 'center', padding: '20px' }}>Hotel Gallery</h2>
        <StyledGalleryGrid>
          {galleryImages.map((imageId, index) => (
            <StyledGalleryItem key={index} $imageId={imageId} />
          ))}
        </StyledGalleryGrid>
      </div>

      {/* Booking Summary (like your current design) */}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div style={{ width: '55%', padding: '40px' }}>
          <h2>Booking Form</h2>
          <p>Your booking form content here...</p>
        </div>
        
        <StyledBookingSummary $backgroundId="cordis-hotel/booking/summary-background">
          <div style={{ color: 'white' }}>
            <h2>Reservation Summary</h2>
            <p>Your booking details here...</p>
          </div>
        </StyledBookingSummary>
      </div>
    </div>
  );
}

// Helper component for easy room background usage
export function RoomWithBackground({ room, children }) {
  return (
    <StyledRoomCard $imageId={room.cloudinaryId}>
      {children}
    </StyledRoomCard>
  );
}

// Helper for updating your existing booking page
export function BookingSummaryWithCloudinary({ backgroundImageId, children }) {
  return (
    <StyledBookingSummary $backgroundId={backgroundImageId}>
      {children}
    </StyledBookingSummary>
  );
}