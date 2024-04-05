import {BrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hero from './Components/hero.jsx'
import Navbar from './Components/navbar.jsx'
import Feature from './Components/features.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Hero />
    <Feature />
  </BrowserRouter>
)
