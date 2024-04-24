import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategoryPage from './Components/UserPage/CategorySelection.jsx'
import DataCards from './Components/UserPage/Store/shop-category.jsx'
import PlaceOrder from './Components/UserPage/PlaceOrder.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import ShopCategory from './Components/UserPage/Store/shop-category.jsx'
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
        element: <CategoryPage />,
      },
      {
        path: '/PlaceOrder',
        element: <PlaceOrder />
      },
      {
        path: '/ShopSelection',
        element: <ShopCategory />
      }
    ]
  }
])

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-ognzzav3v80lh3vr.us.auth0.com"
    clientId="UyETfPujLFsJpHmCLUSq7Z95GLrB33dl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);