import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import RoomsRootLayout from "./pages/RoomsRoot";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "rooms", element: <RoomsRootLayout />, children: [] },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "blog", element: <BlogPage /> },
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
