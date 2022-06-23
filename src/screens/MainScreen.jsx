import React from "react";
import image from "../images/Mask group.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const MainScreen = () => {
  return (
    <div className="main md:py-5 flex flex-col mx-auto  md:bg-white rounded-lg md:w-96">
      <div className="relative  mx-auto">
        <h1 className="text-2xl pt-10  text-green-500  w-full font-bold  ">
          {" "}
          Hi Gaurav
        </h1>{" "}
        <h2 className="text-gray-500  py-1  w-full">June 21, 2022</h2>
        <img src={image} alt="image" className="h-72 object-contain" />
        <div className="flex justify-between items-center">
          <div className=" absolute bottom-4 left-2  px-3 py-2 justify-center items-center  bg-white rounded-2xl border border-gray-200 shadow-md  ">
            <h5 className=" text-lg font-bold tracking-tight text-center ">
              Today's Activity
            </h5>
            <div className="flex justify-between mb-1">
              <p className="font-normal  text-sm text-gray-400 ">
                <span className="text-green-500">2.3</span> hrs
              </p>
              <p className="font-normal  text-sm text-gray-400 ">
                <span className="text-green-500">9</span> km
              </p>
            </div>
            <Link to="/route">
              <button className="bg-green-500 text-white text-sm px-3 mx-auto text-center w-full rounded-md ">
                Start Hiking
              </button>
            </Link>
          </div>
          <div className=" absolute bottom-2 right-2  px-6 py-2 justify-center items-center  bg-white rounded-2xl border border-gray-200 shadow-md  ">
            <div className=" border-b-2 border-gray-100 pb-2 font-bold tracking-tight text-center flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faShoePrints}
                fontSize={20}
                className="-rotate-90 text-blue-500"
              />
              <div className="ml-3">
                <h2 className="font-bold text-lg">7891</h2>
                <h3 className="text-gray-500 text-sm">Steps</h3>
              </div>
            </div>
            <div className="  font-bold tracking-tight text-center flex justify-center items-center ">
              <FontAwesomeIcon
                icon={faHeart}
                fontSize={20}
                className=" text-red-500"
              />
              <div className="ml-3">
                <h2 className="font-bold text-lg">189</h2>
                <h3 className="text-gray-500 text-sm">Calories</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule  ">
        <div className="flex justify-between mt-8 mb-3">
          <h1 className="text-2xl  text-blue-500   px-8 font-bold  ">
            {" "}
            My Schedule
          </h1>{" "}
          <h1 className=" text-gray-500 pr-6   font-bold  "> View All</h1>{" "}
        </div>
        <div className="px-5 py-2 mx-6 mb-4 justify-center items-center  bg-white rounded-2xl border border-gray-200 shadow-md  ">
          <h5 className=" text-lg font-bold tracking-tight  ">
            Hiking behind the Hill.
          </h5>
          <div className="flex justify-between mb-1">
            <p className="font-normal  text-sm text-gray-400 ">
              June 21, 2022 | 6:00 AM
            </p>
          </div>
          <button className="bg-green-500 text-white text-sm px-3 py-1 text-center  rounded-md ">
            Invite
          </button>
        </div>
        <div className="px-5 py-2 mx-6 mb-20 justify-center items-center  bg-white rounded-2xl border border-gray-200 shadow-md  ">
          <h5 className=" text-lg font-bold tracking-tight  ">
            Hiking behind the Hill.
          </h5>
          <div className="flex justify-between mb-1">
            <p className="font-normal  text-sm text-gray-400 ">
              June 21, 2022 | 6:00 AM
            </p>
          </div>
          <button className="bg-green-500 text-white text-sm px-3 py-1 text-center  rounded-md ">
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
