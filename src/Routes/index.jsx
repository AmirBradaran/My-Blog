import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // همون‌طور که قبلاً بود
import Home from "../Pages/Home";
import Header from "../Pages/Home/Header";
import Describe from "../Pages/Home/Describe";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home", 
        element: <Home />,
        children: [
          {
            path: "welcome", 
            element: <Header />,
          },
          {
            path: "describe", 
            element: <Describe />,
          },
        ],
      },
    ],
  },
]);

export default routes;
