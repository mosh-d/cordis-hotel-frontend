import { Outlet, useLocation } from 'react-router-dom';
import MainNavBar from '../components/MainNavBar';

function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      {!isHome && <MainNavBar />}
      <Outlet />
    </>
  );
}

export default RootLayout;