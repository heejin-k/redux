import { createContext, useReducer } from "react";

const AuthContext = createContext();
const user = {
  username: "",
  accountname: localStorage.getItem("account"),
  intro: "",
  token: localStorage.getItem("testToken"),
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "login":
      const { username, token, accountname, intro } = action.payload;
      return { ...state, username, accountname, intro, token };
    case "logout":
      return { ...state, token: null, accountname: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, user);

  const loginHandler = (data) => {
    localStorage.setItem("testToken", data.token);
    localStorage.setItem("account", data.accountname);
    dispatch({ type: "login", payload: data });
  };

  const logoutHandler = () => {
    localStorage.removeItem("testToken");
    localStorage.removeItem("account");
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider value={{ authState, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
