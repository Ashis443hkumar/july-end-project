import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import "./style.css"

export default function Services() {
  return (
    <>
    <section className="about_dropdown_menu">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row >
        <Col lg={3}  >
         <div className="lift_sidemenu">
         <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Design </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="three">Degital Marketing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="four">IT CONSULTING SERVICES </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fiver">Devops</Nav.Link>
            </Nav.Item>
          </Nav>
         </div>
        </Col>
        <Col lg={9}  className="side_right_content">
          <Tab.Content>
            <Tab.Pane eventKey="first">
          
            <Row className="p-2">
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>User Experience Design</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>User Experience Design</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>User Experience Design</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>User Experience Design</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             
            </Row>  
         

            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Row className="">
              <Col lg={8} className="">
                <p>“AbyM Technology” is a leading IT and digital solution provider company that helps businesses grow and succeed in the online world.</p>
                <br/>
                <p>“AbyM” was founded in 2010 by a team of passionate and experienced IT professionals who wanted to create innovative and effective solutions for various industries. AbyM Technology has been providing high-quality and reliable services ever since, such as web development, app development, digital marketing, graphic design, content writing, and more. AbyM Technology has been the trusted partner of many clients across the globe, ranging from small startups to large corporations.</p>

                <div className="about_right_btn">
                  <button className="comp_btn">Know more about</button>
                  <button className="mx-3">Introduction</button>
                </div>

              </Col>
              <Col lg={4} className="">
                <img src="https://abym.in/assets/img/banner/brand-drop.png" className="w-100" alt="" />
              </Col>
            </Row>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

      </section>

    </>
  );
}
