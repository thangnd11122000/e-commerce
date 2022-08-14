import { createSlice } from "@reduxjs/toolkit"
import getDiscount from "../../utils/getDiscount"

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []

const getTotalPrice = (products) => {
  return products.reduce((total, product) => {
    const discountValue = getDiscount(product.discount, product.price)
    discountValue > 0
      ? (total += Number(product.quantity) * Number(discountValue))
      : (total += Number(product.quantity) * Number(product.price))
    return total
  }, 0)
}

const getTotalProduct = (products) => {
  return products.reduce((total, product) => (total += product.quantity), 0)
}

const initialState = {
  value: items,
  totalPrice: getTotalPrice(items),
  totalProduct: getTotalProduct(items),
}

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const duplicate = state.value.filter(
        (product) => product.id === newItem.id
      )
      if (duplicate.length > 0) {
        state.value = state.value.filter((product) => product.id !== newItem.id)
        state.value = [
          ...state.value,
          { ...newItem, quantity: newItem.quantity + duplicate[0].quantity },
        ]
      } else {
        state.value = [...state.value, newItem]
      }
      state.totalPrice = getTotalPrice(state.value)
      state.totalProduct = getTotalProduct(state.value)
      localStorage.setItem("cartItems", JSON.stringify(state.value))
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      )
      state.totalPrice = getTotalPrice(state.value)
      state.totalProduct = getTotalProduct(state.value)
      localStorage.setItem("cartItems", JSON.stringify(state.value))
    },
    deleteMultiItem: (state, action) => {
      state.value = state.value.filter(
        (product) => !action.payload.includes(product.id)
      )
      state.totalPrice = getTotalPrice(state.value)
      state.totalProduct = getTotalProduct(state.value)
      localStorage.setItem("cartItems", JSON.stringify(state.value))
    },

    increaseQuantity: (state, action) => {
      state.value = state.value.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity + 1 }
        }
        return product
      })
      state.totalPrice = getTotalPrice(state.value)
      state.totalProduct = getTotalProduct(state.value)
      localStorage.setItem("cartItems", JSON.stringify(state.value))
    },
    decreaseQuantity: (state, action) => {
      let temp = state.value.map((product) => {
        if (product.id === action.payload) {
          return { ...product, quantity: product.quantity - 1 }
        }
        return product
      })
      state.value = temp.filter((product) => product.quantity > 0)
      state.totalPrice = getTotalPrice(state.value)
      state.totalProduct = getTotalProduct(state.value)
      localStorage.setItem("cartItems", JSON.stringify(state.value))
    },
    changeQuantity: (state, action) => {
      state.value = state.value.map((product) => {
        if (product.id === action.payload.id) {
          if (action.payload.value === "")
            return {
              ...product,
              quantity: 1,
            }
          else
            return {
              ...product,
              quantity: parseInt(action.payload.value),
            }
        }
        return product
      })
      state.totalPrice = getTotalPrice(state.value)
      state.totalProduct = getTotalProduct(state.value)
      localStorage.setItem("cartItems", JSON.stringify(state.value))
    },
  },
})
export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
  deleteItem,
  deleteMultiItem,
} = cartItemsSlice.actions
export default cartItemsSlice.reducer
