import React from "react";
import classNames from "classnames";
import { Button } from "antd";

export default function SocialIcons({ className, type = "link", shape }) {
  return (
    <ul className={`social-icons ${classNames(className)}`}>
      <li>
        <Button type={type} shape={shape} href="#">
          <i className="fab fa-facebook-f"></i>
        </Button>
      </li>
      
    </ul>
  );
}
