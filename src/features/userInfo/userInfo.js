import { createSlice } from "@reduxjs/toolkit"

const items =
  localStorage.getItem("userInfo") !== null
    ? JSON.parse(localStorage.getItem("userInfo"))
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
      a.address.province === item.address.province &&
      a.address.district === item.address.district &&
      a.address.commune === item.address.commune &&
      a.address.detail === item.address.detail
  )

const deleteItem = (arr, item) =>
  arr.filter(
    (a) =>
      a.name !== item.name ||
      a.phone !== item.phone ||
      a.email !== item.email ||
      a.address.province !== item.address.province ||
      a.address.district !== item.address.district ||
      a.address.commune !== item.address.commune ||
      a.address.detail !== item.address.detail
  )

const inactiveAll = (arr) => {
  return arr?.map((a) => (a.active = false))
}

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    addInfo: (state, action) => {
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
      localStorage.setItem("userInfo", JSON.stringify(state.value))
    },
    editInfo: (state, action) => {
      inactiveAll(state.value)
      const index = state.value?.findIndex(
        (info) => info.id === action.payload.id
      )
      state.value[index] = { ...action.payload, active: true }
      localStorage.setItem("userInfo", JSON.stringify(state.value))
    },
    selectedInfo: (state, action) => {
      inactiveAll(state.value)
      const index = state.value?.findIndex(
        (info) => info.id === action.payload
      )
      state.value[index] = { ...state.value[index], active: true }
      localStorage.setItem("userInfo", JSON.stringify(state.value))
    },
    deleteInfo: (state, action) => {
      state.value = state.value.filter((info) => info.id !== action.payload)
      localStorage.setItem("userInfo", JSON.stringify(state.value))
    },
  },
})
export const { addInfo, editInfo,selectedInfo, deleteInfo } = userInfoSlice.actions
export default userInfoSlice.reducer
