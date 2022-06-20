import React from "react";
import userImg from "../images/Group 49.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTrophy,
  faClockRotateLeft,
  faUserGroup,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  return (
    <div className="md:py-5 py-10 px-5 mx-auto flex flex-col">
      <div className="flex justify-center items-center">
        <img src={userImg} className=" object-contain w-16" alt="userImage" />
        <h1 className="text-2xl py-8 px-4 text-green-500  font-bold text-left ">
          {" "}
          Gaurav Shah
        </h1>
        <button type="button" className="bg-green-500 px-4 text-md text-white">
          Edit
        </button>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="block px-6 py-2 justify-center items-center bg-white rounded-2xl border border-gray-200 shadow-md hover:bg-gray-100 ">
          <h5 className=" text-lg font-bold tracking-tight text-center ">
            172cm
          </h5>
          <p className="font-normal  text-sm text-gray-400 text-center">
            Height
          </p>
        </div>
        <div className="block px-6 py-2 justify-center items-center bg-white rounded-2xl border border-gray-200 shadow-md hover:bg-gray-100 ">
          <h5 className=" text-lg font-bold tracking-tight text-center ">
            70kg
          </h5>
          <p className="font-normal  text-sm text-gray-400 text-center">
            Weight
          </p>
        </div>
        <div className="block px-6 py-2 justify-center items-center bg-white rounded-2xl border border-gray-200 shadow-md hover:bg-gray-100 ">
          <h5 className=" text-lg font-bold tracking-tight text-center ">
            23 yrs
          </h5>
          <p className="font-normal  text-sm text-gray-400 text-center">Age</p>
        </div>
      </div>
      <div className="flex flex-col mx-auto mt-3">
        <div className="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md  ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">Account</h5>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faUser}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full">Personal Data</h2>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="text-gray-400"
              size={24}
            />
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faTrophy}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full">Achievements</h2>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="text-gray-400"
              size={24}
            />
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full ">History</h2>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="text-gray-400"
              size={24}
            />
          </div>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faUserGroup}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full">Friends</h2>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="text-gray-400"
              size={24}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto mt-3">
        <div className="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md  ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">Account</h5>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faUser}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full">Personal Data</h2>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="text-gray-400"
              size={24}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
