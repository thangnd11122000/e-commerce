import React from "react"
import { ordersData } from "../../data"
import Order from "./Order"

const Orders = () => {
  return (
    <div className="user__orders section-box">
      <ul className="user__header user__header--flex-start">
        <li className="active">Tất cả</li>
        <li>Chờ xác nhận</li>
        <li>Chờ lấy hàng</li>
        <li>Đang giao</li>
        <li>Đã giao</li>
        <li>Đã hủy</li>
      </ul>
      <div className="user__body">
        {ordersData.map((order, index) => (
          <Order key={index} order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders
