import getDiscount from "../../utils/getDiscount"

const Order = ({ order }) => {
  const { image, name, price, discount, date, status, total } = order

  const discountValue = getDiscount(discount, price)
  return (
    <div className="user-order">
      <div className="user-order__item">
        <img src={`${image}`} alt="" />
        <div>
          <p className="user-order__name">{name}</p>
          {discountValue > 0 ? (
            <p className="user-order__discount">
              {discountValue} <del>{price}</del>
            </p>
          ) : (
            <p className="user-order__price">{price}</p>
          )}
          <p className="user-order__date">{date}</p>
        </div>
      </div>
      <div className="user-order__status">
        <h4>{status}</h4>
        <p>{total}</p>
      </div>
    </div>
  )
}

export default Order
