import React from "react"
import { useSelector } from "react-redux"
import getDiscount from "../../utils/getDiscount"

const Order = () => {
  const cartItems = useSelector((state) => state.cartItems.value)

  return (
    <div className="section-box checkout__order">
      <h3 className="section-box__title">Thông tin đơn hàng</h3>
      <div className="checkout-product">
        {cartItems?.length && cartItems?.map((product, index) => {
          const discountValue = getDiscount(product.discount, product.price)
          return (
            <div key={index} className="checkout-product__item">
              <img src={product.image} alt="" />
              <div>
                <p className="checkout-product__name">{product.name}</p>
                {discountValue > 0 ? (
                  <p className="checkout-product__price">
                    {discountValue} <del>{product.price}</del>
                  </p>
                ) : (
                  <p className="checkout-product__price">{product.price}</p>
                )}

                <p className="checkout-product__quantity">
                  Số lượng: {product.quantity}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Order
