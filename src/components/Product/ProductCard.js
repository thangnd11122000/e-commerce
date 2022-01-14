import React from "react";
import {
  FavoriteBorder,
  RemoveRedEyeOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Rating } from "@mui/material";

const ProductCard = ({ product }) => {
  const { id, name, image, price, discount, rating, category_id } = product;

  const discountValue = discount
    ? discount.amount
      ? price - discount.amount
      : price - (price * discount.percent) / 100
    : null;

  return (
    <div className="product-card">
      <div className="product-card__features">
        {discount ? (
          discount.amount ? (
            <span>-{discount.amount}$</span>
          ) : (
            <span>{discount.percent}%</span>
          )
        ) : (
          ""
        )}
      </div>
      <div className="product-card__actions">
        <FavoriteBorder className="product-card__actions--icon" />
        <ShoppingBagOutlined className="product-card__actions--icon" />
        <RemoveRedEyeOutlined className="product-card__actions--icon" />
      </div>

      <img src={image} alt="" className="product-card__image" />
      <p className="product-card__name">{name}</p>

      <div className="product-card__price">
        {discount ? (
          <div className="product-card__price--discount">
            <del>${price}</del>&nbsp; ${discountValue}
          </div>
        ) : (
          <div className="product-card__price--normal">${price}</div>
        )}
      </div>
      <Rating name="product-rating" value={rating} size="small" readOnly />
    </div>
  );
};

export default ProductCard;
