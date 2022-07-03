import { Breadcrumb, Row, Col, Form, Input, Button, message } from "antd";
import React, { useState, useEffect } from 'react';
import axiosService from "../../common/axiosService";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import OrdersList from "../../components/dashboard/OrdersList";
import ProfileStats from "../../components/dashboard/ProfileStats";
import Router from "next/router";

function dashboard() {
  const [loggeduser, setloggeduser] = useState();
  const [ results, setResults] = useState([]);
  const [ affiliateid, setAffiliateid] = useState([]);
  const [ rewardpoints, setRewardpoints] = useState([]);



  useEffect(() => {
    setloggeduser(localStorage.getItem('cus_name'));   
    getAPIresults();
    getCustomerDetails();
  
  },[]);




  const getAPIresults = async () => {
    let endpoint = `http://127.0.0.1:8000/api/customerorders/${localStorage.getItem('cus_id')}`;
    await axiosService.get(endpoint)
        .then((response)=>{
          setResults(response.data);
          })
          .catch((error)=>{
            console.log(error)
          })    

        
}

const getCustomerDetails = async () => {
  let endpoint = `http://127.0.0.1:8000/api/auth/customerdata/${localStorage.getItem('cus_id')}`;
  await axiosService.get(endpoint)
      .then((response)=>{
        setAffiliateid(response.data.affiliate_id);
        setRewardpoints(response.data.reward_points);
        })
        .catch((error)=>{
          console.log(error)
        })    

      
}


const logouthandler = () => {
  localStorage.removeItem("cus_id");
  localStorage.removeItem("cus_name");
  localStorage.removeItem("token");

  Router.push("/");
  

};



const visitedit = () => {

  Router.push("/dashboard/edit");

};



  return (
    <LayoutOne title="Dashboard">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        <div className="dasboard-container">
        <uL className="dashboard-menu-list">
          <li className="dashboard-menu active-menu">Your Orders</li>
          <li className="dashboard-menu" onClick={visitedit}>Profile Edit</li>
          <li className="dashboard-menu" visitpath="edit" onClick={logouthandler}>Log Out</li>
        </uL>
   
          <div className="dasboard-content">
            <div className="profile-stats flex">
                <div className="stat-item">
                 Affiliate Id : {affiliateid}
                </div>
                <div className="stat-item">
                  Reward Points : {rewardpoints}
                </div>

            </div>

          <div className="flex">
          <table className="orders-table">
              <thead>
              <tr className="table-headings">
                <th className="table-heading">Order Id</th>
                <th className="table-heading">Name</th>
                <th className="table-heading">Date</th>
                <th className="table-heading">Payment</th>
                <th className="table-heading">Type</th>
                <th className="table-heading">Status</th>
                <th className="table-heading">Action</th>
              </tr>
              {console.log(results.length)}
              </thead>
              <tbody>              {
                results.map( (item) => {
                 return (<OrdersList key={item.id} data={item}/>)          
                })
              }
              
        </tbody>
              
        
             
            </table>
          </div>
          </div>

        </div>
      </Container>
    </LayoutOne>
  );
}

export default React.memo(dashboard);
