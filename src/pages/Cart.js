import Summary from "../components/Cart/Summary"
import CartTable from "../components/Cart/CartTable"
import PageLinks from "../components/PageLinks"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value)
  return (
    <>
      <PageLinks links={[{ name: "Giỏ hàng", link: "/gio-hang" }]} />
      <div className="cart">
        <h3 className="cart__title">Giỏ hàng</h3>
        {cartItems.length > 0 ? (
          <div className="cart__container">
            <div className="cart__left">
              <CartTable />
            </div>
            <div className="cart__right">
              <img
                src="https://i.pinimg.com/564x/a7/92/41/a79241873a4296430d0d521ac280ac3d.jpg"
                alt="quang-cao"
              />
              <Summary />
            </div>
          </div>
        ) : (
          <div className="cart__empty section-box">
            <h3>Không có sản phẩm</h3>
            <Link to="/danh-sach" className="btn-primary">
              Mua ngay
            </Link>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart
