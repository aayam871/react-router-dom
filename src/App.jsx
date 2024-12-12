import React from "react";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import Categories from "./components/Categories.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Categories /> */}
      <Footer />
    </div>
  );
}

export default App;
