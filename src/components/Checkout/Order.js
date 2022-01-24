import React from "react"
import { useSelector } from "react-redux"
import getDiscount from "../../utils/getDiscount"

const Order = () => {
  const cartItems = useSelector((state) => state.cartItems.value)

  return (
    <div className="section-box checkout__order">
      <h3 className="section-box__title">Thông tin đơn hàng</h3>
      <div className="checkout__products">
        {cartItems?.map((product,index) => {
          const discountValue = getDiscount(product.discount, product.price)
          return (
            <div key={index} className="checkout__product">
              <div className="checkout__product--left">
                <img src={product.image} alt="" />
              </div>
              <div className="checkout__product--right">
                <p>{product.name}</p>
                {discountValue > 0 ? (
                  <p>
                    {discountValue} <del>{product.price}</del>
                  </p>
                ) : (
                  <p>{product.price}</p>
                )}

                <p>Số lượng: {product.quantity}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Order
