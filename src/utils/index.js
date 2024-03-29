export const formatCurrency = (num) =>
  (num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0) + "đ"

export const getAllUrlParams = (url) => {
  var queryString = url ? url.split("?")[1] : window.location.search.slice(1)
  var obj = {}
  if (queryString) {
    queryString = queryString.split("#")[0]
    var arr = queryString.split("&")
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split("=")
      var paramName = a[0]
      var paramValue = typeof a[1] === "undefined" ? true : a[1]
      paramName = paramName.toLowerCase()
      if (typeof paramValue === "string") paramValue = paramValue.toLowerCase()
      if (paramName.match(/\[(\d+)?\]$/)) {
        var key = paramName.replace(/\[(\d+)?\]/, "")
        if (!obj[key]) obj[key] = []
        if (paramName.match(/\[\d+\]$/)) {
          var index = /\[(\d+)\]/.exec(paramName)[1]
          obj[key][index] = paramValue
        } else {
          obj[key].push(paramValue)
        }
      } else {
        if (!obj[paramName]) {
          obj[paramName] = paramValue
        } else if (obj[paramName] && typeof obj[paramName] === "string") {
          obj[paramName] = [obj[paramName]]
          obj[paramName].push(paramValue)
        } else {
          obj[paramName].push(paramValue)
        }
      }
    }
  }

  return obj
}

export const scrollOnTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
}

export const getPostCategoryName = (array, id) => {
  let temp = array?.filter((arr) => arr.id === id)
  return temp ? temp[0].name : ""
}

export const getDiscount = (discount, price) => {
  return discount
    ? discount.discount_type === "Money"
      ? price - discount.discount_value
      : price - (price * discount.discount_value) / 100
    : 0
}
