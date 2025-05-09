import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Header from "../Pages/Home/Header";
import Describe from "../Pages/Home/Describe";
import Portfolio from "../Pages/Portfolio";
import Sites from "../Pages/Portfolio/Sites";
import WorkProcess from "../Pages/WorkProcess";
import HaveProject from "../Pages/HaveProject";
import Questions from "../Pages/Questions";
import ContactUs from "../Component/Footer/ContactUs";
import { Navigate } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/:lang",
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
      {
        path: "workProcess",
        element: <WorkProcess />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
        children: [
          {
            path: "site",
            element: <Sites />,
          },
        ],
      },
      {
        path: "haveProject",
        element: <HaveProject />,
      },
      {
        path: "questions",
        element: <Questions />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/en/home" />,
  },
]);

export default routes;
