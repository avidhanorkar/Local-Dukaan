import React from 'react';
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Feature from './features.jsx'
import Category from './Category.jsx';
import Advantages from './/advantages.jsx';

function Homepage(){
    return(
        <>
          <Navbar />
          <Hero/>
          <Feature/>
          <Category/>
          <Advantages/>
        </>
    )
}
export default Homepage