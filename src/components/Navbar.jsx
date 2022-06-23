import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiRunningNinja } from "react-icons/gi";
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
import { Link, NavLink } from "react-router-dom";

import { useAuthAction } from "../contexts/auth";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { logout } = useAuthAction();

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="nav flex justify-between mb-10  ">
      <div className="justify-between w-full fixed z-[1000] bg-white h-[4.5rem] md:bg-transparent">
        <div className="navbar fixed z-50 p-6 w-10">
          <FontAwesomeIcon
            onClick={toggleSidebar}
            fontSize={30}
            icon={faBars}
            className="cursor-pointer"
          />
        </div>
        <nav
          className={`nav-menu-active bg-green-500 w-52 z-50 h-screen flex fixed top-0 transform left-0 transition-transform duration-200  ${
            showSidebar
              ? `left-0 translate-x-0 ease-in`
              : " bg-blue-500 -translate-x-full ease-out -left-full "
          }`}
        >
          <ul className="nav-menu-items text-white" onClick={toggleSidebar}>
            <div className=" w-full h-20  ">
              <Link to="#" className="menu-bars fixed left-4 top-5">
                <FontAwesomeIcon icon={faXmark} fontSize={30} />
              </Link>
            </div>
            <div className="px-8 text-lg font-semibold">
              <li>
                <NavLink
                  className="flex items-center  px-3  mb-5 rounded-md space-x-2 hover:bg-white hover:text-green-500"
                  to="/"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "white" : "",
                      color: isActive ? "green" : "",
                    };
                  }}
                >
                  <FontAwesomeIcon icon={faHouse} />
                  <h1>Home</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center  px-3 mb-5 rounded-md space-x-2 hover:bg-white hover:text-green-500"
                  to="/profile"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "white" : "",
                      color: isActive ? "green" : "",
                    };
                  }}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <h1>Profile</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center  px-3 mb-5 rounded-md space-x-2 hover:bg-white hover:text-green-500"
                  to="/activities"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "white" : "",
                      color: isActive ? "green" : "",
                    };
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  <h1>Activity</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center  px-3 mb-5 rounded-md space-x-2 hover:bg-white hover:text-green-500"
                  to="/community"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "white" : "",
                      color: isActive ? "green" : "",
                    };
                  }}
                >
                  <FontAwesomeIcon icon={faComments} />
                  <h1>Clubs</h1>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="flex items-center  px-3 mb-5 rounded-md space-x-2 hover:bg-white hover:text-green-500"
                  to="/redeem"
                  style={({ isActive }) => {
                    return {
                      backgroundColor: isActive ? "white" : "",
                      color: isActive ? "green" : "",
                    };
                  }}
                >
                  <FontAwesomeIcon icon={faGift} />
                  <h1>Redeem</h1>
                </NavLink>
              </li>
              <li>
                <button
                  className="flex items-center absolute bottom-2 px-3 mb-5 rounded-md space-x-2 hover:bg-white hover:text-green-500"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  <h1>Logout</h1>
                </button>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <Link to="/redeem" className="flex fixed right-5 top-4 z-[1000] p-2">
        <GiRunningNinja
          fontSize={30}
          className="text-orange-500 mr-2 font-bold "
        />
        <h2 className="text-orange-500 font-bold  ">6969</h2>
      </Link>
    </div>
  );
};

export default Navbar;
