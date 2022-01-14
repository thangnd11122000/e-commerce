import {
  Adb,
  FavoriteBorderOutlined,
  Menu,
  PersonOutline,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  openCartSidebar,
  openMenuSidebar,
} from "../../features/header/headerSlice"
import { Action } from "./Action"

const Navbar = ({ hideOnScrollDown = false, isScroll }) => {
  const dispatch = useDispatch()

  return (
    <div
      className={`navbar ${isScroll ? "scroll" : ""} ${
        isScroll && hideOnScrollDown ? "scroll-up" : ""
      }`}
    >
      <div className="navbar__logo">
        <Menu
          className="navbar__logo--toggle"
          onClick={() => dispatch(openMenuSidebar())}
        />
        <a href="/" className="navbar__logo--name">
          Shopvip
        </a>
        <a href="/" className="navbar__logo--icon">
          <Adb />
        </a>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Tra cứu sản phẩm" />
        <button>
          <Search />
        </button>
      </div>
      <div className="navbar__actions">
        <Action
          icon={<PersonOutline />}
          topText="Tài khoản"
          bottomText="Đăng nhập"
          link="/"
        />
        <Action
          icon={<FavoriteBorderOutlined />}
          topText="Yêu thích"
          bottomText="Danh sách"
          link="/"
        />
        <div
          className="navbar__action"
          onClick={() => dispatch(openCartSidebar())}
          style={{ cursor: "pointer" }}
        >
          <ShoppingBagOutlined />
          <div>
            <span className="navbar__action--top">Gior hang</span>
            <span className="navbar__action--bottom">0</span>
          </div>
          <span className="navbar__badge">0</span>
        </div>
      </div>
      <div className="navbar__cart" onClick={() => dispatch(openCartSidebar())}>
        <span className="navbar__badge">0</span>
        <ShoppingBagOutlined />
      </div>
    </div>
  )
}

export default Navbar
