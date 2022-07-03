import React from "react";
import { Breadcrumb } from "antd";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import ShopOrderStep from "../../components/shop/ShopOrderStep";
import PartnerOne from "../../components/sections/partners/PartnerOne";
import Benefits from "../../components/other/Benefits";

export default function orderComplete() {
  return (
    <LayoutOne title="Order Complete">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>Order complete</Breadcrumb.Item>
        </Breadcrumb>
        <ShopOrderStep current={3} />
        <div className="order-complete">
          <h1>
            Congratulation! You’ve <span>Placed</span> the Order
          </h1>
        </div>
        <Benefits threeCol className="-bordered" />

      </Container>
    </LayoutOne>
  );
}
