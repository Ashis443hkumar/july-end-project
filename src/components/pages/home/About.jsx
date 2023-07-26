import React from "react";
import { Container, Row,Col, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import "./style.css"

export default function About() {
  return (
    <>
    <div className="py-5 my-5">
      <Container>
        <Row>
          <Col lg={6}>
            <img src="https://cdn.pixabay.com/photo/2015/10/31/12/00/meeting-1015313_640.jpg" className="w-100" alt=""/>
          </Col>
          <Col lg={6}>
            <h6  className="">WHO WE ARE</h6>
            <h3>Trusted Partner for</h3>
            <h1>IT Industry</h1>
            <p>AbyM Technology is a certified and award winning IT company. We have been acclaimed for our IT work since 2010. We deliver the best IT solutions in Android, iOS, and web development.</p>
            <article>
              <div className="mt-5 pb-5">
              <Row>
                <Col lg={3}>
                  <img src="https://abym.in/assets/img/icon/certificate-icon.png" className="" style={{width:"120px", height:"90px"}} alt=""/>
                </Col>
                <Col lg={9}>
                  <h4>Certified Company</h4>
                  <p>Certified IT company with proven quality, security, speed. Best IT solutions for your business.</p>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={3}>
                  <img src="https://abym.in/assets/img/icon/award-icon.png"  className="" style={{width:"120px", height:"90px"}} alt=""/>
                </Col>
                <Col lg={9}>
                  <h4>Award Winning</h4>
                  <p>Certified IT company with proven quality, security, speed. Best IT solutions for your business.</p>
                </Col>
              </Row>
              </div>
              <Button className="bg-success ">Get Start</Button>
              <Button className="mx-4">Know More</Button>

            </article>
          </Col>

        </Row>
      </Container>
    </div>

    <section>
    <Container>
      {/* <Heading totitle="" title="" subtitle=""  /> */}
      <Heading totitle="PROCESS" title="Our Working Process" subtitle="As a website-building firm, we are constantly attempting to innovate and experiment with new layouts. Modernization is something we like. We can design an excellent website for you that is creative, appealing, informational, and efficient."  />
        <Row className="text-center py-0">
          <Col lg={12}>
         
            <img src="https://abym.in/assets/img/post/working-process.svg" className="w-100" alt="" />
          </Col>
        </Row>
      </Container>

    </section>

    <section>
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


    <section>
      <Container>
      {/* <Heading totitle="" title="" subtitle=""  /> */}
      <Heading totitle="WE ARE SPECIALIZED IN" title="We Integrate Technology and Ideas" subtitle="From custom web design to responsive development and SEO optimization, our team of skilled developers has you covered. Contact us today to take your online presence to the next level!"  />

        <Row>
          <Col lg={3}>
          <div className="specializes">
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
          <div className="specializes">
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
          <div className="specializes">
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
          <div className="specializes">
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
          

          <Col lg={4}></Col>
        </Row>
      </Container>
    </section>



    </>
  );
}
