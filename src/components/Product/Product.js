import React from "react";
import {
  FavoriteBorder,
  RemoveRedEyeOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { Rating } from "@mui/material";

const Product = ({ product }) => {
  const { id, name, image, price, discount, rating, category_id } = product;

  const discountValue = discount
    ? discount.amount
      ? price - discount.amount
      : price - (price * discount.percent) / 100
    : null;

  return (
    <div className="product">
      <div className="product__features">
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
      <div className="product__actions">
        <FavoriteBorder className="product__actions--icon" />
        <ShoppingBagOutlined className="product__actions--icon" />
        <RemoveRedEyeOutlined className="product__actions--icon" />
      </div>

      <img src={image} alt="" className="product__image" />
      <p className="product__name">{name}</p>

      <div className="product__price">
        {discount ? (
          <div className="product__price--discount">
            <del>${price}</del>&nbsp; ${discountValue}
          </div>
        ) : (
          <div className="product__price--normal">${price}</div>
        )}
      </div>
      <Rating name="product-rating" value={rating} size="small" readOnly />
    </div>
  );
};

export default Product;
