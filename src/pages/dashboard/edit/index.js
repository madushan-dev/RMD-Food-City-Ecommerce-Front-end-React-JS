import { Breadcrumb, Row, Col, Form, Input, Button, message } from "antd";
import React, { useState, useEffect } from 'react';
import axiosService from "../../../common/axiosService";

import LayoutOne from "../../../components/layout/LayoutOne";
import Container from "../../../components/other/Container";
import OrdersList from "../../../components/dashboard/OrdersList";
import { onRegister } from "../../../common/profileServices";
import Link from "next/link";
import Router from "next/router";

function dashboard() {

  const [loggeduser, setloggeduser] = useState();
  const [ results, setResults] = useState([]);

  const [ firstname, setfirstname] = useState("");
  const [ lastname, setlastname] = useState([]);
  const [ email, setemail] = useState([]);
  const [ phone, setphone] = useState([]);
  const [ address, setaddress] = useState([]);
  const [ password, setpassword] = useState([]);
  const [inputfile, setinputfile] = useState(0);
  
  const handleImage = (e)=>{
    setinputfile(e.target.files[0]);
  }


  useEffect(() => {
    setloggeduser(localStorage.getItem('cus_id'));   
    getAPIresults();
  },[]);

  const getAPIresults = async () => {
    let endpoint = `http://127.0.0.1:8000/api/auth/customerdata/${localStorage.getItem('cus_id')}`;
    await axiosService.get(endpoint)
        .then((response)=>{
          setResults(response.data);
          setfirstname(response.data.first_name);
          setlastname(response.data.last_name);
          setemail(response.data.email);
          setaddress(response.data.address);
          setphone(response.data.phone);

       
          })
          .catch((error)=>{
            console.log(error)
          })    

        
}
 
const visitorders = () => {

  Router.push("/dashboard");

};

const logouthandler = () => {
  localStorage.removeItem("cus_id");
  localStorage.removeItem("cus_name");
  localStorage.removeItem("token");

  Router.push("/");
  

};

    
const onFinish = (data) => {

  const values = new FormData();
  
  values.append('first_name',data.first_name);
  values.append('last_name',data.last_name);
  values.append('email',data.email);
  values.append('phone',data.phone);
  values.append('address',data.address);
  values.append('profile_photo',inputfile);
  values.append('password',data.password);
  values.append('id',localStorage.getItem('cus_id'));


  onRegister({
    values,
    onSuccess: (data) => {
      message.success("You have succcessfully Edited!");
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
    <LayoutOne title="Edit Profile">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Edit Profile</Breadcrumb.Item>
        </Breadcrumb>
        <div className="dasboard-container">
        <uL className="dashboard-menu-list">
          <li className="dashboard-menu" onClick={visitorders}>Your Orders</li>
          <li className="dashboard-menu active-menu">Profile Edit</li>
          <li className="dashboard-menu" onClick={logouthandler}>Log Out</li>
        </uL>
          <div className="dasboard-content">
            <div>
            <Col xs={24} md={24}>
              <h2 className="edit-title">Edit Profile</h2><br/>
              <div className="edit-form">
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
                        message: "Please input your First Name!",
                      },
                    ]}
                  >
        
                    <Input placeholder={firstname}/>
                  </Form.Item>
                  

                  <Form.Item
                    label="Last Name"
                    name="last_name"
                    rules={[
                      {
            
                        message: "Please input your Last Name!",
                      },
                    ]}
                  >
      
                    <Input placeholder={lastname}/>
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      {
                  
                        message: "Please input your email!",
                      },
                    ]}
                  >
           
                     <Input placeholder={email}/>
                  </Form.Item>

    
                  <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                      {
              
                        message: "Please input your phone number!",
                      },
                    ]}
                  >
    
                    <Input placeholder={phone}/>
                  </Form.Item>
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                      {
                    
                        message: "Please input your address!",
                      },
                    ]}
                  >
                    <Input placeholder={address}/>
                  </Form.Item>
                  <Form.Item
                    label="Profile Image"
                    name="profile_photo"
                    rules={[
                      {
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
              
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password/>
                  </Form.Item>
                
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>

            </div>
    
            
          </div>

        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(dashboard);
