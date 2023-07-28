import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Heading from "../../common/Heading";
import "./style.css";

export default function Intoduction() {
  return (
    <div>
      <section>
      <Container className="py-5">
        <Row>
          <Col lg={4}>
            <h1>Who We Are?</h1>
          </Col>
          <Col lg={8} className="border py-4 px-3">
            <p>AbyM Technology is your partner for IT and Branding-Promotion solutions. We help you build and grow your online presence with innovative solutions that fit your vision and goals. We deliver web design & development, app creation, and promotion with skill and flair.</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={5}>
            <h1>  What We Do Best?</h1>
          </Col>
          <Col lg={7}  className="border py-4 px-3">
            <p>At AbyM Technology, we offer software and digital marketing solutions that boost your online presence and grow your business. Whether you need web design, SEO, social media, or content marketing, we have the skills and experience to deliver results. Contact us today and let’s work together!</p>
          </Col>
        </Row>
      </Container>
      </section>

      <section className="">
      <Container>
        <Heading title="Work Life At Its Best" subtitle="With the utmost priority of adding value to the projects we undertake, we ensure that our partners stay ahead of the clutter and achieve excellence." />
        <Row>
          <Col lg={3}><img src="https://abym.in/assets/img/post/work-life-left.png" className="w-100"  alt=""/></Col>
          <Col lg={6}><img src="https://abym.in/assets/img/post/work-life-center.png" className="w-100 h-75"  alt=""/></Col>
          <Col lg={3}><img src="https://abym.in/assets/img/post/work-life-right.png" className="w-100"  alt=""/></Col>
        </Row>
      </Container>
      </section>
      

      <section className="ourCore_value">
      <Container>
      
        <Row>
          <Col lg={6} className="p-4 px-5">
           <img src="https://abym.in/assets/img/post/1.png" className="w-100"  alt=""/>
          </Col>
          <Col lg={6} className="intro_work">
            <div className="work_info">
             <h3><img src="https://abym.in/assets/img/icon/corevalue1.png" alt=""/> Ensure impactful innovations</h3>
             <p>An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</p>
            </div>
            <div className="work_info">
             <h3><img src="https://abym.in/assets/img/icon/corevalue1.png" alt=""/> Ensure impactful innovations</h3>
             <p>An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</p>
            </div>
            <div className="work_info">
             <h3><img src="https://abym.in/assets/img/icon/corevalue1.png" alt=""/> Ensure impactful innovations</h3>
             <p>An unwavering commitment to drive maximum customer satisfaction, infused with integrity and passion.</p>
            </div>
            
          </Col>

        
        </Row>
      </Container>
      </section>
      
      
      
    

    </div>
  );
}
