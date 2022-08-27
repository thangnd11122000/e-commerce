import { FavoriteBorderOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { handleCartSidebar, handleMenuSidebar } from "../../store/toggleSlice"
import { MobileLink } from "./MobileLink"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { BiHomeAlt, BiUserCircle, BiShoppingBag } from "react-icons/bi"
import { AiOutlineAppstore } from "react-icons/ai"

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
      <MobileLink name="Trang chủ" link="/" icon={<BiHomeAlt />} />
      <MobileLink
        name="Tài khoản"
        link="/trang-ca-nhan"
        icon={<BiUserCircle />}
      />
      <div
        className="mobile-bottom__item"
        onClick={() => dispatch(handleMenuSidebar())}
      >
        <div className="mobile-bottom__link">
          <AiOutlineAppstore />
          <span>Menu</span>
        </div>
      </div>
      <MobileLink
        name="Yêu thích"
        link="/san-pham-yeu-thich"
        icon={<FavoriteBorderOutlined />}
      />
      <div
        className="mobile-bottom__item"
        onClick={() => dispatch(handleCartSidebar())}
      >
        <div className="mobile-bottom__link">
          <BiShoppingBag />
          <span>Giỏ hàng</span>
        </div>
      </div>
    </div>
  )
}

export default MobileBottom
