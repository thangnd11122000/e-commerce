import { createSlice } from "@reduxjs/toolkit"

const data =
  localStorage.getItem("orderTemp") !== null
    ? JSON.parse(localStorage.getItem("orderTemp"))
    : null

const initialState = {
  data: data,
}

export const orderTempSlice = createSlice({
  name: "orderTemp",
  initialState,
  reducers: {
    insertOrderTemp: (state, action) => {
      state.data = action.payload
      localStorage.setItem("orderTemp", JSON.stringify(state.data))
    },
    deleteOrderTemp: (state) => {
      state.data = null
      localStorage.removeItem("orderTemp")
    },
  },
})

export const { insertOrderTemp, deleteOrderTemp } = orderTempSlice.actions

export default orderTempSlice.reducer
