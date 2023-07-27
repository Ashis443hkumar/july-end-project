import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Heading from "../../common/Heading";
import Hero from "./Hero";
import "./style.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Products() {
  return (
    <div className="products">
      <Hero/>

      <section className="mt-5 pt-5 bg-white">
      <Container>
        <Row>
          <Col lg={6}>
            <h1>E-Commerce</h1>
            <p className="py-4">Launch your online store on web, Android, and iOS platforms. Make your products accessible to your customers with just a few taps. We have the expertise to create.</p>
            <button>CONSULT OUR EXPERT TEAM </button>
          </Col>
          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/ecomerce-desk.png" className="w-100" alt=""/>
          </Col>
        </Row>
      </Container>
      </section>

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

      <section className="py-5 bg-white">
      <Container >
        <Row>
          <Col lg={6}>
            <img src="https://abym.in/assets/img/post/quiz.png" className="w-100" alt="" />
          </Col>
          <Col lg={6}>
            <h1>Quiz and Test</h1>
            <p>We create engaging and interactive quiz and test apps for various domains and purposes. Whether you need an app for education, entertainment, or evaluation, we have the right solution for you. Some of the features of our quiz and test apps are:</p>

            <ul>
              <li><img src="https://abym.in/assets/img/icon/quiz-test1.png" alt=""/> Customizable design and content to suit your brand and audience</li>
              <li><img src="https://abym.in/assets/img/icon/quiz-test1.png" alt=""/> Customizable design and content to suit your brand and audience</li>
              <li><img src="https://abym.in/assets/img/icon/quiz-test1.png" alt=""/> Customizable design and content to suit your brand and audience</li>
            </ul>
            <button>Consult Our Expert Team</button>
          </Col>
        </Row>
      </Container>
      </section>

        {/* blog */}
      <section className="products_blogs">
      <Container>
        <Heading title="Blogs" subtitle="We share insights and knowledge on technology topics. Our content is valuable, and informative, and helps our readers learn, grow, and succeed." />
        <Row className="gx-4">
          <Col lg={4}>
          <Card  className="blog_card">
          {/* style={{ width: '18rem' }} */}
           <Card.Img variant="top" src="https://abym.in/assets/img/post/blog/blog2.png" />
           <Card.Body className="text-center">
            <Card.Title>IGNOU Result</Card.Title>
            <Card.Text>
               We create a user-friendly app that lets you book cabs in a few clicks. Using cutting-edge technology, we ensure a smooth and secure ride experience. Whether you need a quick trip or a long journey, our app has it all
            </Card.Text>
             <button>Visites website</button>
           </Card.Body>
         </Card>
        </Col>
        <Col lg={4}>
          <Card  className="blog_card">
          {/* style={{ width: '18rem' }} */}
           <Card.Img variant="top" src="https://abym.in/assets/img/post/blog/blog2.png" />
           <Card.Body className="text-center">
            <Card.Title>IGNOU Result</Card.Title>
            <Card.Text>
               We create a user-friendly app that lets you book cabs in a few clicks. Using cutting-edge technology, we ensure a smooth and secure ride experience. Whether you need a quick trip or a long journey, our app has it all
            </Card.Text>
             <button>Visites website</button>
           </Card.Body>
         </Card>
        </Col>
        <Col lg={4}>
          <Card  className="blog_card">
          {/* style={{ width: '18rem' }} */}
           <Card.Img variant="top" src="https://abym.in/assets/img/post/blog/blog2.png" />
           <Card.Body className="text-center">
            <Card.Title>IGNOU Result</Card.Title>
            <Card.Text>
               We create a user-friendly app that lets you book cabs in a few clicks. Using cutting-edge technology, we ensure a smooth and secure ride experience. Whether you need a quick trip or a long journey, our app has it all
            </Card.Text>
             <button>Visites website</button>
           </Card.Body>
         </Card>
        </Col>
        </Row>
      </Container>
      </section>
      

      <section className="cabs_booking">
      <Container>
        <Heading title="Cab Booking System" subtitle="We create a user-friendly app that lets you book cabs in a few clicks. Using cutting-edge technology, we ensure a smooth and secure ride experience. Whether you need a quick trip or a long journey, our app has it all." />
        <Row>
          <Col lg={3} className="">
            <h1>Cab Booking Test Cases</h1>
            <p>Customers and drivers rely on our system to book and assign cabs efficiently. Therefore, we need to test every aspect of our system’s functionality thoroughly. For this purpose, we have created a comprehensive set of cab booking test cases that cover various scenarios and outcomes.</p>
          </Col>
          <Col lg={6}>
            <Row>
             <Col lg={4}><img src="https://abym.in/assets/img/icon/cab-icon1.png" alt=""/></Col>
             <Col lg={4}><img src="https://abym.in/assets/img/icon/cab-icon2.png" alt=""/></Col>
             <Col lg={4}><img src="https://abym.in/assets/img/icon/cab-icon3.png" alt=""/></Col>
            </Row>
            <Col lg={12}><img src="https://abym.in/assets/img/post/cab-img.png" className="w-100" alt=""/></Col>
          </Col>
          <Col lg={3} className="text-end">
            <h1>Conclusion</h1>
            <p>Our system is a sophisticated solution that enables customers to book cabs and drivers to get assigned to them. We want to make sure that our system works flawlessly and satisfies both customers and drivers. That’s why we test our system rigorously with a comprehensive set of cab booking test cases that cover various scenarios and outcomes.</p>
          </Col>
        </Row>
      </Container>
      </section>
       
    </div>
  );
}
