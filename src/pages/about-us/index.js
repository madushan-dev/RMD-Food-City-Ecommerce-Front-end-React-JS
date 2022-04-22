import { Breadcrumb, Row, Col, Button } from "antd";
import React from "react";
import CountUp from "react-countup";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";

function aboutUs() {
  return (
    <LayoutOne title="About us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>About us</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <div className="about">
        <Container>
          <div className="about-story">
            <Row gutter={40}>
              <Col xs={24} sm={12}>
                <div className="about-story__content">
                  <SectionTitle title="RMD Food City Badulla" className="-left" />
                  <p>
                  RMD Food City is open for in-store shopping from 08.00 AM and it closes at 10.00 PM. It opens for business almost every day including holidays. The items are displayed at the mall and customers can visit the mall and select the items they need to a cart physically and they get a bill at the cashier according to what they have purchased. Customers must pay only with cash and no card payments are accepted. 
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={12}>
                <div className="about-story__video">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/pages/contact/rmd-banner.jpg"
                    }
                    alt="introduction image"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>

      </div>
    </LayoutOne>
  );
}

export default React.memo(aboutUs);
