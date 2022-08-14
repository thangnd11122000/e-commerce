import React from "react"
import { Routes, Route } from "react-router-dom"
import LoggedRoute from "./components/Router/LoggedRouter"
import ProtectedRoute from "./components/Router/ProtectRouter"

const HomePage = React.lazy(() => import("./pages/Home"))
const CatalogPage = React.lazy(() => import("./pages/Catalog"))
const DetailPage = React.lazy(() => import("./pages/Detail"))
const CartPage = React.lazy(() => import("./pages/Cart"))
const CheckoutPage = React.lazy(() => import("./pages/Checkout"))
const AboutPage = React.lazy(() => import("./pages/About"))
const BlogPage = React.lazy(() => import("./pages/Blog"))
const LoginPage = React.lazy(() => import("./pages/Login"))
const RegisterPage = React.lazy(() => import("./pages/Register"))
const ChangeEmailPage = React.lazy(() => import("./pages/ChangeEmail"))
const ChangePhonePage = React.lazy(() => import("./pages/ChangePhone"))
const ForgotPasswordPage = React.lazy(() => import("./pages/ForgotPassword"))
const ChangePasswordPage = React.lazy(() => import("./pages/ChangePassword"))
const ContactPage = React.lazy(() => import("./pages/Contact"))
const UserPage = React.lazy(() => import("./pages/User"))
const SuccessPage = React.lazy(() => import("./pages/Success"))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog/*" element={<BlogPage />} />

      <Route path="/change-email" element={<ChangeEmailPage />} />
      <Route path="/change-phone" element={<ChangePhonePage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/user" element={<UserPage />} />

      <Route element={<ProtectedRoute />}>
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/success" element={<SuccessPage />} />

      </Route>

      <Route element={<LoggedRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Route>
    </Routes>
  )
}

export default AppRoutes
