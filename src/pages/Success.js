import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PuffLoader } from "react-spinners"
import { clearCart } from "../store/cartItemsSlice"
import { deleteOrderTemp } from "../store/orderTemp"

const Success = () => {
  const orderTemp = useSelector((state) => state.orderTemp.data)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (orderTemp?.data) {
      setLoading(true)
      axios("/api/order", { method: "POST", data: orderTemp })
        .then(() => {
          dispatch(deleteOrderTemp())
          dispatch(clearCart())
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [dispatch, orderTemp])

  return (
    <div className="success-page">
      {loading ? (
        <div className="product-loading" style={{ padding: "150px 0" }}>
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <div className="wrapperAlert">
          <div className="contentAlert">
            <div className="topHalf">
              <p>
                <svg viewBox="0 0 512 512" width="100" title="check-circle">
                  <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                </svg>
              </p>
              <h1>Congratulations</h1>

              <ul className="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            <div className="bottomHalf">
              <p>Bạn đã mua hàng thành công</p>

              <button id="alertMO">Moving On</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Success
