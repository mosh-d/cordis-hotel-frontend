import { Outlet, useOutletContext } from "react-router-dom";

export default function ContactRootLayout() {
  // Get the context from parent RootLayout and pass it through
  const context = useOutletContext();
  
  return(
    <>
      <Outlet context={context} />
    </>
  )
}