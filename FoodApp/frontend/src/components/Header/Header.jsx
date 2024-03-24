import React from "react";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="mx-[200px] mt-10 relative  ">
      <img src={assets.header_img} className="absolute object-contain" alt="" />
      <div className="relative flex flex-col    ">
        <h2 className="font-bold text-6xl ml-[25px]  w-[550px] mt-[150px] text-gray-100">
          Order your favourite food here
        </h2>
        <p className=" p-2 ml-[19px] text-white text-base">
          Introducing our innovative Food Order App, where convenience meets
          culinary delight! Navigating the hustle and bustle of daily life just
          got easier with our user-friendly platform. Whether you're craving a
          savory meal after a long day's work or planning a cozy dinner at home
          with loved ones, our app has you covered. Browse through an extensive
          selection of restaurants, cuisines, and mouthwatering dishes, all at
          your fingertips. From local favorites to global flavors, there's
          something to tantalize every taste bud.
        </p>
        <button className="border w-[150px] ml-[25px] mt-2 p-3 bg-slate-50 text-gray-950 rounded-3xl hover:motion-safe:animate-pulse  ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
