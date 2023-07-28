import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Heading from "../../common/Heading";
import "./style.css";

export default function Intoduction() {
  return (
     <>
     <article> 
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
      

      <section className="home_client">
       <Container>
        <Heading totitle="CLIENTS" title="Our Esteemed Clients" subtitle="We take pride in working for brands having remarkable identity" />
        <Row>
          <Col lg={3}><img src="https://abym.in/assets/img/client-logo/1.png" alt=""/></Col>
          <Col lg={3}><img src="https://abym.in/assets/img/client-logo/2.png" alt=""/></Col>
          <Col lg={3}><img src="https://abym.in/assets/img/client-logo/3.png" alt=""/></Col>
          <Col lg={3}><img src="https://abym.in/assets/img/client-logo/4.png" alt=""/></Col>
        </Row>
      </Container>
      </section>

      <section className="abc py-5">
       <Container>
        <Row>
          <Col lg={6} className="text-center">
            <img src="https://abym.in/assets/img/post/career-img1.png" className="" alt=""/>
            <p className="p-2 py-3">AbyM Technology is a first-class IT and digital marketing company that has been impressing clients from various industries for over a decade. We offer a range of services, such as web development, app development, SEO, social media marketing, content marketing, graphic design, and more. We use the latest technologies and best practices to create solutions that are effective, efficient, and engaging.</p>
            <button className="comp_btn">
              Know More
            </button>
          </Col>
          <Col lg={6}>
            <h3>Join the</h3>
            <h1>AbyM Technology Team!</h1>
            <p>Are you a fan of IT and digital marketing? Do you have a flair for creating and delivering stunning solutions for different clients? Do you want to be part of a team that is fun, smart, and supportive? If you nodded yes, then AbyM Technology is your ideal company!.</p>
          <img src="https://abym.in/assets/img/post/career-img2.png" className="w-100" alt=""/>
          </Col>
        </Row>
      </Container>
      </section>
      
      
      </article>
    

      <article>
      <section className="abc">
      <Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
      </section>
      
      </article>

    </>
  );
}
