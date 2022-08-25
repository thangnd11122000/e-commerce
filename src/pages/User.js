import { Tune } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import Aside from "../components/UserInfo/Aside"
import Main from "../components/UserInfo/Main"
import { openMenuUser } from "../store/toggleSlice"
import { getAllUrlParams } from "../utils"

const User = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const [page, setPage] = useState("thong-tin")

  useEffect(() => {
    const params = getAllUrlParams(location.search)
    const page = params._page || "thong-tin"
    setPage(page)
  }, [location.search])

  return (
    <div className="user">
      <div className="user__toggle" onClick={() => dispatch(openMenuUser())}>
        <Tune />
      </div>
      <Aside page={page} setPage={setPage} />
      <Main page={page} />
    </div>
  )
}

export default User
