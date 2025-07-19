import { Outlet, useLocation } from 'react-router-dom';
import MainNavBar from '../components/MainNavBar';
import Footer from '../components/Footer';

function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      {!isHome && <MainNavBar />}
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;