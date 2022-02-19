import {
  FavoriteBorderOutlined,
  HomeOutlined,
  PersonOutline,
} from "@mui/icons-material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  handleCartSidebar,
  handleMenuSidebar,
} from "../../features/toggle/toggleSlice"
import { MobileLink } from "./MobileLink"
import menuIcon from "../../assets/img/icons/menu.png"
import bagIcon from "../../assets/img/icons/bag.png"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

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
        hideOnScroll ? "mobile-bottom--scroll-up" : ""
      } `}
    >
      <MobileLink name="Trang chủ" link="/" icon={<HomeOutlined />} />
      <MobileLink name="Tài khoản" link="/user" icon={<PersonOutline />} />
      <div
        className="mobile-bottom__item"
        onClick={() => dispatch(handleMenuSidebar())}
      >
        <div className="mobile-bottom__link">
          <img src={menuIcon} alt="Menu" />
          <span>Menu</span>
        </div>
      </div>
      <MobileLink name="Yêu thích" link="/" icon={<FavoriteBorderOutlined />} />
      <div
        className="mobile-bottom__item"
        onClick={() => dispatch(handleCartSidebar())}
      >
        <div className="mobile-bottom__link">
          <img src={bagIcon} alt="Giỏ hàng" />
          <span>Giỏ hàng</span>
        </div>
      </div>
    </div>
  )
}

export default MobileBottom
