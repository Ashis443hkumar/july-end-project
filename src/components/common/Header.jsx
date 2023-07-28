import React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {NavLink} from "react-router-dom"

import "./style.css"


function Header() {
  return (
     <>
     <section className="">
     <Navbar expand="lg" className="header" >
      <Container>
        <Navbar.Brand href="#">Abym technology</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/abouts">Abouts </NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/products">Products</NavLink>
          </Nav>
          <Button className="px-5 py-2">Contact</Button>
      
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </section>
     </>
  );
}

export default Header;