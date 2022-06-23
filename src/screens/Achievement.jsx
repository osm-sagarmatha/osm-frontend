import React from "react";
import userImg from "../images/Group 49.png";
import veteran from "../images/veteran.png";
import collector from "../images/collector.png";
import contributer from "../images/contributor.png";
import community from "../images/community.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "../contexts/auth";

const Achievement = () => {
  const state = useAuthState();

  return (
    <div className="md:py-5 py-3 px-5 mx-auto md:bg-white md:w-96 flex flex-col">
      <div className="flex  w-full ml-5">
        <img src={userImg} className=" object-contain w-16" alt="userImage" />
        <div className="text-2xl py-10 px-4   font-bold text-left ">
          {" "}
          {state.user.name}
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faAward}
                fontSize={20}
                className="text-green-500"
              />
              <p className="text-sm ml-1 ">13</p>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-sm ml-1 text-green-500">Ranked #37</p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mt-4">
        <h1 className="text-2xl px-5 text-blue-500 font-bold">Achievements</h1>
        <div className=" flex flex-col ">
          <img src={veteran} alt="" />
          <img src={community} alt="" />
          <img src={contributer} alt="" />
          <img src={collector} className="mb-20" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
