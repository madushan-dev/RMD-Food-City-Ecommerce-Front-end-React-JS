import React from "react";

import Container from "../../other/Container";
import ProductDetailImages from "./elements/ProductDetailImages";
import ProductDetailContent from "./elements/ProductDetailContent";
import { Col, Row } from "antd";
import ProductDetailTab from "./elements/ProductDetailTab";

function ProductDetailLayout({ data, type, hideTab, style }) {
  if (type === "fluid") {
    return (
      <div className="product-detail" style={style}>
        <Row gutter={30}>
          <Col md={10}>
            <ProductDetailImages type="column" images={data.images} />
          </Col>
          <Col md={14}>
            <ProductDetailContent type="fluid" data={data} />
          </Col>
          <Col md={24}>
            {!hideTab && (
              <ProductDetailTab
                fullDescription={data.fullDescription}
                reviews={data.reviews}
              />
            )}
          </Col>
        </Row>
      </div>
    );
  }
  return (
   
    <div className="product-detail" style={style}>
      <Row gutter={30}>
        <Col md={12}>
          <ProductDetailImages images={data.product_image} />
        </Col>
        <Col md={12}>
          <ProductDetailContent data={data} />
        </Col>
        <Col xs={24} md={24}>
          {!hideTab && (
            <ProductDetailTab
              fullDescription={data.description}
              reviews={data.reviews}
              productid={data.id}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(ProductDetailLayout);
