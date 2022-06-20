import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import signup from "../images/SignUpHero.png";
const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);

  return (
    <div className="md:py-5 flex flex-col mx-auto items-center md:bg-white rounded-lg md:w-96">
      <img
        src={signup}
        className="md:w-96 w-11/12 relative bottom-4 md:bottom-0 object-contain h-1/2 md:h-full"
        alt="Home"
      />
      <h1 className="text-4xl text-blue-600  font-bold ">Hello Again</h1>
      <h3 className="p-4 text-center w-full ">Join MugFit</h3>
      <form>
        <div className="login_name  ">
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="login_password relative ">
          <input
            type={!show ? "password" : "text"}
            value={password}
            placeholder="Password"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={!show ? faEye : faEyeSlash}
            onClick={() => setShow(!show)}
            className="text-gray-500 absolute right-3 top-3 cursor-pointer"
          />
        </div>
        <div className="login_cpassword relative ">
          <input
            type={!confirmShow ? "password" : "text"}
            value={confirmPassword}
            placeholder="Confirm Password"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={!confirmShow ? faEye : faEyeSlash}
            onClick={() => setConfirmShow(!confirmShow)}
            className="text-gray-500 absolute right-3 top-3 cursor-pointer"
          />
        </div>
      </form>
      <button className="bg-green-500   rounded-lg h-10  w-80 text-white">
        {" "}
        Sign Up{" "}
      </button>
      <h3 className="py-2 mb-2 ">
        Already a member?
        <Link className="text-blue-600" to="/login">
          &nbsp;Login
        </Link>
      </h3>
    </div>
  );
};

export default Signup;
