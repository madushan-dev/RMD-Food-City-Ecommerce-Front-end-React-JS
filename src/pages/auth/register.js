import { Breadcrumb, Form, Input, Button, Checkbox, Row, Col,message } from "antd";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Router from "next/router";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import { onRegister } from "../../common/authServices";

const login = () => {
  const [loggeduser, setloggeduser] = useState(0);

  useEffect(() => {
    setloggeduser( localStorage.getItem('cus_name'));
  });

  if(loggeduser){
    Router.push("/dashboard");
  }

    const [inputfile, setinputfile] = useState(0);
  
    const handleImage = (e)=>{
      setinputfile(e.target.files[0]);
    }

    
  const onFinish = (data) => {

    const values = new FormData();
    
    values.append('first_name',data.first_name);
    values.append('last_name',data.last_name);
    values.append('email',data.email);
    values.append('phone',data.phone);
    values.append('address',data.address);
    values.append('profile_photo',inputfile);
    values.append('password',data.password);






    onRegister({
      values,
      onSuccess: (data) => {
        message.success("You have succcessfully Registered!");
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
    <LayoutOne title="Register">
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
              <h2>Register new account</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="register"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  encType="multipart/form-data"
                >
                  <Form.Item
                    label="First Name"
                    name="first_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Last Name"
                    name="last_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last Name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
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
                    label="Phone Number"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please input your address!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Profile Image"
                    name="profile_photo"
                    rules={[
                      {
                        required: true,
                        message: "Please select your profile image!",
                      },
                    ]}
                  >
                    <Input type='file' onChange={handleImage}/>
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
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two passwords that you entered do not match!"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit">
                      Register
                    </Button>
                    <Button type="link">
                      <Link href={process.env.PUBLIC_URL + "/auth/login"}>
                        <a>OR Login</a>
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
