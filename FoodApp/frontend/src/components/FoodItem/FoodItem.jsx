import React from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div>
      <div className="">
        <img src={image} alt="" />
      </div>
      <div className="">
        <div className="">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
