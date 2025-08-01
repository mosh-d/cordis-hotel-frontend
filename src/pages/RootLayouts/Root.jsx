import { Outlet, useLocation } from "react-router-dom";
import MainNavBar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import FixedReserve from "../../components/shared/FixedReserve";
import ScrollToTop from "../../components/shared/ScrollToTop";
import { useState, useEffect } from "react";

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
      {!isHome && !isBookingConfirmation && !isRoomBookingPage && !isAmenityBookingPage && <MainNavBar />}
      <Outlet context={{ setShowFixedReserve }} />
      {isAbout || isContact || isBlog ? <Footer /> : undefined}
      {showFixedReserve && isAbout || isContact || isBlog ? <FixedReserve /> : undefined}
    </>
  );
}

export default RootLayout;