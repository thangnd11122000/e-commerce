import { FavoriteBorder } from "@mui/icons-material"
import { Rating } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addFavorite, deleteFavorite } from "../../store/favoritesSlice"
import { showNotify } from "../../store/notifySlice"
import { formatCurrency, getDiscount } from "../../utils"
import LazyLoad from "react-lazyload"

const ProductCard = ({ product, hidePrice = false }) => {
  const productIds = useSelector((state) => state.favorites.productIds)
  const dispatch = useDispatch()
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
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (product?.id) {
      const isExist = productIds.some((id) => id === product?.id)
      setIsFavorite(isExist)
    }
  }, [product?.id, productIds])

  return (
    <div className="product-card">
      <div className="product-card__features">
        {discount ? (
          discount.discount_type === "Money" ? (
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
        {!isFavorite ? (
          <div
            onClick={() => {
              dispatch(addFavorite(product))
              dispatch(
                showNotify({
                  isOpen: true,
                  message: "Thêm sản phẩm yêu thích thành công",
                  type: "success",
                })
              )
            }}
          >
            <FavoriteBorder className="product-card__actions--icon" />
          </div>
        ) : (
          <div
            onClick={() => {
              dispatch(deleteFavorite(product.id))
              dispatch(
                showNotify({
                  isOpen: true,
                  message: "Xoá sản phẩm yêu thích thành công",
                  type: "success",
                })
              )
            }}
          >
            <FavoriteBorder className="product-card__actions--icon active" />
          </div>
        )}
      </div>
      <Link to={`/san-pham/${id}`} className="product-card__image">
        <LazyLoad>
          <img src={image} alt="" />
        </LazyLoad>
      </Link>
      <Link to={`/san-pham/${id}`} className="product-card__name">
        {product_name}
      </Link>
      {!hidePrice && (
        <div className="product-card__price">
          {discount ? (
            <div className="product-card__price--discount">
              <del>{formatCurrency(price)}</del>&nbsp;{" "}
              {formatCurrency(discountValue)}
            </div>
          ) : (
            <div className="product-card__price--normal">
              {formatCurrency(price)}
            </div>
          )}
        </div>
      )}
      <Rating name="product-rating" value={rated} size="small" readOnly />
    </div>
  )
}

export default ProductCard
