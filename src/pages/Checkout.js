import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import { v4 } from "uuid"
import Delivery from "../components/Checkout/Delivery"
import Order from "../components/Checkout/Order"
import Payment from "../components/Checkout/Payment"
import Summary from "../components/Checkout/Summary"
import PageLinks from "../components/PageLinks"
import { CURRENT_DATE, CURRENT_TIME } from "../utils/datetime"

const Checkout = () => {
  const { user } = useSelector((state) => state.auth)
  const cartItems = useSelector((state) => state.cartItems.value)
  const totalPrice = useSelector((state) => state.cartItems.totalPrice || 50000)
  const [paymentType, setPaymentType] = useState(null)
  const [note, setNote] = useState("")
  const [shippingFee, setShippingFee] = useState(0)
  const [currentAddressId, setCurrentAddressId] = useState(null)

  const handleOrderTemp = () => {
    console.log(
      JSON.stringify({
        order: {
          customer_id: user?.id,
          order_date: `${CURRENT_DATE} ${CURRENT_TIME}`,
          order_note: note,
          address_id: currentAddressId,
          shipping_fee: shippingFee,
          payment_type_id: paymentType,
          order_status: 1,
        },
        details: [
          {
            product_id: 1,
            quantity: 1,
            unit_price: 200000,
            product_option: "2,5",
            discount_amount: "30000",
          },
        ],
      })
    )
  }
  handleOrderTemp()
  const handleOrder = () => {
    if (paymentType) {
      switch (paymentType) {
        case 1:
          break

        case 2:
          console.log(true)
          axios("/api/checkout", {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            data: {
              id: user?.id,
              total_amount: 50000,
              requestId: v4(),
            },
          }).then((res) => {
            res?.data?.url && window.location.replace(res.data.url)
          })

          break
        default:
          break
      }
    }
  }

  return (
    <form>
      <PageLinks links={[{ name: "Thanh toán", link: "/checkout" }]} />
      <div className="checkout">
        <div className="checkout__left">
          <Delivery
            currentAddressId={currentAddressId}
            setCurrentAddressId={setCurrentAddressId}
          />
          <Order />
        </div>
        <div className="checkout__right">
          <Payment paymentType={paymentType} setPaymentType={setPaymentType} />
          <Summary
            totalPrice={totalPrice}
            shippingFee={shippingFee}
            handleOrder={handleOrder}
            setNote={setNote}
          />
        </div>
      </div>
    </form>
  )
}

export default Checkout
