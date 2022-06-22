import React from "react";
import axios from "axios";

const AuthStateContext = React.createContext();
const AuthActionContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "START":
      return { ...state, loading: true };

    case "SUCCESS":
      return {
        ...state,
        loading: false,
        token: action.token,
        errors: [],
        user: action.user,
      };

    case "ERROR":
      return {
        ...state,
        loading: false,
        token: null,
        user: null,
        errors: action.errors,
      };

    case "RESET":
      return { ...state, loading: false, token: null, user: null, errors: [] };

    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  const [state, dispatch] = React.useReducer(reducer, {
    user: user ? JSON.parse(user) : {},
    token,
    loading: false,
    errors: [],
  });

  const register = async ({ name, email, password, age, sex, weight }) => {
    dispatch({ type: "START" });

    const { data } = await axios.post(
      "http://localhost:5000/api/auth/signup",
      { name, email, password, age, sex, weight },
      { headers: { "Content-Type": "application/json" } }
    );

    if (data.success === true) {
      dispatch({ type: "SUCCESS", token: data.token, user: data.user });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      dispatch({ type: "ERROR", errors: data.errors });
    }
  };

  const login = async ({ email, password }) => {
    dispatch({ type: "START" });

    const { data } = await axios.post(
      "http://localhost:5000/api/auth/login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    if (data.success === true) {
      dispatch({ type: "SUCCESS", token: data.token, user: data.user });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      dispatch({ type: "ERROR", errors: data.errors });
    }
  };

  const logout = async () => {
    dispatch({ type: "RESET" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthActionContext.Provider value={{ login, register, logout }}>
        {children}
      </AuthActionContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const state = React.useContext(AuthStateContext);

  if (state === undefined)
    throw new Error("useAuth can only be used inside AuthProvider");

  return state;
};

const useAuthAction = () => {
  const actions = React.useContext(AuthActionContext);

  if (actions === undefined)
    throw new Error("useAuth can only be used inside AuthProvider");

  return actions;
};

export { AuthProvider, useAuthAction, useAuthState };
