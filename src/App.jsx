import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import RoomsRootLayout from "./pages/Rooms/RoomsRoot";
import AvailableRoomsPage from "./pages/Rooms/AvailableRooms";
import RoomDetailsPage from "./pages/Rooms/RoomDetails";
import RoomBookingPage from "./pages/RoomBooking";
import AmenityBookingPage from "./pages/AmenityBooking";
import BookingConfirmationPage from "./pages/BookingConfirmation";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "blog", element: <BlogPage /> },
        {
          path: "rooms",
          element: <RoomsRootLayout />,
          children: [
            { index: true, element: <AvailableRoomsPage /> },
            { path: "details", element: <RoomDetailsPage /> },
          ],
        },
        { path: "room-booking", element: <RoomBookingPage /> },
        { path: "amenity-booking", element: <AmenityBookingPage /> },
        { path: "booking-confirmation", element: <BookingConfirmationPage /> },
        // {path: '/blog/:id', element: <BlogPostPage />},
        // {path: '/blog/:id/edit', element: <BlogPostEditPage />},
      ],
    },
  ],
  {
    basename: "/cordis-hotel-frontend",
  }
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
