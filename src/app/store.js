import { configureStore } from "@reduxjs/toolkit"
import toggleReducer from "../features/toggle/toggleSlice"
import cartItemsReducer from "../features/cartItems/cartItemsSlice"
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cartItems: cartItemsReducer,
  },
})
