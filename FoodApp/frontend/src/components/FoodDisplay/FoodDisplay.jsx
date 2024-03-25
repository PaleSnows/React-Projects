import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="mx-[200px] mt-1">
      <h2 className="font-bold text-3xl ">Top dishes near you</h2>
      <div className="grid grid-rows-8 grid-flow-col gap-5">
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
