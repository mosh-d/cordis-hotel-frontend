import Room from "../shared/Room";
import styled from "styled-components";
import Text from "../shared/Text";
import { media } from "../../util/breakpoints";

const RoomText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const StyledRoomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  padding: 15rem 12rem;

  ${media.desktop} {
    padding: 15rem 4rem;
  }

  ${media.tablet} {
    padding: 15rem 4rem;
  }

  ${media.mobile} {
    padding: 12rem 1rem;
  }
`;

const StyledRooms = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 4rem;
  -webkit-overflow-scrolling: touch;
  
  & > * {
    min-width: calc(50% - 0.5rem);

    ${media.tablet} {
      min-width: 90%;
    }
  }
  display: flex;
  flex-direction: row;
  gap: 1rem;

  /* Standard scrollbar styling */
  &::-webkit-scrollbar {
    width: .1rem;
    height: .5rem;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--cordis-light-gray);
    height: .5rem;
    /* border-radius: .4rem; */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--cordis-text-color);
    height: .5rem;
    /* border-radius: .4rem; */
    
    &:hover {
      background-color: var(--cordis-black);
      cursor: grab;
    }
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  /* iOS Safari specific fixes */
  ${media.mobile} {
    /* Force scrollbar to be visible on iOS */
    &::-webkit-scrollbar {
      height: 1rem;
      -webkit-appearance: none;
    }
    
    &::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.1);
      height: 1rem;
      border-radius: .5rem;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--cordis-text-color);
      height: 1rem;
      border-radius: .5rem;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    
    /* Alternative: Add scroll indicators */
    position: relative;
    
    &::after {
      content: "← Scroll for more →";
      position: absolute;
      bottom: 0;
      right: 1rem;
      font-size: 1.2rem;
      color: var(--cordis-gray);
      pointer-events: none;
      opacity: 0.7;
    }
  }
`;

const StyledRoomContainer = styled.div`

`;

export default function RoomSection() {
  return (
    <>
      <StyledRoomSection>
        <RoomText>
          <Text $type="h1" $weight="bold" $color="var(--cordis-black)">
            Our Rooms
          </Text>
          <Text $type="p" $size="large" $weight="light">
            Click the images for availability details
          </Text>
        </RoomText>

        <StyledRooms>
          <StyledRoomContainer>
            <Room imageType="budget" headerText="Budget" buttonText="Reserve" flippable={true} />
          </StyledRoomContainer>
          <StyledRoomContainer>
            <Room imageType="diplomatic" headerText="Diplomatic" buttonText="Reserve" flippable={true} />
          </StyledRoomContainer>
          <StyledRoomContainer>
            <Room imageType="diplomatic" headerText="Diplomatic" buttonText="Reserve" flippable={true} />
          </StyledRoomContainer>
        </StyledRooms>
      </StyledRoomSection>
    </>
  );
}
