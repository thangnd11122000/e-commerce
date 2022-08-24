import { FavoriteBorder, RemoveRedEyeOutlined } from "@mui/icons-material"
import { Rating } from "@mui/material"
import { Link } from "react-router-dom"
import { formatCurrency } from "../../utils"
import getDiscount from "../../utils/getDiscount"

const ProductCard = ({ product }) => {
  const {
    id,
    product_name,
    image,
    price,
    discount,
    rated,
    is_new,
    is_featured,
  } = product
  const discountValue = getDiscount(discount, price)
  return (
    <div className="product-card">
      <div className="product-card__features">
        {discount ? (
          discount.discount_type === "Price" ? (
            <span className="discount">-{discount.discount_value}đ</span>
          ) : (
            <span className="discount">{discount.discount_value}%</span>
          )
        ) : (
          ""
        )}
        {is_new === "New" && <span className="new">New</span>}
        {is_featured === "Featured" && <span className="featured">Hot</span>}
      </div>
      <div className="product-card__actions">
        <Link to={`/san-pham/${id}`}>
          <RemoveRedEyeOutlined className="product-card__actions--icon" />
        </Link>
        <FavoriteBorder className="product-card__actions--icon" />
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
      <Rating name="product-rating" value={rated} size="small" readOnly />
    </div>
  )
}

export default ProductCard
