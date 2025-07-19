import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import BlogPage from './pages/Blog';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/about', element: <AboutPage />},
      {path: '/contact', element: <ContactPage />},
      {path: '/blog', element: <BlogPage />},
      // {path: '/blog/:id', element: <BlogPostPage />},
      // {path: '/blog/:id/edit', element: <BlogPostEditPage />},
    ]
  }
]);

function App() {
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}


export default App;