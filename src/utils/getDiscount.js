const getDiscount = (discount, price) => {
  return discount
    ? discount.discount_type === "Price"
      ? price - discount.discount_value
      : price - (price * discount.discount_value) / 100
    : 0
}

export default getDiscount
