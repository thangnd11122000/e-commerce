import ProductSlide from "../Product/ProductSlider"
import { useEffect, useState } from "react"
import { useAxios } from "../../hook/useAxios"
const SellingProducts = () => {
  const [products, setProducts] = useState([])

  const { response, loading, error } = useAxios({ url: "/products?_limit=12" })
  error && console.log(error.message)

  useEffect(() => {
    if (response !== null) {
      setProducts(response)
    }
  }, [response])

  return (
    <div className="selling-product">
      <div className="home__header">
        <h3>Sản phẩm bán chạy</h3>
        <span>Xem tất cả {">"}</span>
      </div>
      <ProductSlide products={products} loading={loading} />
    </div>
  )
}

export default SellingProducts
