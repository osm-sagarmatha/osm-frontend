import React from "react";
import route from "../images/route-info.png";

const RouteInfo = () => {
  return (
    <div className="md:py-5 py-10  mx-auto md:bg-white md:w-96 flex flex-col">
      <div className=" px-5  pb-2">
        <h1 className="text-blue-500 text-2xl mt-5 mb-2 font-bold">
          RouteInfo
        </h1>
      </div>
      <div className="mx-auto w-80  flex flex-col">
        <div className="relative ">
          <img src={route} className="ml-2 " alt="" />
          <button className="bg-green-500 text-white px-2 text-sm py-1 rounded-lg absolute bottom-[4.5rem] left-4  ">
            Navigate
          </button>
        </div>
        <div className="relative ">
          <img src={route} className="ml-2 " alt="" />
          <button className="bg-green-500 text-white px-2 text-sm py-1 rounded-lg absolute bottom-[4.5rem] left-4  ">
            Navigate
          </button>
        </div>
        <div className="relative ">
          <img src={route} className="ml-2 " alt="" />
          <button className="bg-green-500 text-white px-2 text-sm py-1 rounded-lg absolute bottom-[4.5rem] left-4  ">
            Navigate
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteInfo;
