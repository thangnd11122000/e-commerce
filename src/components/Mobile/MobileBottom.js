import {
  BadgeOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  HomeOutlined,
  MenuOutlined,
  PersonOutline,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCartSidebar,
  openCartSidebar,
} from "../../features/header/headerSlice";
import { MobileLink } from "./MobileLink";
import { handleMenuSidebar } from "../../features/header/headerSlice";
import { MobileDiv } from "./MobileDiv";
import menuIcon from "../../assets/img/icons/menu.png";
import bagIcon from "../../assets/img/icons/bag.png";

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
];
const MobileBottom = () => {
  const isOpenMenuSidebar = useSelector(
    (state) => state.header.isOpenMenuSidebar
  );
  const dispatch = useDispatch();

  return (
    <div className="mobile-bottom">
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
  );
};

export default MobileBottom;
