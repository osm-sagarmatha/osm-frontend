import React from "react";
import userImg from "../images/Group 49.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTrophy,
  faClockRotateLeft,
  faUserGroup,
  faGreaterThan,
  faBell,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { BsShieldFillCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className="md:py-5 py-10 px-5 mx-auto md:bg-white md:w-96 flex flex-col">
      <div className="flex justify-center items-center">
        <img src={userImg} className=" object-contain w-16" alt="userImage" />
        <h1 className="text-2xl py-5 px-4   font-bold text-left ">
          {" "}
          Gaurav Shah
        </h1>
        <button
          type="button"
          className="bg-green-500 px-4 py-1 text-sm text-white rounded-md"
        >
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
            <FontAwesomeIcon icon={faGreaterThan} className="text-gray-400" />
          </div>
          <Link to="/achievements" className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faTrophy}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full">Achievements</h2>
            <FontAwesomeIcon icon={faGreaterThan} className="text-gray-400" />
          </Link>
          <div className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full ">History</h2>
            <FontAwesomeIcon icon={faGreaterThan} className="text-gray-400" />
          </div>
          <Link to="/friend-list" className="flex justify-center items-center">
            <FontAwesomeIcon
              icon={faUserGroup}
              fontSize={20}
              className="text-green-500"
            />
            <h2 className="px-3 py-5 w-full">Friends</h2>
            <FontAwesomeIcon icon={faGreaterThan} className="text-gray-400" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col mx-auto mt-3">
        <div className="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md  ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">
            Notification
          </h5>
          <div className="flex justify-center items-center ">
            <FontAwesomeIcon
              icon={faBell}
              fontSize={20}
              className="text-green-500"
            />
            <div className=" ml-3 text-sm font-medium w-full text-left ">
              Pop up Notifications
            </div>
            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />

              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none   dark:peer-focus:ring-green-500 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green-500"></div>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto mt-3 mb-10 ">
        <div className="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md  ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight ">Other</h5>
          <div className="flex justify-center items-center mb-3">
            <BsShieldFillCheck fontSize={23} className="text-green-500" />
            <div className=" ml-3 text-sm font-medium w-full text-left ">
              Privacy
            </div>
          </div>
          <div className="flex justify-center items-center  ">
            <FontAwesomeIcon
              icon={faGear}
              fontSize={20}
              className="text-green-500"
            />
            <div className=" ml-3 text-sm font-medium w-full text-left ">
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
