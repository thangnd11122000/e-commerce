import { useSelector } from "react-redux"

const Summary = () => {
  const totalPrice = useSelector((state) => state.cartItems.totalPrice)
  return (
    <div className="section-box checkout-summary">
      <h3 className="section-box__title">Thanh toán</h3>
      <div className="checkout-summary__item">
        <p>Tạm tính</p>
        <p>{totalPrice}</p>
      </div>
      <div className="checkout-summary__item">
        <p>Phí vận chuyển</p>
        <p>0</p>
      </div>
      <div className="checkout-summary__item">
        <p>Thành tiền</p>
        <p className="checkout-summary__total">{totalPrice}</p>
      </div>
      <textarea placeholder="Lời nhắn" />
      <button className="btn-primary">Đặt hàng ngay</button>
    </div>
  )
}

export default Summary
