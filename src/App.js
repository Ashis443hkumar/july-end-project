import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/common/Hero";

import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/home/Home"
import Portfolio from "./components/pages/portfolios/Portfolio"
import Products from "./components/pages/products/Products"





export default function App() {
  return (
    <div>
      <Header/>
      {/* <Hero/> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/products" element={<Products/>}/>


      </Routes>
      {/* <Home/> */}
      <Footer/>
    </div>
  );
}
