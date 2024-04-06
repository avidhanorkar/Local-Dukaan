import React from 'react';
import Navbar from './navbar.jsx'
import Hero from './hero.jsx'
import Feature from './features.jsx'
import Category from './Category.jsx';
import Advantages from './/advantages.jsx';
import User from './user-page/user.jsx';

function Homepage(){
    return(
        <>
          <Navbar />
          <User />
        </>
    )
}
export default Homepage