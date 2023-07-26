import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/common/Hero";


import Home from "./components/pages/home/Home"



export default function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Home/>
      <Footer/>
    </div>
  );
}
