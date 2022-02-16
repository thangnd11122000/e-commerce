import React, { useState } from "react"
import Aside from "../components/UserInfo/Aside"
import Main from "../components/UserInfo/Main"

const UserInfo = () => {
  const [page, setPage] = useState("information")
  return (
    <div className="user">
      <Aside setPage={setPage} />
      <Main page={page} />
    </div>
  )
}

export default UserInfo
