import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Header />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
