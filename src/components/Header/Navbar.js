import {
  Adb,
  FavoriteBorderOutlined,
  Menu,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material"
import { BsPerson } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  openCartSidebar,
  openMenuSidebar,
} from "../../store/toggle/toggleSlice"
import { formatCurrency } from "../../utils"
import { Action } from "./Action"

const Navbar = ({ hideOnScrollDown, isScroll }) => {
  const totalProduct = useSelector((state) => state.cartItems.totalProduct)
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  const { isLoggedIn, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  return (
    <div
      className={`navbar ${isScroll ? "navbar--scroll-down" : ""} ${
        isScroll && hideOnScrollDown ? "navbar--scroll-up" : ""
      }`}
    >
      <div className="navbar-logo">
        <Menu
          className="navbar-logo__toggle"
          onClick={() => dispatch(openMenuSidebar())}
        />
        <Link to="/" className="navbar-logo__link">
          TECHCHAIN
        </Link>
        <Link to="/" className="navbar-logo__icon">
          <Adb />
        </Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Tra cứu sản phẩm" />
        <button>
          <Search />
        </button>
      </div>
      <div className="navbar-action">
        {isLoggedIn ? (
          <Action
            icon={<BsPerson />}
            topText="Xin chào!"
            bottomText={user?.fullname}
            link="/user"
          />
        ) : (
          <Action
            icon={<BsPerson />}
            topText="Tài khoản"
            bottomText="Đăng nhập"
            link="/login"
          />
        )}
        <Action
          icon={<FavoriteBorderOutlined />}
          topText="Yêu thích"
          bottomText="Danh sách"
          link="/"
        />
        <div
          className="navbar-action__item"
          onClick={() => dispatch(openCartSidebar())}
          style={{ cursor: "pointer" }}
        >
          <ShoppingBagOutlined />
          <div>
            <span className="navbar-action__top">Giỏ hàng</span>
            <span className="navbar-action__bottom">
              {formatCurrency(totalPrice)}đ
            </span>
          </div>
          <span className="navbar-action__badge">{totalProduct}</span>
        </div>
      </div>
      <div
        className="navbar-action__cart"
        onClick={() => dispatch(openCartSidebar())}
      >
        <span className="navbar-action__badge">{totalProduct}</span>
        <ShoppingBagOutlined />
      </div>
    </div>
  )
}

export default Navbar
