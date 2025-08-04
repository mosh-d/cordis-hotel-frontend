import { Outlet, useLocation } from "react-router-dom";
import MainNavBar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import FixedReserve from "../../components/shared/FixedReserve";
import ScrollToTop from "../../components/shared/ScrollToTop";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { media } from "../../util/breakpoints";

const StyledNavBar1 = styled.div`

${media.mobile} {
  display: none;
}
`;

const StyledNavBar2 = styled.div`
  display: none;

  ${media.mobile} {
    display: block;
  }
`;

function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";
  const isBlog = location.pathname === "/blog";
  const isBookingConfirmation = location.pathname === "/booking-confirmation";
  const isRoomBookingPage = location.pathname.endsWith("/room-booking");
  const isAmenityBookingPage = location.pathname === "/amenity-booking";
  const [showFixedReserve, setShowFixedReserve] = useState(!isHome);
  
  // Update FixedReserve visibility when route changes
  useEffect(() => {
    if (!isHome) {
      setShowFixedReserve(true);
    }
  }, [isHome]);
  
  return (
    <>
      <ScrollToTop />
        {!isHome && !isBookingConfirmation && !isRoomBookingPage && !isAmenityBookingPage && (
        <>
          <StyledNavBar1>
            <MainNavBar />
          </StyledNavBar1>
          <StyledNavBar2>
            <MainNavBar $type="mobile" /> 
          </StyledNavBar2>
        </>
      )}
      <Outlet context={{ setShowFixedReserve }} />
      {isAbout || isContact || isBlog ? <Footer /> : undefined}
      {showFixedReserve && isAbout || isContact || isBlog ? <FixedReserve /> : undefined}
    </>
  );
}

export default RootLayout;