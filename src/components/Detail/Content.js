import { useEffect, useState } from "react"
import { Link, Rating } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { addItem } from "../../features/cartItems/cartItemsSlice"
import { useNavigate } from "react-router-dom"
import getDiscount from "../../utils/getDiscount"
import Notification from "../Notification"
import { MoonLoader } from "react-spinners"
import formatCurrency from "../../utils/formatCurrency"

const Content = ({ product }) => {
  const { loading, response, error } = useSelector(
    (state) => state.categoriesApi
  )
  error && console.log(error)

  const [category, setCategory] = useState([])

  const [quantity, setQuantity] = useState(1)
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" })

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const discountValue = getDiscount(product.discount, product.price)

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity === 1 ? 1 : quantity - 1)
    }
  }

  const addToCart = () => {
    dispatch(addItem({ ...product, quantity }))
    setNotify({
      isOpen: true,
      message: "Thêm sản phẩm thành công",
      type: "success",
    })
  }

  const goToCart = () => {
    dispatch(addItem({ ...product, quantity }))
    navigate("/cart")
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  useEffect(() => {
    setQuantity(1)
  }, [product])

  useEffect(() => {
    if (response !== null && loading === false) {
      let temp = response.filter((r) => r.id === product.category_id)
      setCategory(temp[0])
    }
  }, [loading, product.category_id, response])

  return (
    <>
      <div className="detail-content">
        <div className="detail-content__name">{product.name}</div>
        <div className="detail-content__review">
          <Rating name="content-review" value={product.rating} readOnly />
          <p className="line">|</p>
          <p>3 đánh giá</p>
        </div>
        <div className="detail-content__price">
          {discountValue ? (
            <p className="discount">
              {formatCurrency(discountValue)}đ{" "}
              <del>{formatCurrency(product.price)}đ</del>
            </p>
          ) : (
            <p className="normal">{formatCurrency(product.price)}đ</p>
          )}
        </div>
        <hr />
        <p className="detail-content__description">
          {product.shortDescription}
        </p>
        <div className="detail__actions">
          <div className="detail__actions--quantity">
            <button onClick={() => updateQuantity("minus")}>-</button>
            <input
              type="number"
              name=""
              id=""
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button onClick={() => updateQuantity("plus")}>+</button>
          </div>
          <button className="btn-primary" onClick={addToCart}>
            Thêm vào giỏ
          </button>
          <button className="btn-secondary" onClick={goToCart}>
            Mua ngay
          </button>
        </div>
        <div className="detail-content__socials">
          <p>Thêm vào yêu thích</p>
          <p>Chia sẻ</p>
        </div>
        <div className="detail-content__category">
          <p>
            Danh mục:
            {loading ? (
              <MoonLoader color="#0032FE" size={15} />
            ) : (
              <Link to={category?.link}>{category?.name}</Link>
            )}
          </p>
        </div>
        <div className="detail-content__brand">
          <p>
            Thương hiệu: <span>xzy</span>
          </p>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  )
}

export default Content
