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
import Login from "./pages/Login"
import Register from "./pages/Register"
import ChangeEmail from "./pages/ChangeEmail"
import ChangePhone from "./pages/ChangePhone"
import ForgotPassword from "./pages/ForgotPassword"
import ChangePassword from "./pages/ChangePassword"
import Contact from "./pages/Contact"
import UserInfo from "./pages/UserInfo"

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-email" element={<ChangeEmail />} />
        <Route path="/change-phone" element={<ChangePhone />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-info" element={<UserInfo />} />
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
