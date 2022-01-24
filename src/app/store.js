import { configureStore } from "@reduxjs/toolkit"
import toggleReducer from "../features/toggle/toggleSlice"
import cartItemsReducer from "../features/cartItems/cartItemsSlice"
import userInfoReducer from "../features/userInfo/userInfo"
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cartItems: cartItemsReducer,
    userInfo: userInfoReducer,
  },
})
