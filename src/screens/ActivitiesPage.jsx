import React, { useReducer } from "react";
import {
  faPersonBiking,
  faPersonRunning,
  faHiking,
  faPersonSwimming,
  faPersonSkiingNordic,
  faPersonFalling,
} from "@fortawesome/free-solid-svg-icons";

import ActivityCheckbox from "../components/Activity/ActivityCheckbox";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  return {
    ...state,
    [`checked${action.id}`]: !state[`checked${action.id}`],
  };
};

const ActivitiesPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
  });

  return (
    <div className="md:py-5 flex flex-col mx-auto items-center md:bg-white rounded-lg md:w-96">
      <h1 className="text-2xl p-12 text-green-500  font-bold  ">
        {" "}
        Hey Gaurav, <br />
        what activities are you involved in?
      </h1>
      <div className="card flex flex-wrap items-center justify-center -mt-3 ">
        <ActivityCheckbox
          checked={state.checked1}
          onClick={() => dispatch({ id: 1 })}
          name="Cycling"
          icon={faPersonBiking}
        />

        <ActivityCheckbox
          checked={state.checked2}
          onClick={() => dispatch({ id: 2 })}
          name="Running"
          icon={faPersonRunning}
        />

        <ActivityCheckbox
          checked={state.checked3}
          onClick={() => dispatch({ id: 3 })}
          name="Hiking"
          icon={faHiking}
        />

        <ActivityCheckbox
          checked={state.checked4}
          onClick={() => dispatch({ id: 4 })}
          name="Swimming"
          icon={faPersonSwimming}
        />

        <ActivityCheckbox
          checked={state.checked5}
          onClick={() => dispatch({ id: 5 })}
          name="Skiing"
          icon={faPersonSkiingNordic}
        />

        <ActivityCheckbox
          checked={state.checked6}
          onClick={() => dispatch({ id: 6 })}
          name="Cardio"
          icon={faPersonFalling}
        />
        <Link to="/">
          <button className="bg-green-500 rounded-lg h-10 w-80 text-white mb-20">
            {" "}
            Next{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ActivitiesPage;
