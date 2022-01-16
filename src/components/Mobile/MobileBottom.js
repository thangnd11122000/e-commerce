import {
  FavoriteBorderOutlined,
  HomeOutlined,
  MenuOutlined,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
  handleCartSidebar,
  handleMenuSidebar,
} from "../../features/toggle/toggleSlice"
import { MobileLink } from "./MobileLink"
import menuIcon from "../../assets/img/icons/menu.png"
import bagIcon from "../../assets/img/icons/bag.png"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const links = [
  {
    name: "Trang chu",
    link: "/",
    icon: <HomeOutlined />,
  },
  {
    name: "Tai khoan",
    link: "/",
    icon: <PersonOutline />,
  },
  {
    name: "bag",
    link: null,
    icon: <MenuOutlined />,
  },
  {
    name: "Yeu thich",
    link: "/",
    icon: <FavoriteBorderOutlined />,
  },
  {
    name: "Gio hang",
    link: "/",
    icon: <ShoppingBagOutlined />,
  },
]
const MobileBottom = () => {
  const dispatch = useDispatch()

  const [hideOnScroll, setHideOnScroll] = useState(true)
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll]
  )

  return (
    <div
      className={`mobile-bottom ${
        hideOnScroll ? "mobile-bottom__scroll-up" : ""
      } `}
    >
      <MobileLink name="trang chu" link="/" icon={<HomeOutlined />} />
      <MobileLink name="tai khoan" link="/" icon={<PersonOutline />} />
      <div
        className="mobile-bottom__box"
        onClick={() => dispatch(handleMenuSidebar())}
      >
        <div className="mobile-bottom__link">
          <img
            src={menuIcon}
            alt=""
            className="mobile-bottom__link--img mobile-menu-sidebar"
          />
          <span className="mobile-menu-sidebar">Menu</span>
        </div>
      </div>
      <MobileLink name="yeu thich" link="/" icon={<FavoriteBorderOutlined />} />
      <div
        className="mobile-bottom__box"
        onClick={() => dispatch(handleCartSidebar())}
      >
        <div className="mobile-bottom__link">
          <img
            src={bagIcon}
            alt=""
            className="mobile-cart-sidebar mobile-bottom__link--img"
          />
          <span className="mobile-cart-sidebar">Gio hang</span>
        </div>
      </div>
    </div>
  )
}

export default MobileBottom
