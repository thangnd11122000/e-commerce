import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"

const Coupons = ({ setVoucher }) => {
  const { user } = useSelector((state) => state.auth)
  const [value, setValue] = useState()
  const [type, setType] = useState(null)

  const getVoucher = () => {
    setVoucher(null)
    setType(null)
    axios
      .post("/api/voucher", {
        voucher_code: value,
        customer_id: user.id,
      })
      .then((res) => {
        if (res.data.code === 201) {
          setType(1)
          setVoucher({
            discount_value: res.data.data.discount_value,
            discount_type: res.data.data.voucher_type,
          })
        } else {
          setType(0)
        }
      })
      .catch(() => setType(0))
  }

  const renderMessage = () => {
    switch (type) {
      case 1:
        return (
          <p style={{ color: "green", marginTop: "10px" }}>
            Áp dụng mã thành công
          </p>
        )
      case 0:
        return (
          <p style={{ color: "red", marginTop: "10px" }}>Mã không chính xác</p>
        )

      default:
        return ""
    }
  }

  return (
    <div className="section-box">
      <h3 className="section-box__title">Nhập mã giảm giá</h3>
      <div className="cart-coupons__button">
        <input
          type="text"
          name=""
          id=""
          placeholder="Nhập mã của bạn"
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="btn-primary" onClick={getVoucher}>
          Áp dụng
        </p>
      </div>
      {renderMessage()}
    </div>
  )
}

export default Coupons
