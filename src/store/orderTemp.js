import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: null,
}

export const orderTempSlice = createSlice({
  name: "orderTemp",
  initialState,
  reducers: {
    insertOrderTemp: (state, action) => {
      state.data = action.payload
    },
    deleteOrderTemp: (state) => {
      state.data = null
    },
  },
})

export const { insertOrderTemp, deleteOrderTemp } = orderTempSlice.actions

export default orderTempSlice.reducer
