import React from "react";
import { Container, Row,Col } from "react-bootstrap";


export default function Hero() {
  return (
    <div>
      <section className="protfolio_hero1">
      <Container>
        <Row>
          <Col lg={7} className="portfolio_hero_content">
            <h4>Our Portfolio</h4>
            <h1>See our <br/> amazing work</h1>
            <hr/>
            <p>We are “AbyM Technology”, a company that provides IT and digital promotion services. We create stunning solutions for your needs. Trust us, we know what we’re doing!</p>
          </Col>
          <Col lg={5} className="p-5 pt-0">
            <img src="https://abym.in/assets/img/post/portfolio-banner-img.png" className="w-100" alt="" />
          </Col>
        </Row>
      </Container>
      </section>

    </div>
  );
}
