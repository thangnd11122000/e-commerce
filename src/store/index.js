import { configureStore } from "@reduxjs/toolkit"
import toggleReducer from "./toggleSlice"
import cartItemsReducer from "./cartItemsSlice"
import categoriesApiReducer from "./categoriesApiSlice"
import authReducer from "./authSlice"
import orderTempReducer from "./orderTemp"
import notifyReducer from "./notifySlice"

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cartItems: cartItemsReducer,
    categoriesApi: categoriesApiReducer,
    auth: authReducer,
    orderTemp: orderTempReducer,
    notify: notifyReducer,
  },
})
