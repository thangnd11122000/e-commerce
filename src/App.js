import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MobileBottom from "./components/Mobile/MobileBottom"
import "./App.css"
import AppRoutes from "./routes"
import { fetchCategories } from "./store/categoriesApiSlice"
import { userInfo } from "./store/authSlice"
import Notify from "./components/Notify"

function App() {
  const isOpenMenuSidebar = useSelector(
    (state) => state.toggle.isOpenMenuSidebar
  )
  const isOpenCartSidebar = useSelector(
    (state) => state.toggle.isOpenCartSidebar
  )
  const isOpenFilter = useSelector((state) => state.toggle.isOpenFilter)
  const isOpenMenuUser = useSelector((state) => state.toggle.isOpenMenuUser)

  const dispatch = useDispatch()

  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    isLoggedIn && dispatch(userInfo())
  }, [dispatch, isLoggedIn])

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <div className="App">
      <Notify />
      <Header />
      <AppRoutes />
      <Footer />
      <MobileBottom />
      <div
        className={`${
          isOpenMenuSidebar | isOpenCartSidebar | isOpenFilter | isOpenMenuUser
            ? "overlay"
            : ""
        }`}
      ></div>
    </div>
  )
}

export default App
