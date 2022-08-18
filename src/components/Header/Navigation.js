import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"
import { closeMenuSidebar } from "../../store/toggle/toggleSlice"
import CategoriesDropdown from "./CategoriesDropdown"
import { AiOutlineLogout } from "react-icons/ai"
import { logout } from "../../store/authSlice"

const mainNav = [
  { name: "Trang chủ", path: "/" },
  { name: "Cửa hàng", path: "/san-pham" },
  { name: "Về chúng tôi", path: "/ve-chung-toi" },
  { name: "Liên hệ", path: "/lien-he" },
  { name: "Bài viết", path: "/bai-viet" },
]

const Navigation = () => {
  const menuSidebarRef = useRef(null)
  const isOpenMenuSidebar = useSelector(
    (state) => state.toggle.isOpenMenuSidebar
  )
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex((e) => e.path === pathname)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const getClassName = event.target.className
      if (
        typeof getClassName === "string" &&
        getClassName.includes("mobile-menu-sidebar")
      ) {
        return
      }
      if (
        menuSidebarRef.current &&
        !menuSidebarRef.current.contains(event.target)
      ) {
        dispatch(closeMenuSidebar())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch, menuSidebarRef])

  return (
    <div
      className={`navigation ${isOpenMenuSidebar ? "navigation--active" : ""}`}
      ref={menuSidebarRef}
    >
      <CategoriesDropdown />
      <ul className="navigation__nav">
        {mainNav.map((nav, index) => (
          <li
            key={index}
            className={`navigation__link ${
              index === activeNav ? "navigation__link--active" : ""
            }`}
          >
            <Link to={nav.path} onClick={() => dispatch(closeMenuSidebar())}>
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navigation__contact">
        <p>123456789+</p>
        {isLoggedIn && (
          <>
            <AiOutlineLogout
              className="logout-icon"
              onClick={() => dispatch(logout())}
            />
            <p
              className="logout-content"
              onClick={() => {
                dispatch(logout())
                dispatch(closeMenuSidebar())
              }}
            >
              ĐĂNG XUẤT
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default Navigation
