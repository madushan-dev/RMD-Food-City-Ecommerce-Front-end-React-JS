import React, { useState } from "react";
import Slider from "react-slick";
import classNames from "classnames";

function ProductDetailImages({ type, images }) {
  const slider1Settings = {
    arrows: false,
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    focusOnSelect: true,
    vertical: type === "column" ? true : false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: type === "column" && false,
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  // if (type === "column") {
  //   return <h1>Column</h1>;
  // }
  return (
    <div
      className={`product-detail-images ${classNames({
        "-column": type === "column",
      })}`}
    >
      <div className="product-detail-images-big">
        <img src={'http://127.0.0.1:8000/images/products/'+images} alt="Product image" />
      </div>
    </div>
  );
}

export default React.memo(ProductDetailImages);
