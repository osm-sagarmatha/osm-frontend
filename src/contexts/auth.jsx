import React from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState("");

  const register = async ({ name, email, password, age, sex, weight }) => {
    const data = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, age, sex, weight }),
    }).then((res) => res.json());

    if (data.success === true) {
      setToken(token);
    } else {
      setError(data.errors[0]);
    }
  };

  const login = async ({ email, password }) => {
    const data = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    setToken(data.token);
  };

  return (
    <AuthContext.Provider value={{ token, login, register, error }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const user = React.useContext(AuthContext);

  if (user === undefined)
    throw new Error("useAuth can only be used inside AuthProvider");

  return user;
};

export { AuthContext, useAuth, AuthProvider };
