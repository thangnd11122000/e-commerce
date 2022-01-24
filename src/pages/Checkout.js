import React, { useState } from "react"
import Delivery from "../components/Checkout/Delivery"
import Order from "../components/Checkout/Order"
import Payment from "../components/Checkout/Payment"
import Summary from "../components/Checkout/Summary"
import PageLinks from "../components/PageLinks"

const Checkout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <PageLinks links={[{ name: "Thanh toán", link: "/checkout" }]} />
      <div className="checkout">
        
        <div className="checkout__left">
          <Delivery isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
          <Order />
        </div>
        <div className="checkout__right">
          <Payment />
          <Summary />
        </div>
      </div>
    </>
  )
}

export default Checkout
