import { createSlice } from "@reduxjs/toolkit"

const items =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites"))
    : []

const productIds =
  localStorage.getItem("productIds") !== null
    ? JSON.parse(localStorage.getItem("productIds"))
    : []

const initialState = {
  value: items,
  productIds,
}

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.value = [...state.value, action.payload]
      state.productIds = [...state.productIds, action.payload.id]
      localStorage.setItem("favorites", JSON.stringify(state.value))
      localStorage.setItem("productIds", JSON.stringify(state.productIds))
    },

    deleteFavorite: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      )
      state.productIds = state.productIds.filter((id) => id !== action.payload)
      localStorage.setItem("favorites", JSON.stringify(state.value))
      localStorage.setItem("productIds", JSON.stringify(state.productIds))
    },
  },
})
export const { addFavorite, deleteFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
