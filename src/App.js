import React from "react"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MobileBottom from "./components/Mobile/MobileBottom"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import ProductList from "./pages/Catalog"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<ProductList />} />
      </Routes>
      <Footer />
      <MobileBottom />
    </div>
  )
}

export default App
