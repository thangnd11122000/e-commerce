import { Person } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import React, { useState } from "react"

const Aside = ({ setPage }) => {
  const [menu, setMenu] = useState(0)
  return (
    <div className="user__aside section-box">
      <div className="user__avatar">
        <img src="/img/about/testimonial-5.jpg" alt="" />
        <div>
          <span>Xin chào</span>
          <p>Nguyễn Doãn Thắng</p>
        </div>
      </div>
      <div className={`user__menu ${menu === 0 ? "active" : ""}`}>
        <div
          className="user__menu--link"
          onClick={() => {
            setMenu(0)
            setPage("information")
          }}
        >
          <Person />
          <p>Hồ sơ</p>
        </div>

        <ul className="user__submenu">
          <li onClick={() => setPage("information")}>Thông tin cá nhân</li>
          <li onClick={() => setPage("bank")}>Ngân hàng</li>
          <li onClick={() => setPage("address")}>Địa chỉ</li>
          <li onClick={() => setPage("password")}>Đổi mật khẩu</li>
        </ul>
      </div>
      <div className={`user__menu ${menu === 1 ? "active" : ""}`}>
        <div
          className="user__menu--link"
          onClick={() => {
            setMenu(1)
            setPage("orders")
          }}
        >
          <Person />
          <p>Đơn hàng</p>
        </div>
      </div>
      <div className={`user__menu ${menu === 2 ? "active" : ""}`}>
        <div className="user__menu--link" onClick={() => setMenu(2)}>
          <Person />
          <p>Thông báo</p>
        </div>

        <ul className="user__submenu">
          <li>Cập nhập đơn hàng</li>
          <li>Cập nhập đánh giá</li>
        </ul>
      </div>
      <div className={`user__menu ${menu === 3 ? "active" : ""}`}>
        <div
          className="user__menu--link"
          onClick={() => {
            setMenu(3)
            setPage("vouchers")
          }}
        >
          <Person />
          <p>Voucher</p>
        </div>
      </div>
    </div>
  )
}

export default Aside
