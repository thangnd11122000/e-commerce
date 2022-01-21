import React from "react"
import Coupons from "../components/Cart/Coupons"
import Summary from "../components/Cart/Summary"
import CartTable from "../components/Cart/CartTable"
import PageLinks from "../components/PageLinks"

const Cart = () => {
  return (
    <>
      <PageLinks links={[{ name: "Giỏ hàng", link: "/cart" }]} />
      <div className="cart">
        <h3 className="cart__title">Giỏ hàng</h3>
        <div className="cart__container">
          <div className="cart__left">
            <CartTable />
          </div>
          <div className="cart__right">
            <Coupons />
            <Summary />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
