import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faPersonRunning,
  faHiking,
  faPersonSwimming,
  faPersonSkiingNordic,
  faPersonFalling,
} from "@fortawesome/free-solid-svg-icons";

import ActivityCheckbox from "../components/Activity/ActivityCheckbox";

const reducer = (state, action) => {
  return {
    ...state,
    [`checked${action.id}`]: state[`checked${action.id}`],
  };
};

const ActivitiesPage = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);

  return (
    <div className="md:py-5 flex flex-col mx-auto items-center md:bg-white rounded-lg md:w-96">
      <h1 className="text-2xl p-12 text-green-500  font-bold  ">
        {" "}
        Hey Gaurav, <br />
        what activities are you involved in?
      </h1>
      <div className="card flex flex-wrap items-center justify-center -mt-3 ">
        <ActivityCheckbox
          checked={checked1}
          onClick={() => setChecked1(!checked1)}
          name="Cycling"
          icon={faPersonBiking}
        />
        {/* <div
          onClick={() => setChecked1(!checked1)}
          className="group  w-32 h-28 p-8 border-2 rounded-lg relative hover:bg-green-500  border-gray flex flex-col mb-5 items-center justify-center"
        >
          <input
            type="checkbox"
            checked={checked1}
            onChange={() => setChecked1(!checked1)}
            className="group justify-start absolute left-2 top-3 text-green-500 group-hover:bg-green-500     "
          />
          <FontAwesomeIcon
            className="text-green-500 group-hover:text-white"
            icon={faPersonBiking}
            fontSize={40}
          />
          <h3 className="text-sm mt-1 absolute bottom-2 text-green-500 group-hover:text-white">
            Cycling
          </h3>
        </div> */}
        <div
          onClick={() => setChecked2(!checked2)}
          className=" group w-32 h-28 p-8 border-2 rounded-lg relative hover:bg-green-500  border-gray flex flex-col mb-5 items-center justify-center  "
        >
          <input
            type="checkbox"
            checked={checked2}
            onChange={() => setChecked2(!checked2)}
            className="justify-start absolute left-2 top-3 text-green-500 group-hover:text-green-500 group-hover:bg-green-500"
          />
          <FontAwesomeIcon
            icon={faPersonRunning}
            className="text-green-500 group-hover:text-white"
            fontSize={40}
          />
          <h3 className="text-sm mt-1 absolute bottom-2">Running</h3>
        </div>
        <div
          onClick={() => setChecked3(!checked3)}
          className=" group w-32 h-28 p-8 border-2 rounded-lg relative hover:bg-green-500 border-gray flex flex-col mb-5 items-center justify-center  "
        >
          <input
            type="checkbox"
            checked={checked3}
            onChange={() => setChecked3(!checked3)}
            className="justify-start absolute left-2 top-3 text-green-500 group-hover:text-green-500 group-hover:bg-green-500"
          />
          <FontAwesomeIcon
            icon={faHiking}
            className="text-green-500 group-hover:text-white"
            fontSize={40}
          />
          <h3 className="text-sm mt-1 absolute bottom-2">Hiking</h3>
        </div>
        <div
          onClick={() => setChecked4(!checked4)}
          className=" group w-32 h-28 p-8 border-2 rounded-lg relative hover:bg-green-500 border-gray flex flex-col mb-5 items-center justify-center  "
        >
          <input
            type="checkbox"
            onChange={() => setChecked4(!checked4)}
            checked={checked4}
            className="justify-start absolute left-2 top-3 text-green-500 group-hover:text-green-500 group-hover:bg-green-500"
          />
          <FontAwesomeIcon
            className="text-green-500 group-hover:text-white"
            icon={faPersonSwimming}
            fontSize={40}
          />
          <h3 className="text-sm mt-1 absolute bottom-2">Swimming</h3>
        </div>
        <div
          onClick={() => setChecked5(!checked5)}
          className=" group w-32 h-28 p-8 border-2 rounded-lg relative hover:bg-green-500 border-gray flex flex-col mb-5 items-center justify-center  "
        >
          <input
            type="checkbox"
            checked={checked5}
            onChange={() => setChecked5(!checked5)}
            className="justify-start absolute left-2 top-3 text-green-500 group-hover:text-green-500 group-hover:bg-green-500"
          />
          <FontAwesomeIcon
            className="text-green-500 group-hover:text-white"
            icon={faPersonSkiingNordic}
            fontSize={40}
          />
          <h3 className="text-sm mt-1 absolute bottom-2">Swimming</h3>
        </div>
        <div
          onClick={() => setChecked6(!checked6)}
          className=" group w-32 h-28 p-8 border-2 rounded-lg relative hover:bg-green-500 border-gray flex flex-col mb-5 items-center justify-center  "
        >
          <input
            type="checkbox"
            checked={checked6}
            onChange={() => setChecked6(!checked6)}
            className="justify-start absolute left-2 top-3 text-green-500 group-hover:text-green-500 group-hover:bg-green-500"
          />
          <FontAwesomeIcon
            className="text-green-500 group-hover:text-white"
            icon={faPersonFalling}
            fontSize={40}
          />
          <h3 className="text-sm mt-1 absolute bottom-2">Cardio</h3>
        </div>
        <button className="bg-green-500   rounded-lg h-10  w-80 text-white">
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default ActivitiesPage;
