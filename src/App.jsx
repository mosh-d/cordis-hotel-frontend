import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import RootLayout from "./pages/RootLayouts/Root";
import ErrorPage from "./pages/Error";
import RoomsRootLayout from "./pages/RootLayouts/RoomsRoot";
import AvailableRoomsPage from "./pages/Rooms/AvailableRooms";
import RoomDetailsPage from "./pages/Rooms/RoomDetails";
import RoomBookingPage from "./pages/Booking/RoomBooking";
import AmenityBookingPage from "./pages/Booking/AmenityBooking";
import BookingConfirmationPage from "./pages/Booking/BookingConfirmation";
import AboutRootLayout from "./pages/RootLayouts/AboutRoot";
import ContactRootLayout from "./pages/RootLayouts/ContactRoot";
import BlogRootLayout from "./pages/RootLayouts/BlogRoot";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { 
          path: "about", 
          element: <AboutRootLayout />,
          children: [
            { index: true, element: <AboutPage /> },
            { path: "room-booking", element: <RoomBookingPage /> }
          ]
        },
        { 
          path: "contact", 
          element: <ContactRootLayout />,
          children: [
            { index: true, element: <ContactPage /> },
            { path: "room-booking", element: <RoomBookingPage /> }
          ]
        },
        { 
          path: "blog", 
          element: <BlogRootLayout />,
          children: [
            { index: true, element: <BlogPage /> },
            { path: "room-booking", element: <RoomBookingPage /> }
          ]
        },
        {
          path: "rooms",
          element: <RoomsRootLayout />,
          children: [
            { index: true, element: <AvailableRoomsPage /> },
            { path: "details/:roomIndex", element: <RoomDetailsPage /> },
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
