import React from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

let categories = [
  { name: "Vegitables", href: "/shop/shop-3-column" },
  { name: "Fast Foods", href: "/shop/shop-3-column" },
  { name: "Spices", href: "/shop/shop-3-column" },
  { name: "Beverages", href: "/shop/shop-3-column" },
  { name: "Health & Fashion", href: "/shop/shop-3-column" },
  { name: "Cleaning", href: "/shop/shop-3-column" },
  { name: "Others", href: "/shop/shop-3-column" },

];

function CategoryColappse({ active }) {
  const { Panel } = Collapse;
  return (
    <div className="category-collapse">
      <Collapse
        bordered={false}
        defaultActiveKey={active ? "1" : null}
        expandIcon={({ isActive }) => (
          <DownOutlined rotate={isActive ? -180 : 0} />
        )}
        expandIconPosition="right"
      >
        <Panel
          header="All departments"
          key="1"
          extra={<i className="far fa-bars" />}
        >
          <ul>
            {categories.map((item, index) => (
              <li key={index}>
                <Link href={process.env.PUBLIC_URL + item.href}>
                  <a>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
    </div>
  );
}

export default React.memo(CategoryColappse);
