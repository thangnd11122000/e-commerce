import { TextField } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"

const Summary = () => {
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  return (
    <div className="section-box checkout__summary">
      <h3 className="section-box__title">Thanh toán</h3>
      <div>
        <p>Tạm tính</p>
        <p>{totalPrice}</p>
      </div>
      <div>
        <p>Phí vận chuyển</p>
        <p>0</p>
      </div>
      <div>
        <p>Thành tiền</p>
        <p className="checkout__summary--total">{totalPrice}</p>
      </div>
      <textarea placeholder="Lời nhắn" />
      <button className="btn-primary">Đặt hàng ngay</button>
    </div>
  )
}

export default Summary
