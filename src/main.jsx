import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Portfolio from "./components/Portfolio";
import RootLayout from "./routes/RootLayout";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/header", element: <Header /> },
      {
        path: "/about",
        element: <AboutMe />,
      },
      {
        path: "/contact",
        element: <ContactMe />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
