// This page will wrap all the room related pages .ie. room availability, room details.etc.
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";

export default function RoomsRootLayout() {
  const location = useLocation();

  return (
    <>
      <Outlet />
      <Footer $type="default" />
    </>
  );
}
