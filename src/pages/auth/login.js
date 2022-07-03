import { Breadcrumb, Form, Input, Button, Checkbox, Row, Col,message } from "antd";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Router from "next/router";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import { onLogin } from "../../common/authServices";




const login = () => {

  const [loggeduser, setloggeduser] = useState(0);

  useEffect(() => {
    setloggeduser( localStorage.getItem('cus_name'));
  });
  
  if(loggeduser){
    Router.push("/dashboard");
  }
  
  const onFinish = (values) => {



    onLogin({
      values,
      onSuccess: (data) => {
    
        message.success("You have succcessfully logged in!");
        Router.push("/dashboard");
   

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
    <LayoutOne title="Login">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Login</Breadcrumb.Item>
        </Breadcrumb>
        <div className="auth">
          <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <h2>Login</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="login"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Email address"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
       
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit">
                      Signin
                    </Button>
                    <Button type="link">
                      <Link href={process.env.PUBLIC_URL + "/auth/register"}>
                        <a>OR CREATE AN ACCOUNT</a>
                      </Link>
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
};

export default login;
