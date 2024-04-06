import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SellPage from './Components/sellpage'
import App from "./App";
import Homepage from "./Components/homepage";
const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
  },
  {
    path: "/user",
    element: <Homepage/>
  },
  {
    path:"/sell",
    element: <SellPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>,
)