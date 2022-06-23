import React from "react";
import { Link } from "react-router-dom";
import communityCard from "../images/communityCard.png";
const Community = () => {
  return (
    <div className="md:py-5 py-3 px-5 mx-auto md:bg-white md:w-96 flex flex-col">
      <div className="flex flex-col space-y-2 w-full justify-center items-center">
        <h1 className="text-2xl  px-4  mt-8 w-full text-blue-500 font-bold text-left ">
          {" "}
          Challenges
        </h1>

        <Link
          to="/create-route"
          className="w-11/12 text-white text-center bg-green-500 py-2 rounded-lg"
        >
          Create
        </Link>
      </div>
      <ul className="text-green-500 flex py-2 mt-2 space-x-5 px-4">
        <li className="border-b-2 border-green-500">New</li>
        <li>Popular</li>
        <li>Best</li>
      </ul>

      <div className=" flex flex-col ">
        <div className="relative">
          <img src={communityCard} alt="" />
          <>
            <Link
              to="/map"
              className="bg-green-500 text-white absolute bottom-12 right-8 px-3 py-1 text-sm rounded-md"
            >
              {" "}
              View Route
            </Link>
          </>
        </div>
        <div className="relative">
          <img src={communityCard} alt="" />
          <Link to="/map">
            <button className="bg-green-500 text-white absolute bottom-12 right-8 px-3 py-1 text-sm rounded-md">
              {" "}
              View Route
            </button>
          </Link>
        </div>
        <div className="relative mb-10">
          <img src={communityCard} alt="" />
          <Link to="/map">
            <button className="bg-green-500 text-white absolute bottom-12 right-8 px-3 py-1 text-sm rounded-md">
              {" "}
              View Route
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Community;
