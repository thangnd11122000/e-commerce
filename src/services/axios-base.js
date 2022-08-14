import axios from "axios"
import authHeader from "./auth-header"

axios.defaults.baseURL = process.env.REACT_APP_API_SERVER

axios.defaults.headers.post["Accept"] = "application/json"

axios.defaults.headers = authHeader()

export const refreshHeader = () => {
  axios.defaults.headers = authHeader()
}

export default axios
