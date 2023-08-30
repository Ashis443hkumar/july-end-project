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
          src="https://abym.in/assets/img/banner/banner3.png"
          alt="First slide"
        />
        <Carousel.Caption className="caption_caousel">
          <h5>Empowering </h5>
          <h1>User  Statifaction</h1>
          <p>Our innovative technology and creative expertise empower us to transform your vision
						into a tangible solution.</p>
          <br/>
          <button className="hero_btn_outline">Consult Our Team <i class="fa-solid fa-arrow-right"></i></button>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://abym.in/assets/img/banner/banner2.png"
          alt="Second slide"
        />
        <Carousel.Caption className="caption_caousel">
          <h5>Transforming</h5>
          <h1>Coustomer <br/> Engagement</h1>
          <p>Our innovative technology and creative expertise empower us to transform your vision
						into a tangible solution.</p>
          <br/>
          <button className="comp_btn">Consult Our Team <i class="fa-solid fa-arrow-right"></i></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://abym.in/assets/img/banner/banner1.png"
          alt="Third slide"
        />
         <Carousel.Caption className="caption_caousel">
           
						
							
          <h5>Redefining</h5>
          <h1>User <br/> Expriences</h1>
          <p>Our innovative technology and creative expertise empower us to transform your vision
						into a tangible solution.</p>
          <br/>
          <button className="comp_btn">Consult Our Team <i class="fa-solid fa-arrow-right"></i> </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="hero_bottom_content">
      <Container>
        <Row>
          <Col lg={4} md={4} sm={6} xs={12}>
            <h1>500+</h1>
            <p>Mobile Apps</p>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <h1>1000+</h1>
            <p>Websites</p>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <h1>100%</h1>
            <p>Happy Clients</p>
          </Col>
        </Row>
      </Container>
      </div>

     

    </div>
  );
}