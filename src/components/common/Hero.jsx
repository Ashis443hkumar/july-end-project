import React from "react";
import "./style.css"
import { Container, Row,Col } from "react-bootstrap";


export default function Hero() {
  return (
     <>
      <div className="hero">
        <div className="hero_content">
        <h1>hello hero</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio excepturi architecto accusamus!</p>
        <button>Prev</button>
        <button>Next</button>
      </div>

      <div className="hero_bottom_content">
      <Container>
        <Row>
          <Col lg={4}>
            <h1>500+</h1>
            <p>Mobile Apps</p>
          </Col>
          <Col lg={4}>
            <h1>1000+</h1>
            <p>Websites</p>
          </Col>
          <Col lg={4}>
            <h1>100%</h1>
            <p>Happy Clients</p>
          </Col>
        </Row>
      </Container>
      </div>

    </div>
     </>
  );
}
