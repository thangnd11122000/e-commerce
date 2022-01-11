import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenDropdown: false,
  isOpenMenuSidebar: false,
  isOpenCartSidebar: false,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    handleDropdown: (state) => {
      state.isOpenDropdown = !state.isOpenDropdown;
    },
    closeDropdown: (state) => {
      state.isOpenDropdown = false;
    },
    handleMenuSidebar: (state) => {
      state.isOpenMenuSidebar = !state.isOpenMenuSidebar;
    },
    openMenuSidebar: (state) => {
      state.isOpenMenuSidebar = true;
    },
    closeMenuSidebar: (state) => {
      state.isOpenMenuSidebar = false;
    },
    handleCartSidebar: (state) => {
      state.isOpenCartSidebar = !state.isOpenCartSidebar;
    },
    openCartSidebar: (state) => {
      state.isOpenCartSidebar = true;
    },
    closeCartSidebar: (state) => {
      state.isOpenCartSidebar = false;
    },
  },
});

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
} = headerSlice.actions;

export default headerSlice.reducer;
