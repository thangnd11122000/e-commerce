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
const FavoritesPage = React.lazy(() => import("./pages/Favorites"))
const NotFoundPage = React.lazy(() => import("./pages/NotFound"))

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/danh-sach/*" element={<CatalogPage />} />
      <Route path="/san-pham/:id" element={<DetailPage />} />
      <Route path="/san-pham-yeu-thich" element={<FavoritesPage />} />
      <Route path="/gio-hang" element={<CartPage />} />
      <Route path="/ve-chung-toi" element={<AboutPage />} />
      <Route path="/bai-viet/*" element={<BlogPage />} />

      <Route path="/doi-email" element={<ChangeEmailPage />} />
      <Route path="/doi-so-dien-thoai" element={<ChangePhonePage />} />
      <Route path="/quen-mat-khau" element={<ForgotPasswordPage />} />
      <Route path="/doi-mat-khau/*" element={<ChangePasswordPage />} />
      <Route path="/lien-he" element={<ContactPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/thanh-toan" element={<CheckoutPage />} />
        <Route path="/thanh-cong/*" element={<SuccessPage />} />
        <Route path="/trang-ca-nhan/*" element={<UserPage />} />
      </Route>

      <Route element={<LoggedRoute />}>
        <Route path="/dang-nhap" element={<LoginPage />} />
        <Route path="/dang-ky" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes
