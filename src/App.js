import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import MobileBottom from "./components/Mobile/MobileBottom";
import Home from "./pages/Home";

function App() {
  const isOpenDropdown = useSelector((state) => state.header.isOpenDropdown);
  const isOpenMenuSidebar = useSelector(
    (state) => state.header.isOpenMenuSidebar
  );

  return (
    <div className="App">
      <Header />
      <Home />

      <MobileBottom />
    </div>
  );
}

export default App;
