import React,{useState} from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {NavLink} from "react-router-dom"

import "./style.css"


function Header() {

  const [fix, setFix] = useState(false)
  
  function setfixed(){
    if(window.scrollY >= 202){
      setFix(true)
    }else{
      setFix(false)
    }
  }
 
  window.addEventListener("scroll", setfixed)
  return (
     <>
     <Navbar expand="lg" className={fix ? "header fixed": "header"} >
      <Container>
        <Navbar.Brand href="#">Abym technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 navigation"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/abouts">Abouts </NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/products">Products</NavLink>
          </Nav>
          <Button className="header_btn">Contact Us</Button>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </>
  );
}

export default Header;