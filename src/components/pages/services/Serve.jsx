
import React from "react";
import { Container, Row,Col } from "react-bootstrap";
// import "./style.css";

export default function Serve() {
  return (
    <div>
      <section className="abc bg-secondary">
      <Container>
        <Row>
          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/design-post.png" className="w-100" alt=""/>
          </Col>
          <Col lg={6}>
            <h4>WHAT WE OFFER</h4>
            <h2>OUR APPROACH TO IT SERVICES IN YOUR FIELD</h2>
            <p>Our IT services are customized to fit your unique situation and objectives, so you can enjoy the best outcomes and benefits.</p>

          </Col>
        </Row>
      </Container>
      </section>


      <section className="abc my-5">
      <Container>
        <Row>
          <Col lg={6}>
            <h4>DESIGN</h4>
            <h5>Stunning Visual Designs that Boost Your Conversion Rate</h5>
            <p>We make designs that look good, work well, and feel right. We make your product easy and delightful to use. Logo, landing page, UI/UX design - we do it all.</p>

            <h4>We Bring Your Ideas and Designs to Life</h4>
            <div className="dd mt-4">
              <span>UI/UX Design</span>
              <span className="px-5 mx-5"><img  className="px-5" src="https://abym.in/assets/img/icon/explore-black.png" alt=""/></span>
            </div>
            <div className="dd my-4">
              <span>UI/UX Design</span>
              <span className="mx-5 px-5"><img  className="px-5" src="https://abym.in/assets/img/icon/explore-black.png" alt=""/></span>
            </div>
            <div className="dd">
              <span>UI/UX Design</span>
              <span className="px-5 mx-5"><img  className="px-5" src="https://abym.in/assets/img/icon/explore-black.png" alt=""/></span>
            </div>
            


          </Col>

          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/design-post.png" className="w-100" alt=""/>
          </Col>
        </Row>
      </Container>
      </section>

      

      
      
    

    </div>
  );
}
