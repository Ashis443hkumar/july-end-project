import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Heading from "../../common/Heading";
import Hero from "./Hero";
import "./style.css"

export default function Products() {
  return (
    <div className="products">
      <Hero/>
      <section>
      <Container>
        <Heading  title="M-Commerce" subtitle="We value your projects and help you stand out from the crowd. Our partners achieve excellence with our cutting-edge solutions." />
        <Row>
          <Col lg={4}>
           <div className="ecommerce_head">
            <img src="https://abym.in/assets/img/icon/work-life-ico1.png" alt="" />
            <h3>Mobile retargeting</h3>
            <p>Reach out to potential customers who have shown interest in your app or website</p>
           </div>

           <div className="ecommerce_head">
            <img src="https://abym.in/assets/img/icon/work-life-ico3.png" alt="" />
            <h3>Mobile SEO</h3>
            <p>Optimize your app or website for mobile devices and rank higher on search engines</p>
           </div>

           <div className="ecommerce_head">
            <img src="https://abym.in/assets/img/icon/work-life-ico5.png" alt="" />
            <h3>Mobile ticketing</h3>
            <p>Simplify the ticketing process with mobile solutions</p>
           </div>
          </Col>

          <Col lg={4} className="">
            <div className="ecom_bg_img">
              <img src="https://abym.in/assets/img/post/work-life.png" className="" alt=""/>
            </div>
          </Col>

          <Col lg={4}>
           <div className="ecommerce_head">
            <img src="https://abym.in/assets/img/icon/work-life-ico1.png" alt="" />
            <h3>Augmented reality (AR)</h3>
            <p>Enhance customer experience with immersive and interactive AR features</p>
           </div>

           <div className="ecommerce_head">
            <img src="https://abym.in/assets/img/icon/work-life-ico4.png" alt="" />
            <h3>Mobile banking</h3>
            <p>Provide secure and convenient banking services on mobile devices</p>
           </div>

           <div className="ecommerce_head">
            <img src="https://abym.in/assets/img/icon/work-life-ico6.png" alt="" />
            <h3>AI, chatbots</h3>
            <p>Automate customer service and marketing with AI-powered chatbots</p>
           </div>

          </Col>
        </Row>
      </Container>
      </section>


      <section className="mt-5">
      <Container>
        <Row>
          <Col lg={6}>
            <h1>Examples and benefits of social CRM</h1>
            <ul>
              <li><i class="fa-solid fa-check"></i> Get real-time feedback and market data by tracking your brand’s online conversations.</li>
              <li><i class="fa-solid fa-check"></i> Share your ideas for new or improved products on social media and influence our innovation process.</li>
              <li><i class="fa-solid fa-check"></i> Monitor your brand’s online reputation and respond to customer queries and complaints promptly.</li>

              <li><i class="fa-solid fa-check"></i> Discover new opportunities and trends by engaging with your social media followers and influencers.</li>
            </ul>
          </Col>
          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/crm.png" className="w-100" alt=""/>
          </Col>
        </Row>
      </Container>
      </section>

      <section>
      <Container>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
        </Row>
      </Container>
      </section>


       
    

    </div>
  );
}
