import React from "react";
import { Container, Row,Col, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import "./style.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';



export default function About() {
  return (
    <>
    <div className="py-5 my-5 home_trusted_partner">
      <Container>
        <Row>
          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/1.png" className="w-100" alt=""/>
          </Col>
          <Col lg={6}>
            <h5 className="who_are">WHO WE ARE</h5>
            <h3>Trusted Partner for</h3>
            <h1>IT Industry</h1>
            <p>AbyM Technology is a certified and award winning IT company. We have been acclaimed for our IT work since 2010. We deliver the best IT solutions in Android, iOS, and web development.</p>
            <article>
              <div className="mt-1 pb-4 home_trusted_partner_decs">
              <Row>
                <Col lg={2}>
                  <img src="https://abym.in/assets/img/icon/certificate-icon.png" alt=""/>
                </Col>
                <Col lg={10}>
                  <h5>Certified Company</h5>
                  <p>Certified IT company with proven quality, security, speed. Best IT solutions for your business.</p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={2}>
                  <img src="https://abym.in/assets/img/icon/award-icon.png" alt=""/>
                </Col>
                <Col lg={10}>
                  <h5>Award Winning</h5>
                  <p>Certified IT company with proven quality, security, speed. Best IT solutions for your business.</p>
                </Col>
              </Row>
              </div>
              <Button className="hero_btn_border ">GET START</Button>
              <Button className="mx-4 hero_btn_outline">Know More</Button>

            </article>
          </Col>

        </Row>
      </Container>
    </div>

     {/* home_working_process */}
    <section className="home_working_process">
     <Container>
      <Heading totitle="PROCESS" title="Our Working Process" subtitle="As a website-building firm, we are constantly attempting to innovate and experiment with new layouts. Modernization is something we like. We can design an excellent website for you that is creative, appealing, informational, and efficient."  />
        <Row className="text-center py-0">
          <Col lg={12}>
         
            <img src="https://abym.in/assets/img/post/working-process.svg" className="w-100" alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    {/* home_partner_section */}
    <section className="home_partner_section">
      <Container>
      <Heading totitle="PARTNERS" title="Leverage our in-depth platform expertise and technology partnership" subtitle=""  />
        <Row>
        <Col lg={6}>
          <div className="home_partner">
            <div className="box_logo">
              <img src="https://abym.in/assets/img/icon/partner-icon2.svg" alt=""/>
            </div>
            <p>Benefit from our extensive platform expertise and valuable technology partnership with Microsoft. Our in-depth knowledge and collaboration with Microsoft allow us to deliver exceptional solutions tailored to your needs. Whether leveraging their cutting-edge technologies or accessing their resources, our partnership ensures that you receive the highest level of innovation and support.</p>
          </div>
        </Col>
        <Col lg={6}>
          <div className="home_partner">
            <div className="box_logo">
              <img src="https://abym.in/assets/img/icon/partner-icon1.svg" alt=""/>
            </div>
            <p>Benefit from our extensive platform expertise and valuable technology partnership with Microsoft. Our in-depth knowledge and collaboration with Microsoft allow us to deliver exceptional solutions tailored to your needs. Whether leveraging their cutting-edge technologies or accessing their resources, our partnership ensures that you receive the highest level of innovation and support.</p>
          </div>
        </Col>
        </Row>
      </Container>
    </section>


    <section className="specilalized bg-white ">
      <Container>
      {/* <Heading totitle="" title="" subtitle=""  /> */}
      <Heading totitle="WE ARE SPECIALIZED IN" title="We Integrate Technology and Ideas" subtitle="From custom web design to responsive development and SEO optimization, our team of skilled developers has you covered. Contact us today to take your online presence to the next level!"  />

        <Row >
          <Col lg={3}>
          <div className="specializes step_1">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>Design</h1>
            <p>We make designs that look good, work well, and feel right. We make your product easy and</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Col>
          <Col lg={3}>
          <div className="specializes step_2">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>Development</h1>
            <p>Vision + Skills = Stunning Solutions. Websites, Apps, and More. From Idea to Launch and Beyond.</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Col>
          <Col lg={3}>
          <div className="specializes step_3">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>Digital Marketing</h1>
            <p>Digital marketing services to help you grow your online business. We provide SEO solutions</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Col>
          <Col lg={3}>
          <div className="specializes step_4">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>IT Consultant Services</h1>
            <p>We help you with IT infrastructure, processes, solutions, and risks. Improve your IT</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Col>
        </Row>

        
        <Row className="mt-5 pt-4 mb-5">
          <Col lg={3}>
          <div className="specializes step_5">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>Design</h1>
            <p>We make designs that look good, work well, and feel right. We make your product easy and</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Col>
          <Col lg={3}>
          <div className="specializes step_6">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>Development</h1>
            <p>Vision + Skills = Stunning Solutions. Websites, Apps, and More. From Idea to Launch and Beyond.</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Col>
          <Col lg={3}>
          <div className="specializes step_7">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>Digital Marketing</h1>
            <p>Digital marketing services to help you grow your online business. We provide SEO solutions</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          </Col>
          <Col lg={3}>
          <div className="specializes step_8">
            <div className="speciallizes_img">
            <img src="https://abym.in/assets/img/icon/ser1.png" alt="" />
            </div>
            <h1>IT Consultant Services</h1>
            <p>We help you with IT infrastructure, processes, solutions, and risks. Improve your IT</p>
            <button className="special_btn_icons">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
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

      <section className="home_testimonial">
       <Container>
        
        <Row>
          <Col lg={6} className="pt-5 mt-5">
          <h4>TESTIMONIALS</h4>
          <h1>Check what our client <br/> Says about us</h1>

            <p>“I am really impressed with their work. Looking for a long professional relationship.”</p>
            <div className="testimonial_clinet_info ">
              <img src="https://abym.in/assets/img/post/testimonial/testimonials2.png" alt="" />
              <div className="ddddddd">
                <h2>Nisha yadav</h2>
                <span>Client of Company</span>
              </div>
              <button className="client_btn d-flex"><i class="fa-solid fa-arrow-right "></i> <span>Play</span> </button>
            </div>
          </Col>
          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/testimonial/testi-post2.png" className="w-100" alt=""/>
          </Col>
        </Row>
      </Container>
      </section>

      <section className="home_user_info">
       <Container>
        <Row>
          <Col lg={6} className="form_box ">
            <h2>ARE YOU PLANNING?</h2>
            <p>Get Estimation and technology suggestion from expert free of cost.</p>
          <Form className="mt-4">
           <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter Name" />
           </Form.Group>
           <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Mobile numbers" />
           </Form.Group>

           <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
           </Form.Group>
           <FloatingLabel
            controlId="floatingTextarea"
            label="Comments"
            className="mb-3 py-5"   >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <Button variant="primary" type="submit">
            Submit
          </Button>
         </Form>
        </Col>
          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/5.png" alt="" />
          </Col>
        </Row>
      </Container>

      </section>
    
      






    </>
  );
}
