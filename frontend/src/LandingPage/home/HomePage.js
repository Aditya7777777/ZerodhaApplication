import React from 'react';
import Awards from "./Awards"
import Education from './Education'
import Hero from './Hero'
import Stats from './Stats'
import Pricing from './Pricing'
import Navbar from '../Navbar'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;