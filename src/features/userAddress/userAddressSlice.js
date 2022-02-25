import { createSlice } from "@reduxjs/toolkit"

const items =
  localStorage.getItem("userAddress") !== null
    ? JSON.parse(localStorage.getItem("userAddress"))
    : []

const initialState = {
  value: items,
}

const findItem = (arr, item) =>
  arr.filter(
    (a) =>
      a.name === item.name &&
      a.phone === item.phone &&
      a.email === item.email &&
      a.province === item.province &&
      a.district === item.district &&
      a.commune === item.commune &&
      a.detail === item.detail
  )

const deleteItem = (arr, item) =>
  arr.filter(
    (a) =>
      a.name !== item.name ||
      a.phone !== item.phone ||
      a.email !== item.email ||
      a.province !== item.province ||
      a.district !== item.district ||
      a.commune !== item.commune ||
      a.detail !== item.detail
  )

const inactiveAll = (arr) => {
  return arr?.map((a) => (a.active = false))
}

export const userAddressSlice = createSlice({
  name: "userAddress",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      inactiveAll(state.value)
      const newItem = action.payload
      const duplicate = findItem(state.value, newItem)
      if (duplicate.length > 0) {
        state.value = deleteItem(state.value, newItem)
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: duplicate[0].id,
            active: true,
          },
        ]
      } else {
        state.value = [
          ...state.value,
          {
            ...newItem,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
            active: true,
          },
        ]
      }
      state.value = state.value.sort((a, b) =>
        a.id > b.id ? 1 : a.id < b.id ? -1 : 0
      )
      localStorage.setItem("userAddress", JSON.stringify(state.value))
    },
    editAddress: (state, action) => {
      inactiveAll(state.value)
      const index = state.value?.findIndex(
        (info) => info.id === action.payload.id
      )
      state.value[index] = { ...action.payload, active: true }
      localStorage.setItem("userAddress", JSON.stringify(state.value))
    },
    selectedAddress: (state, action) => {
      inactiveAll(state.value)
      const index = state.value?.findIndex((info) => info.id === action.payload)
      state.value[index] = { ...state.value[index], active: true }
      localStorage.setItem("userAddress", JSON.stringify(state.value))
    },
    deleteAddress: (state, action) => {
      state.value = state.value.filter((info) => info.id !== action.payload)
      localStorage.setItem("userAddress", JSON.stringify(state.value))
    },
  },
})
export const { addAddress, editAddress, selectedAddress, deleteAddress } =
  userAddressSlice.actions
export default userAddressSlice.reducer
