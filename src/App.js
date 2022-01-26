import React from "react"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MobileBottom from "./components/Mobile/MobileBottom"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import ProductList from "./pages/Catalog"
import { useSelector } from "react-redux"
import Detail from "./pages/Detail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import BlogHome from "./pages/BlogHome"
import BlogCategory from "./pages/BlogCategory"
import BlogDetail from "./pages/BlogDetail"

function App() {
  const isOpenMenuSidebar = useSelector(
    (state) => state.toggle.isOpenMenuSidebar
  )
  const isOpenCartSidebar = useSelector(
    (state) => state.toggle.isOpenCartSidebar
  )
  const isOpenFilter = useSelector((state) => state.toggle.isOpenFilter)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<ProductList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogHome />} />
        <Route path="/blog-category" element={<BlogCategory />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
      </Routes>
      <Footer />
      <MobileBottom />
      <div
        className={`${
          isOpenMenuSidebar | isOpenCartSidebar | isOpenFilter ? "overlay" : ""
        }`}
      ></div>
    </div>
  )
}

export default App
