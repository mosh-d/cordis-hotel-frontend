import { Outlet, useLocation } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import FixedReserve from "../components/shared/FixedReserve";
import ScrollToTop from "../components/shared/ScrollToTop";
import { useState, useEffect } from "react";

function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
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
      {!isHome && <MainNavBar />}
      <Outlet context={{ setShowFixedReserve }} />
      {!isHome && <Footer />}
      {showFixedReserve && !isHome && <FixedReserve />}
    </>
  );
}

export default RootLayout;