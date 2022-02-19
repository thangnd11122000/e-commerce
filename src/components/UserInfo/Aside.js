import { Close, Person } from "@mui/icons-material"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { closeMenuUser } from "../../features/toggle/toggleSlice"

const Aside = ({ page, setPage }) => {
  const [menu, setMenu] = useState(0)
  const menuRef = useRef(null)

  const isOpenMenuUser = useSelector((state) => state.toggle.isOpenMenuUser)
  const dispatch = useDispatch()

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        dispatch(closeMenuUser())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch])
  
  return (
    <div
      className={`user__aside section-box  ${
        isOpenMenuUser ? "user__aside--active" : ""
      }`}
      ref={menuRef}
    >
      <Close className="user__aside--icon" onClick={() => dispatch(closeMenuUser())} />
      <div className="user__info">
        <img src="/img/about/testimonial-5.jpg" alt="" />
        <div>
          <span>Xin chào</span>
          <p>Nguyễn Doãn Thắng</p>
        </div>
      </div>
      <div className={`user-menu ${menu === 0 ? "user-menu--active" : ""}`}>
        <div
          className="user-menu__item"
          onClick={() => {
            setMenu(0)
            setPage("information")
            dispatch(closeMenuUser())
          }}
        >
          <Person />
          <p>Hồ sơ</p>
        </div>

        <ul className="user-menu user-menu__submenu">
          <li
            className={
              page === "information" ? "user-menu__submenu--active" : ""
            }
            onClick={() => {
              setPage("information")
              dispatch(closeMenuUser())
            }}
          >
            Thông tin cá nhân
          </li>
          <li
            className={page === "bank" ? "user-menu__submenu--active" : ""}
            onClick={() => {
              setPage("bank")
              dispatch(closeMenuUser())
            }}
          >
            Ngân hàng
          </li>
          <li
            className={page === "address" ? "user-menu__submenu--active" : ""}
            onClick={() => {
              setPage("address")
              dispatch(closeMenuUser())
            }}
          >
            Địa chỉ
          </li>
          <li onClick={() => dispatch(closeMenuUser())}>
            <Link to="/change-password">Đổi mật khẩu</Link>
          </li>
        </ul>
      </div>
      <div className={`user-menu ${menu === 1 ? "user-menu--active" : ""}`}>
        <div
          className="user-menu__item"
          onClick={() => {
            setMenu(1)
            setPage("orders")
            dispatch(closeMenuUser())
          }}
        >
          <Person />
          <p>Đơn hàng</p>
        </div>
      </div>
      <div className={`user-menu ${menu === 2 ? "user-menu--active" : ""}`}>
        <div
          className="user-menu__item"
          onClick={() => {
            setMenu(2)
            dispatch(closeMenuUser())
          }}
        >
          <Person />
          <p>Thông báo</p>
        </div>

        <ul className="user-menu user-menu__submenu">
          <li
            className={page === "password" ? "user-menu__submenu--active" : ""}
          >
            Cập nhập đơn hàng
          </li>
          <li
            className={page === "password" ? "user-menu__submenu--active" : ""}
          >
            Cập nhập đánh giá
          </li>
        </ul>
      </div>
      <div className={`user-menu ${menu === 3 ? "user-menu--active" : ""}`}>
        <div
          className="user-menu__item"
          onClick={() => {
            setMenu(3)
            setPage("vouchers")
            dispatch(closeMenuUser())
          }}
        >
          <Person />
          <p>Voucher</p>
        </div>
      </div>
    </div>
  )
}

export default Aside
