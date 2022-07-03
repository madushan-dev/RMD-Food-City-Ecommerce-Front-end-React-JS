import { Breadcrumb, Row, Col, Form, Input, Button,message } from "antd";
import React from "react";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import SectionTitle from "../../components/other/SectionTitle";
import { onAddContact } from "../../common/messageServices";

function contactUs() {
  const onFinish = (values) => {
    onAddContact({
      values,
      onSuccess: (data) => {
        message.success("Your message is submitted!. Wait for reply from us");
      },
      onError: (mes, err) => {
        message.error(mes);
        console.log(err);
      },
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutOne title="Contact us">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Contact us</Breadcrumb.Item>
        </Breadcrumb>
        <div className="contact">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15840.809003002176!2d81.0693289!3d6.9854404!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xce1773bc87a94201!2sRMD%20Food%20City!5e0!3m2!1sen!2slk!4v1650549091435!5m2!1sen!2slk"
              width="100%"
              height="600"
              frameborder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          <div className="contact-methods">
            <Row gutter={15}>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-map-marker-alt" />
                  <p>305 Gonagala - Passara Rd</p>
                  <p>NHindagoda</p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-envelope" />
                  <p>
                    <span>Phone:</span> +94 71 557 2723
                  </p>
                  <p>
                    <span>Mail:</span> info@rmdfoocity@gmail.com
                  </p>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <div className="contact-methods-item">
                  <i className="fal fa-clock" />
                  <p>
                    <span>Week Days:</span> 10:00 – 22:00
                  </p>
                  <p>
                    <span>Sunday:</span> Close
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="contact-form">
            <div className="contact-form__title">
              <SectionTitle
                hideDecoration
                title="Leave Message"
                className="-center"
              />
              <p>Our staff will call back later and answer your questions.</p>
            </div>
            <Form
              name="review"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Row gutter={30}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="from"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item
                    name="subject"
                    rules={[
                      { required: true, message: "Please input your subject!" },
                    ]}
                  >
                    <Input placeholder="Subject" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item name="message">
                    <Input.TextArea placeholder="Message" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" shape="round">
                      Send Message
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(contactUs);
