import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  closeDropdown,
  closeMenuSidebar,
  handleDropdown,
} from "../../features/toggle/toggleSlice"

const menu = [
  {
    id: 1,
    name: "May tinh",
    submenu: [
      {
        title: "Danh muc 1",
        link: [
          {
            name: "danh muc con 1",
            path: "/",
          },
          {
            name: "danh muc con 2",
            path: "/",
          },
          {
            name: "danh muc con 3",
            path: "/",
          },
        ],
      },
      {
        title: "Danh muc 2",
        link: [
          {
            name: "danh muc con a",
            path: "/",
          },
          {
            name: "danh muc con b",
            path: "/",
          },
          {
            name: "danh muc con c",
            path: "/",
          },
        ],
      },
      {
        title: "Danh muc 3",
        link: [
          {
            name: "danh muc con 3",
            path: "/",
          },
          {
            name: "danh muc con 3",
            path: "/",
          },
          {
            name: "danh muc con 3",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Dien thoai",
    submenu: [
      {
        title: "Danh muc 1",
        link: [
          {
            name: "danh muc con 1",
            path: "/",
          },
          {
            name: "danh muc con 2",
            path: "/",
          },
          {
            name: "danh muc con 3",
            path: "/",
          },
        ],
      },
      {
        title: "Danh muc 2",
        link: [
          {
            name: "danh muc con 1",
            path: "/",
          },
          {
            name: "danh muc con 2",
            path: "/",
          },
          {
            name: "danh muc con 3",
            path: "/",
          },
        ],
      },
      {
        title: "Danh muc 3",
        link: [
          {
            name: "danh muc con 3",
            path: "/",
          },
          {
            name: "danh muc con 3",
            path: "/",
          },
          {
            name: "danh muc con 3",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "May anh",
    path: "/",
  },
  {
    id: 3,
    name: "May anh",
    path: "/",
  },
  {
    id: 3,
    name: "May anh",
    path: "/",
  },
  {
    id: 3,
    name: "May anh",
    path: "/",
  },
  {
    id: 3,
    name: "May anh",
    path: "/",
  },
]

const CategoriesDropdown = () => {
  const dropdownRef = useRef(null)
  const isOpenDropdown = useSelector((state) => state.toggle.isOpenDropdown)
  const dispatch = useDispatch()

  const submenuToggle = (e) => e.target.classList.toggle("active")

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(closeDropdown())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch, dropdownRef])

  return (
    <div className="cat-dropdown" ref={dropdownRef}>
      <div
        className="cat-dropdown__close"
        onClick={() => {
          dispatch(closeMenuSidebar())
        }}
      >
        Đóng cửa sổ
      </div>
      <div
        className={`cat-dropdown__title ${
          isOpenDropdown ? "cat-dropdown__title--active" : ""
        }`}
        onClick={() => dispatch(handleDropdown(isOpenDropdown))}
      >
        <p>Danh mục sản phẩm</p>
        {isOpenDropdown ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
      </div>
      <ul
        className={`navigation-menu ${
          isOpenDropdown ? "navigation-menu--active" : ""
        }`}
      >
        {menu.map((m, i) => (
          <li key={i}>
            {m.path ? (
              <Link to={m.path} className="navigation-menu__link">
                {m.name}
              </Link>
            ) : (
              <p
                className="navigation-menu__link"
                onClick={(e) => submenuToggle(e)}
              >
                {m.name}
              </p>
            )}
            {m.submenu && (
              <div className="navigation-submenu">
                {m.submenu.map((s, sIndex) => (
                  <div key={sIndex} className="navigation-submenu__content">
                    <p className="navigation-submenu__title">{s.title}</p>
                    <ul className="navigation-submenu__list">
                      {s.link.map((l, lIndex) => (
                        <li key={lIndex} className="navigation-submenu__item">
                          <Link to={l.path}>{l.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoriesDropdown
