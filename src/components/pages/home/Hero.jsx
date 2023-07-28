import React,{useState} from "react";
import { Container, Row,Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


export default function Hero() {

  return (
    <div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365_640.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption_caousel">
          <h5>Empowering 1</h5>
          <h1>User <br/> Statifaction</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum pharetra augue mollis interdu.</p>
          <br/>
          <button className="comp_btn">Consult Our Team <i class="fa-solid fa-arrow-right"></i></button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_640.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption_caousel">
          <h5>Empowering 2</h5>
          <h1>User <br/> Statifaction</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum pharetra augue mollis interdu.</p>
          <br/>
          <button className="comp_btn">Consult Our Team <i class="fa-solid fa-arrow-right"></i></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1400628256/photo/paris-silhouette-of-couple-kissing-near-eiffel-tower.webp?b=1&s=612x612&w=0&k=20&c=5nXLDv77PLWmNMoWkWGB24sAK4aYlqQC01TZd42iEzA="
          alt="Third slide"
        />
         <Carousel.Caption className="caption_caousel">
          <h5>Empowering 3</h5>
          <h1>User <br/> Statifaction</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum pharetra augue mollis interdu.</p>
          <br/>
          <button className="comp_btn">Consult Our Team <i class="fa-solid fa-arrow-right"></i> </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

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
  );
}