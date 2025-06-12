import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./locales/i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/routes/Home";
import RootLayout from "layouts/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 🔥 Use RootLayout here
    errorElement: <div>Error !</div>,
    children: [
      {
        index: true, // means "/"
        element: <Home />,
      },
      // {
      //   path: "products",
      //   element: <Products />,
      // },
      // {
      //   path: "login",
      //   element: <div>Login</div>,
      // },
      // {
      //   path: "login/:loginId",
      //   element: <div>Login with ID</div>,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
