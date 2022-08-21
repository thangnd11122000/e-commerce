import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isOpenDropdown: false,
  isOpenMenuSidebar: false,
  isOpenCartSidebar: false,
  isOpenFilter: false,
  isOpenMenuUser: false,
}

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    handleDropdown: (state) => {
      state.isOpenDropdown = !state.isOpenDropdown
    },
    closeDropdown: (state) => {
      state.isOpenDropdown = false
    },
    handleMenuSidebar: (state) => {
      state.isOpenMenuSidebar = !state.isOpenMenuSidebar
    },
    openMenuSidebar: (state) => {
      state.isOpenMenuSidebar = true
    },
    closeMenuSidebar: (state) => {
      state.isOpenMenuSidebar = false
    },
    handleCartSidebar: (state) => {
      state.isOpenCartSidebar = !state.isOpenCartSidebar
    },
    openCartSidebar: (state) => {
      state.isOpenCartSidebar = true
    },
    closeCartSidebar: (state) => {
      state.isOpenCartSidebar = false
    },
    openFilter: (state) => {
      state.isOpenFilter = true
    },
    closeFilter: (state) => {
      state.isOpenFilter = false
    },
    openMenuUser: (state) => {
      state.isOpenMenuUser = true
    },
    closeMenuUser: (state) => {
      state.isOpenMenuUser = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  handleDropdown,
  closeDropdown,
  handleMenuSidebar,
  openMenuSidebar,
  closeMenuSidebar,
  handleCartSidebar,
  openCartSidebar,
  closeCartSidebar,
  openFilter,
  closeFilter,
  openMenuUser,
  closeMenuUser,
} = toggleSlice.actions

export default toggleSlice.reducer
