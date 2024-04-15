import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategoryPage from './Components/UserPage/CategorySelection.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <App />
      },
      {
        path: 'user',
        element: <CategoryPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
