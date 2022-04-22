import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/rmd-logo.png"}
            alt="Ogami Logo"
            style={{ maxWidth:100 }}
          />
        </a>
      </Link>
      <ul>
        <li>Address: 305 Gonagala - Passara Rd, Hindagoda 90000</li>
        <li>Phone: +94 71 557 2723</li>
        <li>Email: info@rmdfoodcity.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
