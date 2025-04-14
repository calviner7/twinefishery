import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import "./locales/i18n"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "@routes/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Error !</div>,
  },
  {
    path: "/sign-up",
    element: <div>sign up</div>,
    errorElement: <div>Error !</div>,
  },
  {
    path: "/login",
    element: <div>login</div>,
    errorElement: <div>Error!</div>,
  },
  {
    path: "/login/:loginId",
    element: <div>login with id</div>,
    errorElement: <div>Error!</div>,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
