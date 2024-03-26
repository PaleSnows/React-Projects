import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className=" mt-10  p-10 bg-slate-900  ">
      <div className="flex justify-between m-8 p-8 ">
        <div className="text-gray-200 ">
          <img className="px-1 h-[30px]" src={assets.logo} alt="" />
          <p className="w-[500px] m-2 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            nihil assumenda architecto recusandae vitae non ullam fuga
            exercitationem distinctio odit quo excepturi illo porro rem, ad
            deserunt officia. Distinctio, nam?
          </p>
          <div className="text-gray-200 flex gap-2 py-2 px-1 h-[49px]">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="text-gray-200 flex flex-col gap-4">
          <h2 className="font-bold text-2xl">COMPANY</h2>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-gray-200 p-2 flex flex-col gap-3 ">
          <h2 className="font-bold text-2xl">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-2">
            <li>9898989898</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr  className="ml-[65px] mr-[40px]"/>
      <p className="text-gray-200 mt-9 pt-3 mb-4 text-center">Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
