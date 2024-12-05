import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./Fest-Components/Root/Root";
import FestMain from "./Fest-Components/FestMain";
import Hackathon from "./Fest-Components/Events/Hackathon";
import ProgrammingContest from "./Fest-Components/Events/ProgrammingContest";
import Fifa24 from "./Fest-Components/Events/Fifa24";
import PosterDesign from "./Fest-Components/Events/PosterDesign";
import Quiz from "./Fest-Components/Events/Quiz";
import IndoorGames from "./Fest-Components/Events/IndoorGames";
import Chess from "./Fest-Components/Events/Chess";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Fest-Components/ContactUs/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<><ScrollToTop/><FestMain/></>
      },
      {
        path:"/hackathon",
        element:<><ScrollToTop/><Hackathon/></>
      },
      {
        path:"/programming-contest",
        element:<><ScrollToTop/><ProgrammingContest/></>
      },
      {
        path:"/fifa24",
        element: <><ScrollToTop/><Fifa24/></>
      },
      {
        path:"/poster-design",
        element:<><ScrollToTop/><PosterDesign/></>
      },
      {
        path:"/quiz",
        element:<><ScrollToTop/><Quiz/></>
      },
      {
        path:"/indoor-games",
        element:<><ScrollToTop/><IndoorGames/></>
      },
      {
        path:"/chess",
        element:<><ScrollToTop/><Chess/></>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
