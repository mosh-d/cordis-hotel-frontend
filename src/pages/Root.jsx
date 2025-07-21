import { Outlet, useLocation } from "react-router-dom";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import FixedReserve from "../components/shared/FixedReserve";
import { useState } from "react";

function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showFixedReserve, setShowFixedReserve] = useState(false);
  return (
    <>
      {!isHome && <MainNavBar />}
      <Outlet context={{ setShowFixedReserve }} />
      <Footer />
      {showFixedReserve && <FixedReserve />}
    </>
  );
}

export default RootLayout;