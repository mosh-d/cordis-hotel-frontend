// This page will wrap all the room related pages .ie. room availability, room details.etc.
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

export default function RoomsRootLayout() {
  return (
    <>
      <Outlet />
      <Footer $type="default" />
    </>
  );
}
