import React from "react";
import { Link } from "react-router-dom";
import Hero from "../images/Hero.png";
export const Home = () => {
  return (
    <div className="md:py-5 flex flex-col mx-auto justify-center   items-center md:bg-white rounded-lg md:w-96">
      <img
        src={Hero}
        className="md:w-96 w-11/12 object-contain h-1/2 md:h-full"
        alt="Home"
      />
      <h1 className="text-4xl text-blue-600  font-bold ">Welcome to MugFit</h1>
      <h3 className="p-4 w-full ">
        Leverage agile frameworks to provide a robust synopsis for high level
        overview. This is the dummy text, I need to learn copywriting.
      </h3>
      <button className="bg-green-500   rounded-lg h-10  w-80 text-white">
        {" "}
        Get Started{" "}
      </button>
      <h3 className="py-2 mb-2 ">
        Already a member?{" "}
        <Link className="text-blue-600" to="/login">
          Login
        </Link>
      </h3>
    </div>
  );
};
