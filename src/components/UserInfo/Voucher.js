import React from "react"

const Voucher = ({ type, code, date }) => {
  return (
    <div className="user-voucher">
      <div className="user-voucher__type">{type}</div>
      <div className="user-voucher__content">
        <h4 className="user-voucher__code">
          Mã khuyễn mãi: <span>{code}</span>
        </h4>
        <div className="user-voucher__date">HSD: {date}</div>
      </div>
    </div>
  )
}

export default Voucher
