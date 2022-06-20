import React from "react";

import Card from "../components/Card";
import group1 from "../images/Group 9.png";
import group2 from "../images/Group 10.png";
import group3 from "../images/Group 11.png";
import group4 from "../images/Group 12.png";
import group5 from "../images/Group 13.png";
import group6 from "../images/Group 14.png";
import NavigationBar from "../components/NavigationBar";

const Activities = () => {
  return (
    <div className="md:py-5 flex flex-col mx-auto items-left md:bg-white rounded-lg md:w-96">
      <h1 className="text-2xl p-12 text-green-500  font-bold text-left ">
        {" "}
        I want to
      </h1>
      <div className="card flex flex-wrap items-center justify-center -mt-3 ">
        <Card img={group1} />
        <Card img={group2} />
        <Card img={group3} />
        <Card img={group4} />
        <Card img={group5} />
        <Card img={group6} />
      </div>
      <NavigationBar />
    </div>
  );
};

export default Activities;
