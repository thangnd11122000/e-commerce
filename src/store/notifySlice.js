import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: {
    isOpen: false,
    message: "",
    type: "success",
  },
}

export const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    showNotify: (state, action) => {
      state.data = action.payload
    },
    hideNotify: (state) => {
      state.data = { ...state.data, isOpen: false }
    },
  },
})

export const { showNotify, hideNotify } = notifySlice.actions

export default notifySlice.reducer
