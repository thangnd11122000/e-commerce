import { Tune } from "@mui/icons-material"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import Aside from "../components/UserInfo/Aside"
import Main from "../components/UserInfo/Main"
import { openMenuUser } from "../store/toggle/toggleSlice"

const User = () => {
  const [page, setPage] = useState("information")
  const dispatch = useDispatch()
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
