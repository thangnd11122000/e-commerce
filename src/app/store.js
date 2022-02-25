import { configureStore } from "@reduxjs/toolkit"
import toggleReducer from "../features/toggle/toggleSlice"
import cartItemsReducer from "../features/cartItems/cartItemsSlice"
import userAddressReducer from "../features/userAddress/userAddressSlice"
import categoriesApiReducer from "../features/api/categoriesApiSlice"
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    cartItems: cartItemsReducer,
    userAddress: userAddressReducer,
    categoriesApi: categoriesApiReducer,
  },
})
