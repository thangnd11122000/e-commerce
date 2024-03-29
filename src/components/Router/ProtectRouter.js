import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)
  if (!isLoggedIn) {
    return <Navigate to="/dang-nhap?back=true" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
