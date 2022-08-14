export const formatCurrency = (num) =>
  num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0

export const formatDate = (date) =>
  date
    ? date.split("T")[0].split("-").reverse().join("-")
    : ""
