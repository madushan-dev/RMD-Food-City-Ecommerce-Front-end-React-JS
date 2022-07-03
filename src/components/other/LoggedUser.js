import React from 'react';
import classNames from "classnames";
import { Button } from "antd";
import Link from "next/link";

export default function LoggedUser(props) {

  return (
    <Link href={process.env.PUBLIC_URL + "/dashboard"}>
    <a>
      {props.username}
    </a>
  </Link>
  );
}
