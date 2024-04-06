import React from 'react';
import Navbar from './Components/navbar.jsx'
import Hero from './Components/hero.jsx'
import Feature from './Components/features.jsx'
import Category from './Components/Category.jsx';
import Advantages from './Components/advantages.jsx';
import { Outlet } from 'react-router-dom'
import './index.css'
function App() {
  return (
    <>
          <Navbar />
          <Hero/>
          <Feature/>
          <Category/>
          <Advantages/>

      <Outlet />
    </>
  )
}

export default App