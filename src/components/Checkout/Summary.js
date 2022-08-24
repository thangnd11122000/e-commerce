import { formatCurrency } from "../../utils"

const Summary = ({
  totalPrice,
  shippingFee,
  handleOrder,
  setNote,
  totalDiscount,
}) => {
  return (
    <div className="section-box checkout-summary">
      <h3 className="section-box__title">Thanh toán</h3>
      <div className="checkout-summary__item">
        <p>Tạm tính</p>
        <p>{formatCurrency(totalPrice)}đ</p>
      </div>
      <div className="checkout-summary__item">
        <p>Giảm giá</p>
        <p>{formatCurrency(totalDiscount)}đ</p>
      </div>
      <div className="checkout-summary__item">
        <p>Phí vận chuyển</p>
        <p>{formatCurrency(shippingFee)}đ</p>
      </div>
      <div className="checkout-summary__item">
        <p>Thành tiền</p>
        <p className="checkout-summary__total">
          {formatCurrency(totalPrice + shippingFee - totalDiscount)}đ
        </p>
      </div>
      <textarea
        placeholder="Lời nhắn"
        onChange={(e) => setNote(e.target.value)}
      />
      <p className="btn-primary" onClick={handleOrder}>
        Đặt hàng ngay
      </p>
    </div>
  )
}

export default Summary
