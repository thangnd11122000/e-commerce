import React from "react"
import Voucher from "./Voucher"

const voucherData = [
  { id: 1, type: "freeShip", code: 123, date: "04/16/2022" },
  { id: 2, type: "freeShip", code: 123, date: "04/16/2022" },
  { id: 3, type: "discount", code: 123, date: "04/16/2022" },
]

const Vouchers = () => {
  return (
    <div className="section-box">
      <ul className="user__header user__header--flex-start">
        <li>Mới nhất</li>
        <li>Phổ biến</li>
        <li>Sắp hết hạn</li>
      </ul>
      <div className="user__body user__vouchers">
        {voucherData.map((v) => (
          <Voucher key={v.id} type={v.type} code={v.code} date={v.date} />
        ))}
      </div>
    </div>
  )
}

export default Vouchers
