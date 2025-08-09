// This page will wrap all the room related pages .ie. room availability, room details.etc.
import { Outlet, useOutletContext } from "react-router-dom";
import Footer from "../../components/Footer";

export default function RoomsRootLayout() {
  // Get the context from parent RootLayout and pass it through
  const context = useOutletContext();
  
  return (
    <>
      <Outlet context={context} />
      <Footer $type="default" />
    </>
  );
}
