import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import CartPage from "./components/shoppingCart/CartPage";
//import Cart from "./components/shoppingCart/CartPage";

// import Header from "./components/shopping-context-reducer/Header";
// import Home from "./components/shopping-context-reducer/Home";
// import Cart from "./components/shopping-context-reducer/Cart";

import Header from "./components/artgallery/Header";
import Home from "./components/artgallery/Home";
import CartPage from "./components/artgallery/CartPage";
// const Home = React.lazy(() =>
//   import("./components/shopping-context-reducer/Home")
// );

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
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* </Suspense> */}
        <Routes>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
