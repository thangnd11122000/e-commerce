import React from "react"
import Voucher from "./Voucher"

const voucherData = [
  { id: 1, type: "freeShip", code: 123, date: "04/16/2022" },
  { id: 2, type: "freeShip", code: 123, date: "04/16/2022" },
  { id: 3, type: "discount", code: 123, date: "04/16/2022" },
]

const Vouchers = () => {
  return (
    <div className="user__vouchers section-box">
      <ul className="user__vouchers--header">
        <li>Mới nhất</li>
        <li>Phổ biến</li>
        <li>Sắp hết hạn</li>
      </ul>
      <div className="user__vouchers--body">
        {voucherData.map((v) => (
          <Voucher key={v.id} type={v.type} code={v.code} date={v.date} />
        ))}
      </div>
    </div>
  )
}

export default Vouchers
