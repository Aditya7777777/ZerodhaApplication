import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './LandingPage/home/HomePage';
import AboutPage from './LandingPage/about/AboutPage'
import Signup from './LandingPage/signup/Signup'
import ProductPage from './LandingPage/products/ProductPage'
import PricingPage from './LandingPage/pricing/PricingPage';
import SupportPage from'./LandingPage/support/SupportPage'
import Navbar from './LandingPage/Navbar';
import Footer from './LandingPage/Footer';
import NotFound from './NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/about' element={<AboutPage/>}></Route>
    <Route path='/product' element={<ProductPage/>}></Route>
    <Route path='/pricing' element={<PricingPage/>}></Route>
    <Route path='/support' element={<SupportPage/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

