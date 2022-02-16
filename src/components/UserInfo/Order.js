import React from "react"
import getDiscount from "../../utils/getDiscount"

const Order = ({ order }) => {
  const { image, name, price, discount, date, status, total } = order

  const discountValue = getDiscount(discount, price)
  return (
    <div className="user__order">
      <div className="user__order--product">
        <img src={`${image}`} alt="" />
        <div>
          <p className="user__order--name">{name}</p>
          {discountValue > 0 ? (
            <p className="user__order--discount">
              {discountValue} <del>{price}</del>
            </p>
          ) : (
            <p className="user__order--price">{price}</p>
          )}
          <p className="user__order--date">{date}</p>
        </div>
      </div>
      <div className="user__order--status">
        <h4>{status}</h4>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default Order
