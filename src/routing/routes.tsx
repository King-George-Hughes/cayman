import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import App from "../App";
import ContactUs from "../pages/ContactUs";
import Packages from "../pages/Packages";

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
