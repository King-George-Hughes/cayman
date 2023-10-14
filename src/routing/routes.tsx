import { createBrowserRouter, useLocation } from "react-router-dom";
import About from "../pages/About";
import App from "../App";
import ContactUs from "../pages/ContactUs";
import Packages from "../pages/Packages";
import { useEffect } from "react";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/packages",
    element: <Packages />,
  },
]);

export default router;
