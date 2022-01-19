import React, { useEffect, useState } from "react"

import Rating from "@mui/material/Rating"
import getDiscount from "../../utils/getDiscount"

const Content = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const discountValue = getDiscount(product.discount, product.price)

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1)
    } else {
      setQuantity(quantity === 1 ? 1 : quantity - 1)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  useEffect(() => {
    setQuantity(1)
  }, [product])

  return (
    <div className="detail__content">
      <div className="detail__content--name">{product.name}</div>
      <div className="detail__content--review">
        <Rating name="content-review" value={product.rating} readOnly />
        <p className="line">|</p>
        <p>3 danh gia</p>
      </div>
      <div className="detail__content--price">
        {discountValue ? (
          <p className="discount">
            {discountValue}đ <del>{product.price}đ</del>
          </p>
        ) : (
          <p className="normal">{product.price}đ</p>
        )}
      </div>
      <hr />
      <p className="detail__content--description">{product.shortDescription}</p>
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
        <button className="btn-primary">Thêm vào giỏ</button>
        <button className="btn-secondary">Mua ngay</button>
      </div>
      <div className="detail__content--socials">
        <p>Thêm vào yêu thích</p>
        <p>Chia sẻ</p>
      </div>
      <div className="detail__content--category">
        <p>
          Danh mục: <span>{}</span>
        </p>
      </div>
      <div className="detail__content--brand">
        <p>
          Thương hiệu: <span>xzy</span>
        </p>
      </div>
    </div>
  )
}

export default Content
