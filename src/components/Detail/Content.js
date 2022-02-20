import { useEffect, useState } from "react"
import { Rating } from "@mui/material"
import { useDispatch } from "react-redux"
import { addItem } from "../../features/cartItems/cartItemsSlice"
import { useNavigate } from "react-router-dom"
import ConfirmDialog from "../ConfirmDialog"
import getDiscount from "../../utils/getDiscount"

const Content = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    type: "",
    title: "",
    onConfirm: () => {},
  })

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
    setConfirmDialog({
      isOpen: true,
      type: "success",
      title: "Thêm thành công",
      subTitle: "Di chuyển đến giỏ hàng?",
      onConfirm: () => navigate("/cart"),
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

  return (
    <>
      <div className="detail-content">
        <div className="detail-content__name">{product.name}</div>
        <div className="detail-content__review">
          <Rating name="content-review" value={product.rating} readOnly />
          <p className="line">|</p>
          <p>3 danh gia</p>
        </div>
        <div className="detail-content__price">
          {discountValue ? (
            <p className="discount">
              {discountValue}đ <del>{product.price}đ</del>
            </p>
          ) : (
            <p className="normal">{product.price}đ</p>
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
            Danh mục: <span>{}</span>
          </p>
        </div>
        <div className="detail-content__brand">
          <p>
            Thương hiệu: <span>xzy</span>
          </p>
        </div>
      </div>

      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )
}

export default Content
