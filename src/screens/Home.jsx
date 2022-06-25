import React from "react";
import { Link } from "react-router-dom";
import Hero from "../images/Hero.png";

const Home = () => {
  return (
    <div className="md:py-5 flex flex-col mx-auto justify-center  items-center md:bg-white rounded-lg md:w-96">
      <img
        src={Hero}
        className="md:w-96 w-11/12 object-contain h-1/2 md:h-full"
        alt="Home"
      />
      <h1 className="text-4xl text-blue-600  font-bold ">
        Welcome to Firfirey
      </h1>
      <h3 className="p-4 w-full ">
        Find the best possible routes personalized for you without any limits.
      </h3>
      <Link to={"/signup"}>
        <button className="bg-green-500   rounded-lg h-10  w-80 text-white">
          {" "}
          Get Started{" "}
        </button>
      </Link>
      <h3 className="py-2 mb-16 ">
        Already a member?{" "}
        <Link className="text-blue-600" to="/login">
          Login
        </Link>
      </h3>
    </div>
  );
};

export default Home;
