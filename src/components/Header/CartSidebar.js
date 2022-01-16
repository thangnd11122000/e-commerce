import { Clear, Close, RemoveRedEye } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCartSidebar } from "../../features/toggle/toggleSlice";

const CartSidebar = () => {
  const cartSidebarRef = useRef(null);

  const isOpenCartSidebar = useSelector(
    (state) => state.toggle.isOpenCartSidebar
  );

  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      const getClassName = event.target.className;
      if (
        typeof getClassName === "string" &&
        getClassName.includes("mobile-cart-sidebar")
      ) {
        return;
      }
      if (
        cartSidebarRef.current &&
        !cartSidebarRef.current.contains(event.target)
      ) {
        dispatch(closeCartSidebar());
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, cartSidebarRef]);

  return (
    <div
      className={isOpenCartSidebar ? "cart-sidebar active" : "cart-sidebar"}
      ref={cartSidebarRef}
    >
      <div className="cart-sidebar__header">
        <Close
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(closeCartSidebar());
          }}
        />
        <p>Gior hang</p>
      </div>
      <div className="cart-sidebar__body">
        <div className="cart-sidebar__box">
          <img src="/img/products/product-1.jpg" alt="" />
          <div className="cart-sidebar__content">
            <div className="cart-sidebar__content--name">
              May choi game ABCXYZ
            </div>
            <div className="cart-sidebar__content--number">
              <p>
                10000000vnd <span>x 2</span>
              </p>
            </div>
          </div>
          <div className="cart-sidebar__actions">
            <Clear />
            <RemoveRedEye />
          </div>
        </div>
        <div className="cart-sidebar__box">
          <img src="/img/products/product-1.jpg" alt="" />
          <div className="cart-sidebar__content">
            <div className="cart-sidebar__content--name">ABC</div>
            <div className="cart-sidebar__content--number">
              <p>
                10000000vnd <span>x 2</span>
              </p>
            </div>
          </div>
          <div className="cart-sidebar__actions">
            <Clear />
            <RemoveRedEye />
          </div>
        </div>

        <div className="cart-sidebar__total">
          <p>Tong don hang</p>
          <p>10000000vnd</p>
        </div>
      </div>
      <div className="cart-sidebar__footer">
        <button className="btn-secondary">Xem gio hang</button>
        <button className="btn-primary">Thanh toan</button>
      </div>
    </div>
  );
};

export default CartSidebar;
