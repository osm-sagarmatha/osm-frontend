import React from "react";
import ellipse from "../images/Ellipse.png";
import rect from "../images/Rectangle.png";
import rect2 from "../images/Rectangle 2.png";
import rect3 from "../images/rectangle3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

const Explore = () => {
  return (
    <div className="md:py-5 py-10  mx-auto md:bg-white md:w-96 flex flex-col">
      <div className="border-b-2 px-5 border-gray-200 pb-2">
        <h1 className="text-blue-500 text-2xl  mb-2 font-bold">
          Discover Routes
        </h1>
        <p>
          Find the best routes recommended by the engine and reviewed by the
          community.
        </p>
      </div>
      <div className="px-5 py-5 flex justify-between bg-white items-center ">
        <img src={ellipse} alt="" className="h-20 mr-4" />
        <div>
          <h1 className="text-black  font-bold">Kira Lin</h1>
          <p>Shivapuri Hills is one of the most popular hiking in Kathmandu.</p>
        </div>
      </div>
      <div className="flex justify-evenly bg-white pb-6 items-center">
        <img src={rect} className="h-48" alt="" />
        <div className="space-y-3">
          <img src={rect2} className="h-24" alt="" />
          <img src={rect3} className="h-24" alt="" />
        </div>
      </div>
      <div className="px-5 py-5 flex bg-white justify-between border-b-2 border-gray-200 ">
        <div className="flex">
          <FontAwesomeIcon icon={faHeart} fontSize={20} />
          <p className="text-black ml-2">420 people liked this</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faArrowUpFromBracket} fontSize={20} />
          <button className="px-3 bg-green-500 text-white ml-2 rounded-lg">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
