import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

import signup from "../images/SignUpHero.png";

import { useAuthAction } from "../contexts/auth";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Signup = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    name: "",
    email: "",
    age: 0,
    sex: "",
    weight: 0,
    password: "",
    confirmPassword: "",
    show: false,
    confirmShow: false,
  });

  const { register } = useAuthAction();

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, age, weight, sex } = state;
    register({ name, email, password, age, weight, sex });
  };

  return (
    <div className="md:py-5 flex flex-col mx-auto items-center md:bg-white rounded-lg md:w-96">
      <img
        src={signup}
        className="md:w-96 w-11/12 relative bottom-4 md:bottom-0 object-contain h-1/2 md:h-full"
        alt="Home"
      />
      <h1 className="text-4xl text-blue-600 font-bold">Join Firfirey</h1>
      <h3 className="p-4 text-center w-full"></h3>
      <form onSubmit={onSubmit}>
        <div className="login_name">
          <input
            type="text"
            value={state.name}
            placeholder="Full Name"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) => dispatch({ name: "name", value: e.target.value })}
          />
        </div>

        <div className="login_name">
          <input
            type="email"
            value={state.email}
            placeholder="Email"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) => dispatch({ name: "email", value: e.target.value })}
          />
        </div>

        <div className="login_name">
          <input
            type="number"
            value={state.age || ""}
            placeholder="Age"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) => dispatch({ name: "age", value: +e.target.value })}
          />
        </div>

        <div className="login_name">
          <input
            type="number"
            value={state.weight || ""}
            placeholder="Weight"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) =>
              dispatch({ name: "weight", value: +e.target.value })
            }
          />
        </div>

        <div className="login_name">
          <select
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md text-gray-500"
            value={state.sex}
            onChange={(e) => dispatch({ name: "sex", value: e.target.value })}
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="login_password relative">
          <input
            type={!state.show ? "password" : "text"}
            value={state.password}
            placeholder="Password"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) =>
              dispatch({ name: "password", value: e.target.value })
            }
          />
          <FontAwesomeIcon
            icon={!state.show ? faEye : faEyeSlash}
            onClick={() => dispatch({ name: "show", value: !state.show })}
            className="text-gray-500 absolute right-3 top-3 cursor-pointer"
          />
        </div>
        <div className="login_cpassword relative">
          <input
            type={!state.confirmShow ? "password" : "text"}
            value={state.confirmPassword}
            placeholder="Confirm Password"
            className="border-2 border-gray px-3 py-1 w-80 mb-3 rounded-md"
            onChange={(e) =>
              dispatch({ name: "confirmPassword", value: e.target.value })
            }
          />
          <FontAwesomeIcon
            icon={!state.confirmShow ? faEye : faEyeSlash}
            onClick={() =>
              dispatch({ name: "confirmShow", value: !state.confirmShow })
            }
            className="text-gray-500 absolute right-3 top-3 cursor-pointer"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 rounded-lg h-10 w-80 text-white"
        >
          {" "}
          Sign Up{" "}
        </button>
      </form>
      <h3 className="py-2 mb-16 ">
        Already a member?
        <Link className="text-blue-600" to="/login">
          &nbsp;Login
        </Link>
      </h3>
    </div>
  );
};

export default Signup;
