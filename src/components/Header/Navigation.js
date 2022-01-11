import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  closeDropdown,
  closeMenuSidebar,
  handleDropdown,
} from "../../features/header/headerSlice";
import CategoriesDropdown from "./CategoriesDropdown";

const pages = [
  { name: "Trang chủ", link: "/" },
  { name: "Cửa hàng", link: "/" },
  { name: "Về chúng tôi", link: "/" },
  { name: "Liên hệ", link: "/" },
  { name: "Bài viết", link: "/" },
];

const Navigation = () => {
  const menuSidebarRef = useRef(null);

  const isOpenMenuSidebar = useSelector(
    (state) => state.header.isOpenMenuSidebar
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const getClassName = event.target.className;
      if (
        typeof getClassName === "string" &&
        getClassName.includes("mobile-menu-sidebar")
      ) {
        return;
      }
      if (
        menuSidebarRef.current &&
        !menuSidebarRef.current.contains(event.target)
      ) {
        dispatch(closeMenuSidebar());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, menuSidebarRef]);

  return (
    <div
      className={isOpenMenuSidebar ? "navigation active" : "navigation"}
      ref={menuSidebarRef}
    >
      <CategoriesDropdown />
      <ul className="navigation__pages">
        {pages.map((page, index) => (
          <li key={index} className="navigation__page">
            <a href={page.link}>{page.name}</a>
          </li>
        ))}
      </ul>
      <p className="navigation__contact">+0123456789</p>
    </div>
  );
};

export default Navigation;
