import React from "react";
import { useEffect, useState } from "react";
import { Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import axios from 'axios';


function CategoryColappse({ active }) {
  const { Panel } = Collapse;

  const [categories, setCategories] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/categories/").then(response => {
      setCategories(response.data);
    });
  }, []);





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
          header="All Categories"
          key="1"
          extra={<i className="far fa-bars" />}
        >
          <ul>
            {categories && categories.map((item, index) => (
              <li key={index}>
                <Link href={process.env.PUBLIC_URL +'/shop'}>
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
