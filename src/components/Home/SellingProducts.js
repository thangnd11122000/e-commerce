import ProductSlide from "../Product/ProductSlider"
import { productsData } from "../../data"
const SellingProducts = () => {
  return (
    <div className="selling-product">
      <div className="home__header">
        <h3>Sản phẩm bán chạy</h3>
        <span>Xem tất cả {">"}</span>
      </div>
      <ProductSlide products={productsData} />
    </div>
  )
}

export default SellingProducts
