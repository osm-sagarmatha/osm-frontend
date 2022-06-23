import React from "react";
import { Link } from "react-router-dom";
import route from "../images/route-info.png";
import trail from "../images/trail.png";

const RouteInfo = () => {
  return (
    <div className="md:py-5 py-10  mx-auto md:bg-white md:w-96 flex flex-col">
      <div className=" px-5  mb-2">
        <h1 className="text-blue-500 text-2xl   font-bold">RouteInfo</h1>
      </div>
      <div className="mx-auto w-80  flex flex-col">
        <div className="relative ">
          <img src={route} className="ml-2 " alt="" />
          <Link
            to="/hiking"
            className="bg-green-500 text-white px-2 text-sm py-1 rounded-lg absolute bottom-[4.5rem] left-4  "
          >
            Navigate
          </Link>
        </div>
        <div className="relative p-1 mb-15 ">
          <img src={trail} className="ml-2 " alt="" />
          <Link
            to="/hiking"
            className="bg-green-500 text-white px-2 text-sm py-1 rounded-lg absolute bottom-[4.5rem] left-5  "
          >
            Navigate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RouteInfo;
