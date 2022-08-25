import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { formatCurrency } from "../../utils"

const Summary = () => {
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  const totalDiscount = useSelector((state) => state.cartItems.totalDiscount)
  return (
    <div className="section-box cart-summary">
      <h3 className="section-box__title">Thanh toán</h3>
      <div>
        <p>Tạm tính</p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <div>
        <p>Giảm giá</p>
        <p>{formatCurrency(totalDiscount)}</p>
      </div>
      <div>
        <p>Thành tiền</p>
        <p className="cart-summary__total">
          {formatCurrency(totalPrice - totalDiscount)}
        </p>
      </div>
      <Link to="/thanh-toan">
        <button className="btn-primary">Thanh toán</button>
      </Link>
    </div>
  )
}

export default Summary
