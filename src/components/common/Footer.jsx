import React from "react";
import "./style.css"
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div>

      

      <section className="footer">
      <div className="">
        <Container>
          <Row  className="mx-auto">
            <Col lg={11} className="bbb mx-auto">
            <div className="dc ">
              <h3>GET A FREE CONSULTATION FROM EXPERTS</h3>
              <p>Professional service for your software solutions</p>
            </div>
            <div className="ddc">
              <button className="btn_1">Get Status</button>
              <button className="btn_2">Call Us</button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
      
        <Container>
          <Row>
            <Col lg={2}>
              <h4>Company Info</h4>
              <ul>
                <li>Abouts</li>
                <li>Introduction</li>
                <li>Brand Story</li>
              </ul>
            </Col>
            <Col lg={3}>
              <h4>Our Services</h4>
              <ul>
                <li>Design</li>
                <li>Development</li>
                <li>Digital Marketing</li>
                <li>IT Consulting Services</li>
                <li>DevOps</li>
                <li>Resources</li>
                <li>Content Writing</li>
                <li>Server Support</li>
                <li>Industries</li>
              </ul>
            </Col>
            <Col lg={3}>
              <h4>Industries</h4>
              <ul>
                <li>Healthcare</li>
                <li>eCommerce</li>
                <li>Education</li>
                <li>Wellness</li>
                <li>Tour & Travel</li>
                <li>Skill Development</li>
                <li>Entertainment / Media</li>
                <li>Games</li>
              </ul>
            </Col>
            <Col lg={2}>
              <h4>Portfolio</h4>
              <ul>
                <li>Lal Path Labs</li>
                <li>Oncquest Labs</li>
                <li>Admissify</li>
                <li>HSBP Salon</li>
                <li>GO Contest</li>
                <li>VCare</li>
                <li>Divine Beauty</li>
                <li>Holisol</li>
              </ul>
            </Col>
            <Col lg={2}>
              <h4>Others</h4>
              <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer_bottom">
        <Container>
          <Row>
            <Col lg={6}>
              <p>Copyright © 2023 AbyM. Full stack mobile (iOS, Android) and web app design and development agency</p>
            </Col>
            <Col lg={6}>
              <div className="footer_bottom_right">
                <span>Terms of Use </span>
                <span className="px-5"> Privacy Policy</span>
              </div>
            </Col>

          </Row>
        </Container>

      </footer>


    </div>
  );
}
