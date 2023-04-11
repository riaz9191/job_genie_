import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blogs from "./components/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <error></error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/statistics", element: <Statistics />},
      { path: "/applied", element: <AppliedJobs/> },
      { path: "/blogs", element: <Blogs/> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);