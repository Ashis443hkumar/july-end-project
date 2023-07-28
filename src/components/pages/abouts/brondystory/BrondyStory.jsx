import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Heading from "../../../common/Heading";
import "./style.css";

export default function BrondyStory() {
  return (
    <div>

     <section className="brodyStory_hero">
      <Container>
        <Row>
          <Col lg={6} className="text-center">
            <img src="https://abym.in/assets/img/banner/into-drop.png" alt=""/>
          </Col>
          <Col lg={6}>
            <h4>The Story</h4>
            <h1>Behind Our Brand</h1>
            <p>IT and digital passion meet online business success. Innovation, excellence, and customer delight are our core values</p>
          </Col>
        </Row>
      </Container>
      </section>

      <section className="abc py-4">
      <Container>
        <Row>
          <Col lg={4}>
            <img src="https://abym.in/assets/img/team/brand-profile.png" className="w-100" alt=""/>
          </Col>
          <Col lg={8}>
            <h3>OUR BRAND STORY</h3>
            <p>“AbyM Technology” is a leading IT and digital solution provider company that helps businesses grow and succeed in the online world.</p>

            <p>“AbyM” was founded in 2010 by a team of passionate and experienced IT professionals who wanted to create innovative and effective solutions for various industries. AbyM Technology has been providing high-quality and reliable services ever since, such as web development, app development, digital marketing, graphic design, content writing, and more. AbyM Technology has been the trusted partner of many clients across the globe, ranging from small startups to large corporations.</p>

            <p>The “AbyM Technology” has been delivering outstanding results and exceeding expectations with its cutting-edge technology, creative ideas, and customer-centric approach. AbyM Technology has been the industry’s standard for IT and digital solutions. AbyM Technology is more than just an IT and digital solution provider company; it is a vision, a mission, and a value. AbyM Technology’s vision is to empower businesses with the best IT and digital solutions that can help them achieve their goals and dreams.</p>
          </Col>
        </Row>
      </Container>
      </section>

      <section className="abc">
      <Container>
        <Heading title="Mission Values" subtitle="We love words and design. We craft beautiful and effective messages for you. We set the standards in our industry." />
        <Row >
          <Col lg={10} className="mx-auto">
            <img src="https://abym.in/assets/img/post/mission-value.png" className="w-100" alt=""/>
          </Col>
        </Row>
      </Container>
      </section>
      


    
    </div>
  );
}
