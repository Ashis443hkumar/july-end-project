import React,{useState} from "react";
import { Container, Row,Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


export default function Hero() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


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
          <h5>Empowering</h5>
          <h1>User <br/> Statifaction</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum pharetra augue mollis interdu.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/10/06/05/19/couple-1718244_640.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel_caption">
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1400628256/photo/paris-silhouette-of-couple-kissing-near-eiffel-tower.webp?b=1&s=612x612&w=0&k=20&c=5nXLDv77PLWmNMoWkWGB24sAK4aYlqQC01TZd42iEzA="
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      {/* <section className="protfolio_hero">
      <Container>
        <Row>
          <Col lg={6} className="portfolio_hero_content">
            <h4>Boost Your Business with</h4>
            <h1>Innovative <br/> Solutions</h1>
            <hr/>
            <p>We are “AbyM Technology”, a company that provides IT and digital promotion services. We create stunning solutions for your needs. Trust us, we know what we’re doing!</p>
          </Col>
          <Col lg={6}>
            <img src="https://cdn.pixabay.com/photo/2015/10/31/12/00/meeting-1015313_640.jpg" alt="" />
          </Col>
        </Row>
      </Container>
      </section> */}

    </div>
  );
}