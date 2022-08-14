import axios from "axios"
import Notification from "../components/Notification"

const Token = "897b0fc3-e1e2-11eb-9389-f656af98cb33"

export const getProvincesAPI = () =>
  axios("https://online-gateway.ghn.vn/shiip/public-api/master-data/province", {
    method: "GET",
    headers: { Token },
  }).then((res) => res.data.data)

export const getDistrictsAPI = (province_id) =>
  axios("https://online-gateway.ghn.vn/shiip/public-api/master-data/district", {
    method: "POST",
    headers: {
      Token: "897b0fc3-e1e2-11eb-9389-f656af98cb33",
    },
    data: {
      province_id: province_id,
    },
  }).then((res) => res.data.data)

export const getWardsAPI = (district_id) =>
  axios(
    "https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id",
    {
      method: "POST",
      headers: { Token: "897b0fc3-e1e2-11eb-9389-f656af98cb33" },
      data: { district_id: district_id },
    }
  ).then((res) => res.data.data)

export const getAllAddressAPI = (user_id) =>
  axios(`/api/addresses/${user_id}`).then((res) => res.data.data)

export const deleteAddressAPI = (address_id, user_id) =>{
  return axios(`/api/addresses/${address_id}`, {
    method: "DELETE",
    data: {
      id: user_id,
    },
  })
    .then((res) => {
      if (res.data.code === "200") {
        Notification({
          notify: {
            isOpen: true,
            message: "Xoá địa chỉ thành công",
            type: "success",
          },
        })
      }
      return res.data.code
    })
    .catch(() =>
      Notification({
        notify: {
          isOpen: true,
          message: "Xoá địa chỉ thất bại",
          type: "error",
        },
      })
    )}

export const insertAddressAPI = (payload) =>
  axios("/api/addresses", {
    method: "POST",
    data: {
      ...payload,
    },
  })

export const updateAddressAPI = (address_id, payload) =>
  axios("/api/addresses/" + address_id, {
    method: "PUT",
    data: {
      ...payload,
    },
  })

export const setAddressAPI = (address_id, user_id) =>
  axios(`/api/addresses/${address_id}/default`, {
    method: "PUT",
    data: {
      id: user_id,
    },
  })
