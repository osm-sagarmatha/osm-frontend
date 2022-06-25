import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import lellipse from "../images/l_ellipse.png";
import { GiRunningNinja } from "react-icons/gi";
const FriendList = () => {
  return (
    <div className="md:py-5 py-10  mx-auto md:bg-white md:w-96 flex flex-col">
      <div className=" px-5 w-full pb-2">
        <h1 className="text-blue-500 text-2xl   mb-2 font-bold">FriendList</h1>
        <div className="relative flex ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-4 left-2 text-gray-500"
          />
          <input
            type={"text"}
            alt=""
            placeholder="Search for Friends"
            className=" px-7 py-2 rounded-lg w-full outline-none border-2 border-gray-200"
          />
        </div>
        <div>
          <div className="mt-5 rounded-lg px-5 py-5 flex justify-between border-b-2 bg-white border-gray-200 items-center ">
            <img src={lellipse} alt="" className="h-20 mr-4" />
            <div className="">
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
          <div className="mt-5 rounded-lg px-5 py-5 flex justify-between border-b-2 bg-white border-gray-200 items-center ">
            <img src={lellipse} alt="" className="h-20 mr-4" />
            <div className="">
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
          <div className="mt-5 rounded-lg px-5 py-5 flex justify-between border-b-2 bg-white border-gray-200 items-center ">
            <img src={lellipse} alt="" className="h-20 mr-4" />
            <div className="">
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
      </div>
    </div>
  );
};

export default FriendList;
