import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginHandler = () => {
    setIsAuthenticated(true);
  };
  return (
    <AuthContext.Provider
      value={{ isAuth: isAuthenticated, login: loginHandler }} //one value being used in App and other in Auth compopnent
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
