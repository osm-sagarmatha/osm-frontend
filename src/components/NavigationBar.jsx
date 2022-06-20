import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faHouse,
  faUser,
  faHeart,
  faComments,
  faGift,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    // <!-- component -->
    <div className="w-full ">
      <section
        id="bottom-navigation"
        className="md:w-96 w-full mx-auto fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <div id="tabs" className="flex justify-between">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "green" : "",
              };
            }}
            className="w-full  hover:text-green-500 justify-center  text-center pt-3 pb-3"
          >
            <FontAwesomeIcon
              icon={faHouse}
              fontSize={25}
              className="text-gray-400 hover:text-green-500"
            />
          </NavLink>
          <NavLink
            to="/activities"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "green" : "",
              };
            }}
            className="w-full  hover:text-green-500 justify-center  text-center pt-3 pb-3"
          >
            <FontAwesomeIcon
              icon={faHeart}
              fontSize={25}
              className="text-gray-400 hover:text-green-500"
            />
          </NavLink>
          <NavLink
            to="/chat"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "green" : "",
              };
            }}
            className="w-full  hover:text-green-500 justify-center  text-center pt-3 pb-3"
          >
            <FontAwesomeIcon
              icon={faComments}
              fontSize={25}
              className="text-gray-400 hover:text-green-500"
            />
          </NavLink>

          <NavLink
            to="/profile"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "white" : "",
                color: isActive ? "green" : "",
              };
            }}
            className="w-full  hover:text-green-500 justify-center  text-center pt-3 pb-3"
          >
            <FontAwesomeIcon
              icon={faUser}
              fontSize={25}
              className="text-gray-400 hover:text-green-500"
            />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default NavigationBar;
