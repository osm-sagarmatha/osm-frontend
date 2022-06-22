import React from "react";

import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faPersonRunning,
  faHiking,
  faPersonSwimming,
  faPersonSkiingNordic,
  faPersonFalling,
  faBicycle,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
import chart from "../images/chart.png";
import map from "../images/Map.png";
import route from "../images/route.png";
import equip from "../images/equip.png";
import fav from "../images/fav.png";
const Activities = () => {
  return (
    <div className="md:py-5 flex flex-col mx-auto items-left md:bg-white rounded-lg md:w-96">
      <h1 className="text-2xl px-12 py-8 text-blue-500  font-bold text-left ">
        {" "}
        Gaurav's Activity
      </h1>
      <img src={chart} className="w-72 mx-auto" alt="" />
      <div className="activites">
        <h1 className="font-bold text-2xl px-8 py-8"> Activities</h1>
        <div className="card flex  items-center justify-evenly -mt-3 ">
          <div className="flex flex-col items-center">
            <Card icon={faPersonBiking} size={30} />
            <h1>Cycling</h1>
          </div>
          <div className="flex flex-col items-center">
            <Card icon={faHiking} size={30} />
            <h1>Hiking</h1>
          </div>
          <div className="flex flex-col items-center">
            <Card icon={faRunning} size={30} />
            <h1>Jogging</h1>
          </div>
          <div className="flex flex-col items-center">
            <Card icon={faPersonFalling} size={30} />
            <h1>Exercise</h1>
          </div>
        </div>
      </div>
      <div className="servies flex flex-wrap justify-center mb-14">
        <div className="services  p-5">
          <img src={map} alt="" className="w-28 object-contain" />
        </div>
        <div className="services  p-5">
          <img src={route} alt="" className="w-28 object-contain" />
        </div>
        <div className="services  p-5">
          <img src={fav} alt="" className="w-28 object-contain" />
        </div>
        <div className="services  p-5">
          <img src={equip} alt="" className="h-28 object-contain  " />
        </div>
      </div>
    </div>
  );
};

export default Activities;
