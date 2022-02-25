import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import formatCurrency from "../../utils/formatCurrency"

const Summary = () => {
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  return (
    <div className="section-box cart-summary">
      <h3 className="section-box__title">Thanh toán</h3>
      <div>
        <p>Tạm tính</p>
        <p>{formatCurrency(totalPrice)}đ</p>
      </div>
      <div>
        <p>Thành tiền</p>
        <p className="cart-summary__total">{formatCurrency(totalPrice)}đ</p>
      </div>
      <Link to="/checkout">
        <button className="btn-primary">Thanh toán</button>
      </Link>
    </div>
  )
}

export default Summary
