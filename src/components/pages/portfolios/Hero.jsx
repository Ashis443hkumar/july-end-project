import React from "react";
import { Container, Row,Col } from "react-bootstrap";

export default function Hero() {
  return (
    <div>
      <section className="protfolio_hero">
      <Container>
        <Row>
          <Col lg={6} className="portfolio_hero_content">
            <h4>Our Portfolio</h4>
            <h1>See our <br/> amazing work</h1>
            <hr/>
            <p>We are “AbyM Technology”, a company that provides IT and digital promotion services. We create stunning solutions for your needs. Trust us, we know what we’re doing!</p>
          </Col>
          <Col lg={6}>
            <img src="https://cdn.pixabay.com/photo/2015/10/31/12/00/meeting-1015313_640.jpg" alt="" />
          </Col>
        </Row>
      </Container>
      </section>

    </div>
  );
}
