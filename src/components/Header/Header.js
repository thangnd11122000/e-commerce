import React from "react";
import { useSelector } from "react-redux";
import CartSidebar from "./CartSidebar";
import Navbar from "./Navbar";
import Navigation from "./Navigation";

const Header = () => {
  const isOpenMenuSidebar = useSelector(
    (state) => state.header.isOpenMenuSidebar
  );
  const isOpenCartSidebar = useSelector(
    (state) => state.header.isOpenCartSidebar
  );
  return (
    <header>
      <div
        className={isOpenMenuSidebar | isOpenCartSidebar ? "overlay" : ""}
      ></div>
      <Navbar />
      <hr />
      <Navigation />
      <CartSidebar />
    </header>
  );
};

export default Header;
