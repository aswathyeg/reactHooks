import React, { useState } from "react";
const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginHandler = () => {
    setIsAuthenticated(true);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth: isAuthenticated, login: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
