import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <section>
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
    </div>
  );
}
