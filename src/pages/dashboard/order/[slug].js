import { Breadcrumb, Row, Col, Form, Input, Button, message } from "antd";
import React, { useState, useEffect } from 'react';
import axiosService from "../../../common/axiosService";

import LayoutOne from "../../../components/layout/LayoutOne";
import Container from "../../../components/other/Container";
import { useRouter } from "next/router";
import Router from "next/router";

function order() {

  const router = useRouter();
  const { slug } = router.query;

  const [ results, setResults] = useState([]);
  const [statusclass, setstatusclass] = useState("");

  const [ orderid, setorderid] = useState("");
  const [ ordername, setordername] = useState("");
  const [ orderphone, setorderphone] = useState("");
  const [ orderaddress, setorderaddress] = useState("");
  const [ orderdate, setorderdate] = useState("");
  const [ orderpayment, setorderpayment] = useState("");
  const [ ordertype, setordertype] = useState(0);
  const [ orderstatus, setorderstatus] = useState(0);
  const [ orderdelivery, setorderdelivery] = useState("");
  const [ ordertracking, setordertracking] = useState("");
  const [ orderproducts, setorderproducts] = useState([]);
  

  useEffect(() => { 
    getAPIresults();

  },[]);


  const visitedit = () => {

    Router.push("/dashboard/edit");
  
  };

  
const logouthandler = () => {
  localStorage.removeItem("cus_id");
  localStorage.removeItem("cus_name");
  localStorage.removeItem("token");

  Router.push("/");
  

};






  const getAPIresults = async () => {
    let endpoint = `http://127.0.0.1:8000/api/customerorders/order/${slug}`;
    await axiosService.get(endpoint)
        .then((response)=>{
          setResults(response.data.order[0]);
          setorderid(response.data.order[0].id);
          setordername(response.data.order[0].delivery_name);
          setorderphone(response.data.order[0].delivery_phone);
          setorderaddress(response.data.order[0].delivery_address);
          setorderdate(response.data.order[0].date);
          setorderpayment(response.data.order[0].payment_amount);
          setordertype(response.data.order[0].payment_type);
          setorderstatus(response.data.order[0].status);
          setorderdelivery(response.data.order[0].delivery_company);
          setordertracking(response.data.order[0].tracking_number);
          setorderproducts(response.data.products);


          if(response.data.order[0].status === "Processing"){
            setstatusclass('processing');
          }
        
          if(response.data.order[0].status === "Completed"){
            setstatusclass('completed');
          }
        
          if(response.data.order[0].status === "Cancelled"){
            setstatusclass('cancelled');
          }
        
          if(response.data.order[0].status === "On Delivery"){
            setstatusclass('on-delivery');
          }
        
          })
          .catch((error)=>{
            console.log(error)
          })    

      
}


  return (
    <LayoutOne title="Order">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className="dasboard-container">
        <div className="dasboard-sidebar">
        <uL className="dashboard-menu-list">
          <li className="dashboard-menu active-menu">Your Orders</li>
          <li className="dashboard-menu" onClick={visitedit}>Profile Edit</li>
          <li className="dashboard-menu" onClick={logouthandler}>Log Out</li>
        </uL>
      </div>
          <div className="dasboard-content flex">
          <table class="order-details-table">
            <h2 className="order-heading">Order Details |  Order Id - 10</h2>
          <tr>
            <th className="table-heading">Order Id:</th>
            <td className="data-column">{orderid}</td>
          </tr>
          <tr>
            <th className="table-heading">Delivery Name:</th>
            <td className="data-column">{ordername}</td>
          </tr>
          <tr>
            <th className="table-heading">Delivery Address:</th>
            <td className="data-column">{orderaddress}</td>
          </tr>
          <tr>
            <th className="table-heading">Delivery Phone:</th>
            <td className="data-column">{orderphone}</td>
          </tr>
          <tr>
            <th className="table-heading">Date:</th>
            <td className="data-column">{orderdate.slice(0, -3)}</td>
          </tr>
          <tr>
            <th className="table-heading">Payment:</th>
            <td className="data-column">Rs {orderpayment}</td>
          </tr>
          <tr>
            <th className="table-heading">Type:</th>
            <td className="data-column">{ordertype}</td>
          </tr>
          <tr>
            <th className="table-heading">Status:</th>
            <td className="data-column"><span className={statusclass}>{orderstatus}</span></td>
          </tr>
          <tr>
            <th className="table-heading">Delivery Company:</th>
            <td className="data-column">{orderdelivery}</td>
          </tr>
          <tr>
            <th className="table-heading">Tracking Number:</th>
            <td className="data-column">{ordertracking}</td>
          </tr>
          <tr>
            <th className="table-heading">Order Products :</th>
            <td className="data-column">
              
              {
                     orderproducts.map( (item) => {
                      return (<p>{item.name} x {item.quantity}</p>)          
                     })


              }
              
              
              
              </td>
          </tr>


          </table>
          </div>
          

        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(order);
