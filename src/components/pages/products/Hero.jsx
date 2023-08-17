import React from "react";
import { Container, Row,Col } from "react-bootstrap";

import "./style.css"

export default function Hero() {
  return (
    <div>
      <section className="protfolio_hero1  products_hero2 ">
      <Container>
        <Row>
          <Col lg={6} className="portfolio_hero_content">
            <h4>Boost Your Business with</h4>
            <h1>Innovative  <br/> Solutions</h1>
            <hr/>
            <p>You deserve the best. That’s why we offer you smart, customized, and effective solutions to meet your needs. Whether you want to grow your online presence, optimize your website, or reach new customers, we have the right tools for you.</p>
          </Col>
          <Col lg={6} className="product_img p-5 pt-0">
            <img src="https://abym.in/assets/img/banner/product-ban-img.png" className="" alt="" />
          </Col>
        </Row>
      </Container>
      </section>

    </div>
  );
}
