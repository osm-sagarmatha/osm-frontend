import React from "react";
import leader from "../images/leader.png";
import lellipse from "../images/l_ellipse.png";
import { GiRunningNinja } from "react-icons/gi";

const Leaderboards = () => {
  return (
    <div className="md:py-5 py-10  mx-auto md:bg-white md:w-96 flex flex-col">
      <div className=" px-5 pb-2">
        <h1 className="text-blue-500 text-2xl  mb-2 w-full font-bold">
          Leaderboard
        </h1>
      </div>
      <div className="-mt-4">
        <img src={leader} className="w-96" alt="" />
      </div>
      <div className="px-5 py-5 flex justify-between border-b-2 border-gray-200 items-center ">
        <img src={lellipse} alt="" className="h-20 mr-4" />
        <div>
          <h1 className="text-black font-bold">Kira Lin</h1>
          <p className="text-sm">
            Shivapuri Hills is one of the most popular hiking in Kathmandu.
          </p>
        </div>
        <div className="flex ">
          <GiRunningNinja
            fontSize={30}
            className="text-orange-500  font-bold "
          />
          <h2 className="text-orange-500 font-bold  ">6000</h2>
        </div>
      </div>
      <div className="px-5 py-5 flex justify-between border-b-2 border-gray-200 items-center ">
        <img src={lellipse} alt="" className="h-20 mr-4" />
        <div>
          <h1 className="text-black font-bold">Kira Lin</h1>
          <p className="text-sm">
            Shivapuri Hills is one of the most popular hiking in Kathmandu.
          </p>
        </div>
        <div className="flex ">
          <GiRunningNinja
            fontSize={30}
            className="text-orange-500  font-bold "
          />
          <h2 className="text-orange-500 font-bold  ">6000</h2>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;
