import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { Link as RouterLink } from "react-router-dom";
import { media } from "../../util/breakpoints";
import { cloudinaryBg } from "../../config/cloudinary";

//images
import Exterior1 from "../../assets/cordis-exterior/CORDIS-EXTERIOR-1.jpg";
import Exterior2 from "../../assets/cordis-exterior/CORDIS-EXTERIOR-2.jpg";
import Exterior3 from "../../assets/cordis-exterior/CORDIS-EXTERIOR-3.jpg";
import Exterior4 from "../../assets/cordis-exterior/CORDIS-EXTERIOR-4.jpg";

const StyledHotelExteriorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6rem;
  padding: 15rem 6rem;

  ${media.mobile} {
    padding: 12rem 2rem;
  }
`;

const StyledHotelExteriorTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

const StyledHotelExteriorImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-align: start;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledHotelExteriorImage = styled.img`
  width: 27%;
  flex-shrink: 0;
  height: 30vw;
  object-fit: cover;

  ${media.tablet} {
    min-height: 30rem;
    width: 35%;
  }
`;

const StyledHotelExteriorButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTextImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

const CustomScrollbarContainer = styled.div`
  position: relative;
  width: 40%;
  height: 0.2rem;
  background: var(--cordis-gray);
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CustomScrollbarThumb = styled.div`
  position: absolute;
  height: 200%;
  background: var(--cordis-black);
  left: 0;
  transition: background 0.2s;
  cursor: grab;
`;

export default function HotelExterior() {
  const imageWrapperRef = useRef(null);
  const [thumbWidth, setThumbWidth] = useState(60);
  const [thumbLeft, setThumbLeft] = useState(0);

  // Update thumb size and position
  const updateThumb = () => {
    const el = imageWrapperRef.current;
    if (!el) return;
    const visible = el.clientWidth;
    const total = el.scrollWidth;
    const scrollLeft = el.scrollLeft;
    const containerWidth = 0.4 * el.parentElement.clientWidth; // match CustomScrollbarContainer width
    const thumbW = Math.max((visible / total) * containerWidth, 40);
    const thumbL = (scrollLeft / (total - visible)) * (containerWidth - thumbW);
    setThumbWidth(thumbW);
    setThumbLeft(thumbL || 0);
  };

  useEffect(() => {
    updateThumb();
    const el = imageWrapperRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    return () => {
      el.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  // Drag to scroll
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  const onThumbMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = imageWrapperRef.current.scrollLeft;
    document.addEventListener("mousemove", onThumbMouseMove);
    document.addEventListener("mouseup", onThumbMouseUp);
  };

  const onThumbMouseMove = (e) => {
    if (!isDragging.current) return;
    const el = imageWrapperRef.current;
    const containerWidth = 0.7 * el.parentElement.clientWidth;
    const deltaX = e.clientX - dragStartX.current;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const maxThumbMove = containerWidth - thumbWidth;
    const scrollDelta = (deltaX / maxThumbMove) * maxScroll;
    el.scrollLeft = dragStartScroll.current + scrollDelta;
  };

  const onThumbMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", onThumbMouseMove);
    document.removeEventListener("mouseup", onThumbMouseUp);
  };

  return (
    <StyledHotelExteriorSection>
      <StyledTextImageWrapper>
        <StyledHotelExteriorTextWrapper>
          <Text $type="h1" $color="var(--cordis-black)" $weight="bold">
            Hotel Exterior
          </Text>
          <Text $color="var(--cordis-black)">
            Experience the striking architecture and welcoming ambiance of
            Cordis Hotel. Our elegant exterior blends modern design with
            timeless charm, inviting you to begin your unforgettable stay from
            the moment you arrive.
          </Text>
        </StyledHotelExteriorTextWrapper>
        <StyledHotelExteriorImageWrapper ref={imageWrapperRef}>
          <StyledHotelExteriorImage src={Exterior1} alt="Hotel Exterior" />
          <StyledHotelExteriorImage src={Exterior2} alt="Hotel Exterior" />
          <StyledHotelExteriorImage src={Exterior3} alt="Hotel Exterior" />
          <StyledHotelExteriorImage src={Exterior4} alt="Hotel Exterior" />
        </StyledHotelExteriorImageWrapper>
      </StyledTextImageWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <StyledHotelExteriorButtonWrapper>
          <RouterLink to="/room-booking">
            <Button $type="emphasis2">
              <Text $weight="regular" $size="medium">
                Reserve
              </Text>
            </Button>
          </RouterLink>
        </StyledHotelExteriorButtonWrapper>
        <CustomScrollbarContainer
          onClick={(e) => {
            const el = imageWrapperRef.current;
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const containerWidth = e.currentTarget.offsetWidth;
            const percent = clickX / containerWidth;
            el.scrollLeft = percent * (el.scrollWidth - el.clientWidth);
          }}
        >
          <CustomScrollbarThumb
            style={{ width: thumbWidth, left: thumbLeft }}
            onMouseDown={onThumbMouseDown}
          />
        </CustomScrollbarContainer>
      </div>
    </StyledHotelExteriorSection>
  );
}
