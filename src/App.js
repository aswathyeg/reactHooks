import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/shoppingCart/Cart";
// import Ingredients from "./components/Ingredients/Ingredients";
// import { AuthContext } from "./context/auth-context";
// import Auth from "./components/Auth";
import Header from "./components/shoppingCart/Header";
import Home from "./components/shoppingCart/Home";

function App() {
  // const authContext = useContext(AuthContext);
  // let content = <Auth />;
  // if (authContext.isAuth) {
  //   content = <Ingredients />;
  // }
  // return content;
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
