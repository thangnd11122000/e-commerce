const Summary = ({ totalPrice, shippingFee, handleOrder, setNote }) => {
  return (
    <div className="section-box checkout-summary">
      <h3 className="section-box__title">Thanh toán</h3>
      <div className="checkout-summary__item">
        <p>Tạm tính</p>
        <p>{totalPrice}</p>
      </div>
      <div className="checkout-summary__item">
        <p>Phí vận chuyển</p>
        <p>{shippingFee}</p>
      </div>
      <div className="checkout-summary__item">
        <p>Thành tiền</p>
        <p className="checkout-summary__total">{totalPrice}</p>
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
