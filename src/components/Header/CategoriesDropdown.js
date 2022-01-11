import {
  Close,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeMenuSidebar,
  handleDropdown,
} from "../../features/header/headerSlice";

const categories = [
  {
    id: 1,
    name: "May tinh",
    link: "/",
    submenus: [
      {
        title: "Danh muc 1",
        submenu: [
          {
            name: "danh muc con 1",
            link: "/",
          },
          {
            name: "danh muc con 2",
            link: "/",
          },
          {
            name: "danh muc con 3",
            link: "/",
          },
        ],
      },
      {
        title: "Danh muc 2",
        submenu: [
          {
            name: "danh muc con 1",
            link: "/",
          },
          {
            name: "danh muc con 2",
            link: "/",
          },
          {
            name: "danh muc con 3",
            link: "/",
          },
        ],
      },
    ],
  },
];

const CategoriesDropdown = () => {
  const dropdownRef = useRef(null);

  const isOpenDropdown = useSelector((state) => state.header.isOpenDropdown);

  const isOpenMenuSidebar = useSelector(
    (state) => state.header.isOpenMenuSidebar
  );

  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(closeDropdown());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, dropdownRef]); 

  return (
    <div className="cat-dropdown" ref={dropdownRef}>
      <div
        className="cat-dropdown__close"
        onClick={() => {
          dispatch(closeMenuSidebar());
        }}
      >
        Đóng cửa sổ1
      </div>
      <div
        className={
          isOpenDropdown ? "cat-dropdown__title active" : "cat-dropdown__title"
        }
        onClick={() => dispatch(handleDropdown(isOpenDropdown))}
      >
        <p>Danh mục sản phẩm</p>
        {isOpenDropdown ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
      </div>
      <ul
        className={
          isOpenDropdown ? "cat-dropdown__menu active" : "cat-dropdown__menu"
        }
      >
        <li>
          <a href="/#" className="cat-dropdown__menu--link">
            Máy tính
          </a>
          <div className="cat-dropdown__submenu">
            <div className="cat-dropdown__submenu--box">
              <p className="cat-dropdown__submenu--title">Asus</p>
              <ul className="cat-dropdown__submenu--list">
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Asus 1</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Asus 2</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Asus 3</a>
                </li>
              </ul>
            </div>

            <div className="cat-dropdown__submenu--box">
              <p className="cat-dropdown__submenu--title">Dell</p>
              <ul className="cat-dropdown__submenu--list">
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Dell 1</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Dell 2</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Dell 3</a>
                </li>
              </ul>
            </div>
            <div className="cat-dropdown__submenu--box">
              <p className="cat-dropdown__submenu--title">Danh muc 1</p>
              <ul className="cat-dropdown__submenu--list">
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 1</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 2</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 3</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="/#" className="cat-dropdown__menu--link">
            Dien thoai
          </a>
          <div className="cat-dropdown__submenu">
            <div className="cat-dropdown__submenu--box">
              <p className="cat-dropdown__submenu--title">Danh muc 1</p>
              <ul className="cat-dropdown__submenu--list">
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 1</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 2</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 3</a>
                </li>
              </ul>
            </div>
            <div className="cat-dropdown__submenu--box">
              <p className="cat-dropdown__submenu--title">Danh muc 1</p>
              <ul className="cat-dropdown__submenu--list">
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 1</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 2</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 3</a>
                </li>
              </ul>
            </div>
            <div className="cat-dropdown__submenu--box">
              <p className="cat-dropdown__submenu--title">Danh muc 1</p>
              <ul className="cat-dropdown__submenu--list">
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 1</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 2</a>
                </li>
                <li className="cat-dropdown__submenu--item">
                  <a href="/#">Danh muc con 3</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="/#" className="cat-dropdown__menu--link">
            May anh
          </a>
        </li>
        <li>
          <a href="/#" className="cat-dropdown__menu--link">
            Máy tính
          </a>
        </li>
        <li>
          <a href="/#" className="cat-dropdown__menu--link">
            Máy tính
          </a>
        </li>
        <li>
          <a href="/#" className="cat-dropdown__menu--link">
            Máy tính
          </a>
        </li>
        <li>
          <a href="/#" className="cat-dropdown__menu--link">
            Máy tính
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesDropdown;
