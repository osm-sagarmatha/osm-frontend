import React from "react";
import challenges from "../images/challenges.png";
const Challenges = () => {
  return (
    <div className="md:py-5 py-3 px-5 mx-auto md:bg-white md:w-96 flex flex-col">
      <div className="flex flex-col space-y-2 w-full justify-center items-center">
        <h1 className="text-2xl  px-4  pt-4 w-full text-blue-500 font-bold text-left ">
          {" "}
          Challenges
        </h1>
        <p className="text-gray-400 px-4  w-full">Get Rewards!</p>
      </div>
      <ul className="text-green-500 flex p-2 space-x-5 px-4">
        <li className="border-b-2 border-green-500">New</li>
        <li>Completed</li>
        <li>Active</li>
      </ul>
      <div className=" flex flex-col ">
        <img src={challenges} alt="" />
        <img src={challenges} alt="" />
        <img src={challenges} alt="" />
        <img src={challenges} className="mb-20" alt="" />
      </div>
    </div>
  );
};

export default Challenges;
