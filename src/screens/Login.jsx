import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useAuthAction } from "../contexts/auth";

import loginImage from "../images/LoginHero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const { login } = useAuthAction();

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="md:py-5 flex flex-col mx-auto items-center md:bg-white rounded-lg md:w-96">
      <img
        src={loginImage}
        className="md:w-96 w-11/12 relative bottom-4 md:bottom-0 object-contain h-1/2 md:h-full"
        alt="Home"
      />
      <h1 className="text-4xl text-blue-600  font-bold ">Hello Again</h1>
      <h3 className="p-4 text-center w-full ">
        Welcome back you've been missed!
      </h3>
      <form onSubmit={onSubmit}>
        <div className="login_email">
          <input
            type="text"
            value={email}
            placeholder="E-mail"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_password relative">
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
        <button className="bg-green-500 rounded-lg h-10  w-80 text-white">
          {" "}
          Sign In{" "}
        </button>
      </form>
      <h3 className="py-2 mb-2 ">
        Not a member?
        <Link className="text-blue-600" to="/signup">
          &nbsp;Sign Up
        </Link>
      </h3>
    </div>
  );
};

export default Login;
