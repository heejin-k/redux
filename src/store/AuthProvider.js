import { createContext, useState, useReducer } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const defaultUser = {
  token: "",
  isLoggedIn: false,
};

const authReducer = (state, action) => {
  if (action.type === "LOGIN") {
    const updateToken = (token) => {
      return token;
    };
    return {
      token: updateToken,
      isLoggedIn: true,
    };
  }

  if (action.type === "LOGOUT") {
    const deleteToken = "";
    return {
      token: deleteToken,
      isLoggedIn: false,
    };
  }

  return defaultUser;
};

export const AuthProvider = ({ children }) => {
  const [userToken, dispatchUserToken] = useReducer(authReducer, defaultUser);

  const userLoggedIn = !!userToken;

  const loginHandler = (token) => {
    dispatchUserToken({ type: "LOGIN" });
  };

  const logoutHandler = () => {
    dispatchUserToken();
  };

  const userValue = {
    token: userToken,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={userValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
