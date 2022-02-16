import React from "react"

const Voucher = ({ type, code, date }) => {
  return (
    <div className="user__voucher">
      <div className="user__voucher--type">{type}</div>
      <div className="user__voucher--content">
        <h4>Mã khuyễn mãi: {code}</h4>
        HSD: {date}
      </div>
    </div>
  )
}

export default Voucher
