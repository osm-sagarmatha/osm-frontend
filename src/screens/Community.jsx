import React from "react";
import communityCard from "../images/communityCard.png";
const Community = () => {
  return (
    <div className="md:py-5 py-3 px-5 mx-auto md:bg-white md:w-96 flex flex-col">
      <div className="flex flex-col space-y-2 w-full justify-center items-center">
        <h1 className="text-2xl  px-4  pt-4 w-full text-blue-500 font-bold text-left ">
          {" "}
          Challenges
        </h1>
        <button className="w-11/12 text-white bg-green-500 py-2 rounded-lg">
          Create
        </button>
      </div>
      <ul className="text-green-500 flex py-2 mt-2 space-x-5 px-4">
        <li className="border-b-2 border-green-500">New</li>
        <li>Popular</li>
        <li>Best</li>
      </ul>

      <div className=" flex flex-col ">
        <div className="relative">
          <img src={communityCard} alt="" />
          <button className="bg-green-500 text-white absolute bottom-12 right-8 px-3 py-1 text-sm rounded-md">
            {" "}
            View Route
          </button>
        </div>
        <div className="relative">
          <img src={communityCard} alt="" />
          <button className="bg-green-500 text-white absolute bottom-12 right-8 px-3 py-1 text-sm rounded-md">
            {" "}
            View Route
          </button>
        </div>
        <div className="relative mb-10">
          <img src={communityCard} alt="" />
          <button className="bg-green-500 text-white absolute bottom-12 right-8 px-3 py-1 text-sm rounded-md">
            {" "}
            View Route
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
