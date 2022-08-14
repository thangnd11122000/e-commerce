import axios from "axios"
import { refreshHeader } from "./axios-base"

const userInfo = () => {
  return axios.get("/api/customers").then((res) => res.data.data)
}

const login = (email, password) => {
  return axios
    .post("/api/auth/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data[0]) {
        localStorage.setItem("token", JSON.stringify(response.data[0].token))
        refreshHeader()
      }
    })
}

const logout = () => {
  localStorage.removeItem("token")
}

const authService = {
  login,
  logout,
  userInfo,
}
export default authService
