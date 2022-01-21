import React from "react"
import { useSelector } from "react-redux"

const Summary = () => {
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  return (
    <div className="cart__right--box cart__summary">
      <h3>Thanh toán</h3>
      <div>
        <p>Tạm tính</p>
        <p>{totalPrice}</p>
      </div>
      <div>
        <p>Thành tiền</p>
        <p className="cart__summary--total">{totalPrice}</p>
      </div>
      <button className="btn-primary">Thanh toán</button>
    </div>
  )
}

export default Summary
