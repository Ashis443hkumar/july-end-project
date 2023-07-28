import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import "./style.css"
import Serve from "./Serve"

export default function Services() {
  return (
    <>
    <Serve/>
    <section className="about_dropdown_menu">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row >
        <Col lg={3}  >
        <div className="lift_sidemenu">
           <h3>Our Services</h3>
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
              <Nav.Link eventKey="five">Devops</Nav.Link>
            </Nav.Item>
          </Nav>
         </div>
        </Col>
        <Col lg={9}  className="side_right_content">
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <Row  className="side_content_text p-2">
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
           <Row className="side_content_text">
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>Development & Operations</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>Mobile App Development</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>CRM Development</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>Software / Custom Development</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             </Row>
             <Row className="side_content_text mt-3">
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>Development & Operations</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>Mobile App Development</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>CRM Development</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
             <Col lg={3} className="">
               <img src="https://abym.in/assets/img/icon/service_ico4.png" alt=""/>
               <h5>Software / Custom Development</h5>
               <p>Discovery & Application AssessmentBusiness Rules MiningRe-Platform ServicesMigration Services</p>
             </Col>
            </Row>
           </Tab.Pane>

            <Tab.Pane eventKey="three">
            <Row className="side_content_text">
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

            <Tab.Pane eventKey="four">
            <Row className="side_content_text">
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

            <Tab.Pane eventKey="five">
            <Row className="side_content_text">
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

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

      </section>

    </>
  );
}
