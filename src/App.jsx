import React from 'react'
import Navbar from './Components/navbar'
import { Outlet } from 'react-router-dom'
import './index.css'
function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
    </>
  )
}

export default App