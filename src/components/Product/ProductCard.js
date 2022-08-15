import {
  FavoriteBorder,
  RemoveRedEyeOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material"
import { Rating } from "@mui/material"
import { Link } from "react-router-dom"
import { formatCurrency } from "../../utils"
import getDiscount from "../../utils/getDiscount"

const ProductCard = ({ product }) => {
  const { id, product_name, product_slug, image, price, discount, rating } =
    product
  const discountValue = getDiscount(discount, price)
  return (
    <div className="product-card">
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
        <ShoppingBagOutlined className="product-card__actions--icon" />
        <Link to={`/san-pham/${id}`}>
          <RemoveRedEyeOutlined className="product-card__actions--icon" />
        </Link>
      </div>
      <Link to={`/san-pham/${id}`}>
        <img src={image} alt="" className="product-card__image" />
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
