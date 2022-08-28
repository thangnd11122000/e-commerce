import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { formatCurrency } from "../../utils"
import LazyLoad from "react-lazyload"

const Order = () => {
  const cartItems = useSelector((state) => state.cartItems.value)

  return (
    <div className="section-box checkout__order">
      <h3 className="section-box__title">Thông tin đơn hàng</h3>
      <div className="checkout-product">
        {cartItems?.map((product, index) => {
          return (
            <div key={index} className="checkout-product__item">
              <LazyLoad>
                <img src={product.image} alt="" />
              </LazyLoad>
              <div>
                <Link
                  to={`/san-pham/${product.id}`}
                  className="checkout-product__name"
                >
                  {product.product_name}
                </Link>
                {product.discount > 0 ? (
                  <p className="checkout-product__price">
                    {formatCurrency(product.price - product.discount)}
                    <del>{formatCurrency(product.price)}</del>
                  </p>
                ) : (
                  <p className="checkout-product__price">
                    {formatCurrency(product.price)}
                  </p>
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
