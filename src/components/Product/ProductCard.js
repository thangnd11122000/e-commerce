import {
  FavoriteBorder,
  RemoveRedEyeOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material"
import { Rating } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addItem } from "../../store/cartItems/cartItemsSlice"
import { showNotify } from "../../store/notifySlice"
import { formatCurrency } from "../../utils"
import getDiscount from "../../utils/getDiscount"
import Notification from "../Notification"

const ProductCard = ({ product }) => {
  const { id, product_name, image, price, discount, rating } = product
  const discountValue = getDiscount(discount, price)

  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" })

  const dispatch = useDispatch()

  const addToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }))
    dispatch(
      showNotify({
        isOpen: true,
        message: "Thêm sản phẩm thành công",
        type: "success",
      })
    )
  }

  return (
    <div className="product-card">
      <Notification
        notify={notify}
        setNotify={setNotify}
        style={{
          position: "fixed !important",
          top: "0 !important",
          left: "0 !important",
        }}
      />
      <div className="product-card__features">
        {discount ? (
          discount.discount_type === "Price" ? (
            <span>-{discount.discount_value}đ</span>
          ) : (
            <span>{discount.discount_value}%</span>
          )
        ) : (
          ""
        )}
      </div>
      <div className="product-card__actions">
        <FavoriteBorder className="product-card__actions--icon" />
        <ShoppingBagOutlined
          className="product-card__actions--icon"
          onClick={() => addToCart(product)}
        />
        <Link to={`/san-pham/${id}`}>
          <RemoveRedEyeOutlined className="product-card__actions--icon" />
        </Link>
      </div>
      <Link to={`/san-pham/${id}`} className="product-card__image">
        <img src={image} alt="" />
      </Link>
      <Link to={`/san-pham/${id}`} className="product-card__name">
        {product_name}
      </Link>
      <div className="product-card__price">
        {discount ? (
          <div className="product-card__price--discount">
            <del>{formatCurrency(price)}đ</del>&nbsp;{" "}
            {formatCurrency(discountValue)}đ
          </div>
        ) : (
          <div className="product-card__price--normal">
            {formatCurrency(price)}đ
          </div>
        )}
      </div>
      <Rating name="product-rating" value={rating} size="small" readOnly />
    </div>
  )
}

export default ProductCard
