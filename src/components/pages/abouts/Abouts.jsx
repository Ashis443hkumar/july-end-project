import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import "./style.css"

export default function Abouts() {
  return (
    <>
    <section className="about_dropdown_menu">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row >
        <Col lg={3}  >
         <div className="lift_sidemenu">
         <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Introduction</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Brond Stroy</Nav.Link>
            </Nav.Item>
          </Nav>
         </div>
        </Col>
        <Col lg={9}  className="side_right_content">
          <Tab.Content>
            <Tab.Pane eventKey="first">
          
            <Row className="py-5">
             <Col lg={8} className="pt-2">
                <p className="mb-5">AbyM Technology is your partner for IT and Branding-Promotion solutions. We help you build and grow your online presence with innovative solutions that fit your vision and goals. We deliver web design & development, app creation, and promotion with skill and flair.</p>
                <div className="pt-5">
                  <button className="comp_btn">Know more about</button>
                  <button className="mx-3">Introduction</button>
                </div>
             </Col>
             <Col lg={4} className="">
               <img src="https://abym.in/assets/img/banner/into-drop.png" className="w-100" alt="" />
             </Col>
            </Row>

            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <Row className="pt-5 pl-4">
              <Col lg={8} className="pt-2">
                <p>“AbyM Technology” is a leading IT and digital solution provider company that helps businesses grow and succeed in the online world.</p>
                <br/>
                <p>“AbyM” was founded in 2010 by a team of passionate and experienced IT professionals who wanted to create innovative and effective solutions for various industries. AbyM Technology has been providing high-quality and reliable services ever since, such as web development, app development, digital marketing, graphic design, content writing, and more. AbyM Technology has been the trusted partner of many clients across the globe, ranging from small startups to large corporations.</p>

                <div className="pt-5">
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
