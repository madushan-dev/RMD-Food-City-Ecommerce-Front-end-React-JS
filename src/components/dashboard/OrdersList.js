import React, { useState, useEffect,componentDidMount } from 'react';
import classNames from "classnames";
import { Button } from "antd";
import Link from "next/link";
import axiosService from "../../common/axiosService";

export default function OrdersList(props) {

  const [loggeduser, setloggeduser] = useState(0);
  const [statusclass, setstatusclass] = useState("");

  useEffect(() => {

  if(props.data.status === "Processing"){
    setstatusclass('processing');
  }

  if(props.data.status === "Completed"){
    setstatusclass('completed');
  }

  if(props.data.status === "Cancelled"){
    setstatusclass('cancelled');
  }

  if(props.data.status === "On Delivery"){
    setstatusclass('on-delivery');
  }
}, []);
    
  return (
        
      <tr className="table-data">
        <td className="data-column">{props.data.id}</td>
        <td className="data-column">{props.data.customers.first_name +" " + props.data.customers.last_name}</td>
        <td className="data-column">{props.data.date.slice(0, -3)}</td>
        <td className="data-column">Rs. {props.data.payment_amount}</td>
        <td className="data-column">{props.data.payment_type}</td>
        <td className="data-column "><span className={statusclass}>{props.data.status}</span></td>
        <td className="data-column">
        <Link href={"/dashboard/order/"+props.data.id}>
          <a className="btn-order-view">View</a>
        </Link>
          </td>
      </tr>
  );
}
