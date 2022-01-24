import { Clear, Close, Delete, RemoveRedEye } from "@mui/icons-material"
import { IconButton, Tooltip } from "@mui/material"
import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteItem } from "../../features/cartItems/cartItemsSlice"
import { closeCartSidebar } from "../../features/toggle/toggleSlice"
import getDiscount from "../../utils/getDiscount"

const CartSidebar = () => {
  const cartSidebarRef = useRef(null)

  const cartItems = useSelector((state) => state.cartItems.value)
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)

  const isOpenCartSidebar = useSelector(
    (state) => state.toggle.isOpenCartSidebar
  )

  const dispatch = useDispatch()

  useEffect(() => {
    function handleClickOutside(event) {
      const getClassName = event.target.className
      if (
        typeof getClassName === "string" &&
        getClassName.includes("mobile-cart-sidebar")
      ) {
        return
      }
      if (
        cartSidebarRef.current &&
        !cartSidebarRef.current.contains(event.target)
      ) {
        dispatch(closeCartSidebar())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch, cartSidebarRef])

  return (
    <div
      className={isOpenCartSidebar ? "cart-sidebar active" : "cart-sidebar"}
      ref={cartSidebarRef}
    >
      <div className="cart-sidebar__header">
        <Close
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(closeCartSidebar())
          }}
        />
        <p>Giỏ hàng</p>
      </div>
      <div className="cart-sidebar__body">
        {cartItems.map((product, index) => {
          const discountValue = getDiscount(product.discount, product.price)
          return (
            <div key={index} className="cart-sidebar__box">
              <img src={`${product.image}`} alt="" />
              <div className="cart-sidebar__content">
                <div className="cart-sidebar__content--name">
                  {product.name}
                </div>
                <div className="cart-sidebar__content--number">
                  <p>
                    {discountValue > 0 ? discountValue : product.price}
                    <span> x {product.quantity}</span>
                  </p>
                </div>
              </div>
              <div className="cart-sidebar__actions">
                <Tooltip title="Xóa sản phẩm">
                  <IconButton onClick={() => dispatch(deleteItem(product.id))}>
                    <Delete />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          )
        })}

        <div className="cart-sidebar__total">
          <p>Tổng đơn hàng</p>
          <p>{totalPrice}</p>
        </div>
      </div>
      <div className="cart-sidebar__footer">
        <button className="btn-secondary">Xem giỏ hàng</button>
        <button className="btn-primary">Thanh toán</button>
      </div>
    </div>
  )
}

export default CartSidebar
