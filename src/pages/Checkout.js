import axios from "axios"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 } from "uuid"
import Coupons from "../components/Checkout/Coupons"
import Delivery from "../components/Checkout/Delivery"
import Order from "../components/Checkout/Order"
import Payment from "../components/Checkout/Payment"
import Summary from "../components/Checkout/Summary"
import PageLinks from "../components/PageLinks"
import { insertOrderTemp } from "../store/orderTemp"

const Checkout = () => {
  const { user } = useSelector((state) => state.auth)
  const cartItems = useSelector((state) => state.cartItems.value)
  const totalPrice = useSelector((state) => state.cartItems.totalPrice || 0)
  const totalDiscount = useSelector((state) => state.cartItems.totalDiscount)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [paymentType, setPaymentType] = useState(null)
  const [note, setNote] = useState("")
  const [shippingFee] = useState(25000)
  const [currentAddressId, setCurrentAddressId] = useState(null)
  const [voucher, setVoucher] = useState(null)
  const [voucherPrice, setVoucherPrice] = useState(0)
  const getDataOrder = () => {
    const details = cartItems?.map((product, index) => {
      return {
        product_id: product.id,
        quantity: product.quantity,
        unit_price: product.price,
        product_option: product?.selectedOptionsNumber?.join(",") || 0,
        discount_amount:
          index === 0
            ? (product?.discount || 0) + voucherPrice
            : product?.discount || 0,
      }
    })

    return {
      data: {
        order: {
          customer_id: user?.id,
          order_date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
          order_note: note,
          address_id: currentAddressId,
          shipping_fee: shippingFee,
          payment_type_id: paymentType,
          order_status: 1,
        },
        details,
      },
    }
  }

  const handleOrder = () => {
    dispatch(insertOrderTemp(getDataOrder()))
    if (paymentType) {
      switch (paymentType) {
        case 1:
          navigate("/thanh-cong")
          break

        case 2:
          axios("/api/checkout", {
            method: "POST",
            headers: {
              Accept: "application/json",
            },
            data: {
              id: user?.id,
              total_amount: totalPrice,
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

  useEffect(() => {
    if (voucher !== null) {
      if (voucher.discount_type === "Money") {
        setVoucherPrice(voucher.discount_value)
      } else {
        setVoucherPrice(
          ((totalPrice - totalDiscount) * voucher.discount_value) / 100
        )
      }
    } else setVoucherPrice(0)
  }, [totalDiscount, totalPrice, voucher])

  return (
    <form>
      <PageLinks links={[{ name: "Thanh toán", link: "/thanh-toan" }]} />
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
          <Coupons setVoucher={setVoucher} />
          <Summary
            totalPrice={totalPrice}
            shippingFee={shippingFee}
            totalDiscount={totalDiscount}
            handleOrder={handleOrder}
            setNote={setNote}
            voucherPrice={voucherPrice}
          />
        </div>
      </div>
    </form>
  )
}

export default Checkout
