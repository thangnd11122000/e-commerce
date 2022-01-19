const getDiscount = (discount, price) => {
  return discount
    ? discount.amount
      ? price - discount.amount
      : price - (price * discount.percent) / 100
    : null
}

export default getDiscount
