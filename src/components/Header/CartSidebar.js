import { Close, Delete, Visibility } from "@mui/icons-material"
import { IconButton, Tooltip } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteItem } from "../../features/cartItems/cartItemsSlice"
import { closeCartSidebar } from "../../features/toggle/toggleSlice"
import formatCurrency from "../../utils/formatCurrency"
import getDiscount from "../../utils/getDiscount"
import ConfirmDialog from "../ConfirmDialog"

const CartSidebar = () => {
  const cartItems = useSelector((state) => state.cartItems.value)
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  const totalProduct = useSelector((state) => state.cartItems.totalProduct)
  const isOpenCartSidebar = useSelector(
    (state) => state.toggle.isOpenCartSidebar
  )
  const dispatch = useDispatch()

  const cartSidebarRef = useRef(null)
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    type: "",
    title: "",
    onConfirm: () => {},
  })

  const handleDelete = (id) => {
    setConfirmDialog({
      isOpen: true,
      type: "confirm",
      title: "Xóa sản phẩm này?",
      onConfirm: () => {
        dispatch(deleteItem(id))
      },
    })
  }

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
    <>
      <div
        className={`cart-sidebar ${
          isOpenCartSidebar ? "cart-sidebar--active" : ""
        }`}
        ref={cartSidebarRef}
      >
        <div className="cart-sidebar__header">
          <Close
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(closeCartSidebar())}
          />
          <p>Giỏ hàng</p>
        </div>
        {totalProduct > 0 ? (
          <>
            <div className="cart-sidebar__body">
              {cartItems.map((product, index) => {
                const discountValue = getDiscount(
                  product.discount,
                  product.price
                )
                return (
                  <div key={index} className="cart-sidebar__item">
                    <Link
                      to={`detail/${product.id}`}
                      className="cart-sidebar__item--img"
                      onClick={() => dispatch(closeCartSidebar())}
                    >
                      <img src={`${product.image}`} alt={product.name} />
                    </Link>
                    <div className="cart-sidebar__product">
                      <Link
                        to={`detail/${product.id}`}
                        className="cart-sidebar__product--name"
                        onClick={() => dispatch(closeCartSidebar())}
                      >
                        {product.name}
                      </Link>
                      <div className="cart-sidebar__product--number">
                        <p>
                          {discountValue > 0
                            ? formatCurrency(discountValue) + "đ"
                            : formatCurrency(product.price) + "đ"}
                          <span> x {product.quantity}</span>
                        </p>
                      </div>
                    </div>
                    <div className="cart-sidebar__actions">
                      <Link
                        to={`detail/${product.id}`}
                        onClick={() => dispatch(closeCartSidebar())}
                      >
                        <Tooltip title="Xem sản phẩm">
                          <IconButton>
                            <Visibility />
                          </IconButton>
                        </Tooltip>
                      </Link>
                      <Tooltip title="Xóa sản phẩm">
                        <IconButton onClick={() => handleDelete(product.id)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </div>
                )
              })}
              <div className="cart-sidebar__total">
                <p>Tổng đơn hàng</p>
                <p>{formatCurrency(totalPrice)}đ</p>
              </div>
            </div>
            <div className="cart-sidebar__footer">
              <Link to="/cart" onClick={() => dispatch(closeCartSidebar())}>
                <button className="btn-secondary">Giỏ hàng</button>
              </Link>
              <Link to="/checkout" onClick={() => dispatch(closeCartSidebar())}>
                <button className="btn-primary">Thanh toán</button>
              </Link>
            </div>
          </>
        ) : (
          <div className="cart-sidebar__empty">
            <p>Không có sản phẩm</p>
            <img src="img/empty_cart.svg" alt="Giỏ trống" />
          </div>
        )}
      </div>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )
}

export default CartSidebar
