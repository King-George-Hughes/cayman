import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
