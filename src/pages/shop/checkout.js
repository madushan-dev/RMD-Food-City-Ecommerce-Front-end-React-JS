import React, { useState,useEffect } from "react";
import axiosService from "../../common/axiosService";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Select,
  Radio,
  Breadcrumb,
  message
} from "antd";
import { useRouter } from "next/router";

import { formatCurrency } from "../../common/utils";
import { calculateTotalPrice } from "../../common/shopUtils";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import ShopOrderStep from "../../components/shop/ShopOrderStep";
import FetchDataHandle from "../../components/other/FetchDataHandle";

function checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [ totalpayment, settotalpayment] = useState([]);
  const router = useRouter();
  const cartState = useSelector((state) => state.cartReducer);
  const onFinish = (values) => {

    values.cus_id = loggeduser;
    values.payment_method = paymentMethod;
    values.totalpayment = totalpayment;
    values.cartproducts= cartState.data;
    console.log(values);


    let endpoint = `http://127.0.0.1:8000/api/checkout`;

    axios({
      method: "post",
      url: endpoint,
      data: values,
     
    }).then(res => {

      if (res && res!=null) {
        message.success("You order succcessfully placed!");
        window.location.href = "/shop/order-complete";
      } else {
        message.error("Can not place order");
      }
     });

     


  
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChoosePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };


  const [loggeduser, setloggeduser] = useState();
  const [ results, setResults] = useState([]);

  const [ firstname, setfirstname] = useState("");
  const [ lastname, setlastname] = useState([]);
  const [ email, setemail] = useState([]);
  const [ phone, setphone] = useState([]);
  const [ address, setaddress] = useState([]);


  useEffect(() => {
    setloggeduser(localStorage.getItem('cus_id'));   
    getAPIresults();
    settotalpayment(calculateTotalPrice(cartState.data));

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


  return (
    <LayoutOne title="Checkout">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Checkout</Breadcrumb.Item>
        </Breadcrumb>
        <ShopOrderStep current={2} />
        <FetchDataHandle
          emptyDescription="No product in cart"
          data={cartState}
          renderData={( data) => (
            <div className="checkout">
              <Row gutter={50}>
                <Col xs={24} md={16}>
                  <div className="checkout-form">
                    <h3 className="checkout-title">Delivery Details</h3>
                    <Form
                      name="checkout"
                      layout="vertical"
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      id="checkout-form"
                      
                    >
                      <Row gutter={15}>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            label="First name"
                            name="firstname"
                            rules={[
                              {
                         
                                message: "Please input your first name!",
                              },
                            ]}
                          >
                            <Input placeholder={firstname}/>
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={12}>
                          <Form.Item
                            label="Last name"
                            name="lastname"
                            rules={[
                              {
                          
                                message: "Please input your last name!",
                              },
                            ]}
                          >
                            <Input placeholder={lastname}/>
                          </Form.Item>
                        </Col>
                  
                        <Col span={24}>
                          <Form.Item
                            label="Address"
                            name="city"
                            rules={[
                              {
                           
                                message: "Please input your address!",
                              },
                            ]}
                          >
                            <Input placeholder={address}/>
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[
                              {
                            
                                message: "Please input your phone!",
                              },
                            ]}
                          >
                            <Input placeholder={phone}/>
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Email address"
                            name="email"
                            rules={[
                              {
                         
                                message: "Please input your email address!",
                              },
                            ]}
                          >
                            <Input placeholder={email}/>
                          </Form.Item>
                        </Col>
                        <Col span={24}>
                          <Form.Item
                            label="Ref ID"
                            name="affiliate_id"
                            >
                            <Input/>
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col xs={24} md={8}>
                  <div className="checkout-total">
                    <h3 className="checkout-title">Your order</h3>
                    <table className="checkout-total__table">
                      <tbody>
       
                        {data.map((item, index) => (
                          <tr key={index}>
                            <td>
                              {item.products[0].name} x {item.quantity}
                            </td>
                            <td className="-bold ">
                              {formatCurrency(item.products[0].selling_price * item.quantity)}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <th>SUBTOTAL</th>
                          <td className="-bold -color">
                            {formatCurrency(calculateTotalPrice(data))}
                          </td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td
                            style={{ fontSize: 20 / 16 + "em" }}
                            className="-bold -color"
                          >
                           

                            {formatCurrency(calculateTotalPrice(data))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="checkout-total__footer">
                      <Radio.Group
                        onChange={onChoosePaymentMethod}
                        value={paymentMethod}
                      >
                        <Radio style={{ display: "block" }} value="cod">
                          Cash on delivery
                        </Radio>
                        <Radio style={{ display: "block" }} value="card">
                          Card Payment
                        </Radio>
                      </Radio.Group>
                    </div>
                    <Button
                      className="checkout-sumbit"
                      type="primary"
                      shape="round"
                      form="checkout-form"
                      key="submit"
                      htmlType="submit"
                    >
                      <a>Place order</a>
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          )}
        />
      </Container>
    </LayoutOne>
  );
}

export default React.memo(checkout);
