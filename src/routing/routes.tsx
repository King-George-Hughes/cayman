import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import App from "../App";
import ContactUs from "../pages/ContactUs";

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
]);

export default router;
