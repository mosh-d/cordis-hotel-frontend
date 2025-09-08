import React from 'react';
import styled from 'styled-components';
import { cloudinaryBg } from '../config/cloudinary';

// Example 1: Keep your existing flexbox/percentage layout
const StyledHeroSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  
  /* Just replace the URL - keep everything else the same! */
  background-image: ${cloudinaryBg('cordis-hotel/hero/main-lobby')};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// Example 2: Your existing booking summary layout
const StyledBookingSummary = styled.div`
  /* Keep your exact same layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45%;
  padding: 4.8rem;
  gap: 4.8rem;
  
  /* Just replace the background-image */
  background-image: ${cloudinaryBg('cordis-hotel/booking/summary-background')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 4.8rem 6rem;
  }
`;

// Example 3: Dynamic image with props (keep your existing CSS)
const StyledRoomCard = styled.div`
  /* Your existing flexbox layout */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  
  /* Dynamic Cloudinary background */
  background-image: ${props => cloudinaryBg(props.$imageId)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Keep all your existing responsive styles */
  @media (max-width: 768px) {
    height: 250px;
  }
`;

// Example 4: Grid layout with percentages (unchanged)
const StyledRoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  width: 100%;
`;

const StyledRoomItem = styled.div`
  /* Keep your percentage-based sizing */
  width: 100%;
  aspect-ratio: 4/3; /* Modern CSS aspect ratio */
  border-radius: 8px;
  
  /* Just the Cloudinary URL */
  background-image: ${props => cloudinaryBg(props.$imageId)};
  background-size: cover;
  background-position: center;
`;

// Example 5: Your existing carousel container (unchanged layout)
const StyledCarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const StyledCarouselImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  /* Dynamic Cloudinary background */
  background-image: ${props => cloudinaryBg(props.$imageId)};
  background-size: cover;
  background-position: center;
`;

// Usage Examples
export default function SimpleCloudinaryExamples() {
  const rooms = [
    { id: 1, name: 'Standard Room', imageId: 'cordis-hotel/rooms/standard/bedroom' },
    { id: 2, name: 'Executive Suite', imageId: 'cordis-hotel/rooms/executive/suite' },
    { id: 3, name: 'Deluxe Room', imageId: 'cordis-hotel/rooms/deluxe/panoramic' }
  ];

  return (
    <div>
      {/* Hero - keeps your exact layout */}
      <StyledHeroSection>
        <h1>Welcome to Cordis Hotel</h1>
        <p>Your existing content here</p>
      </StyledHeroSection>

      {/* Room Grid - keeps your exact layout */}
      <StyledRoomGrid>
        {rooms.map(room => (
          <StyledRoomItem key={room.id} $imageId={room.imageId}>
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.5)', color: 'white' }}>
              <h3>{room.name}</h3>
            </div>
          </StyledRoomItem>
        ))}
      </StyledRoomGrid>

      {/* Booking Summary - keeps your exact layout */}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <div style={{ width: '55%', padding: '6rem' }}>
          <h2>Booking Form</h2>
        </div>
        <StyledBookingSummary>
          <h2 style={{ color: 'white' }}>Reservation Summary</h2>
        </StyledBookingSummary>
      </div>
    </div>
  );
}

// How to update your existing components:

// BEFORE:
// background-image: url(${Booking1});

// AFTER:
// background-image: ${cloudinaryBg('cordis-hotel/booking/summary-bg')};

// That's it! Keep everything else exactly the same.