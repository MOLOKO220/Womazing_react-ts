import React, { Children, ReactElement, useRef } from "react";
import { NavLink } from "react-router-dom";

import imgArry from "./img/Arry.svg";

import "./Product.scss";

interface productProps {
  name: string;
  img: string;
  src: string;
  price: number;
  oldPrece?: number;
}

export const Product: React.FC<productProps> = ({
  name,
  img,
  src,
  price,
  oldPrece,
}) => {
  return (
    <div className="Product">
      <div className="product-main">
        <img src={img}></img>
        <NavLink to={`/${src}`}>
          <img src={imgArry} />
        </NavLink>
      </div>
      <div className="product-prise">
        <h6>{name}</h6>
        <p>
          {oldPrece != null ? <span>${oldPrece}</span> : null}${price}
        </p>
      </div>
    </div>
  );
};
