import { formatCurrency } from "../../utils"

const Summary = ({
  totalPrice,
  shippingFee,
  handleOrder,
  setNote,
  totalDiscount,
  voucherPrice,
}) => {
  return (
    <div className="section-box checkout-summary">
      <h3 className="section-box__title">Thanh toán</h3>
      <div className="checkout-summary__item">
        <p>Tạm tính</p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <div className="checkout-summary__item">
        <p>Giảm giá</p>
        <p style={{ color: "red" }}>{formatCurrency(totalDiscount)}</p>
      </div>
      {voucherPrice > 0 && (
        <div className="checkout-summary__item">
          <p>Voucher</p>
          <p style={{ color: "red" }}>{formatCurrency(voucherPrice)}</p>
        </div>
      )}
      <div className="checkout-summary__item">
        <p>Phí vận chuyển</p>
        <p>{formatCurrency(shippingFee)}</p>
      </div>
      <div className="checkout-summary__item">
        <p>Thành tiền</p>
        <p className="checkout-summary__total">
          {formatCurrency(
            totalPrice + shippingFee - totalDiscount - voucherPrice
          )}
          đ
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
