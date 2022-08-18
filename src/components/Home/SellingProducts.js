import ProductSlide from "../Product/ProductSlider"
import { useEffect, useState } from "react"
import { useAxios } from "../../hook/useAxios"
const SellingProducts = () => {
  const [products, setProducts] = useState([])

  const { response, loading, error } = useAxios({ url: "/api/product?is_new=new&_page=1&_limit=10" })
  error && console.log(error.message)

  useEffect(() => {
    if (response !== null) {
      setProducts(response.data)
    }
  }, [response])

  return (
    <div className="selling-product">
      <div className="home__header">
        <h3>Sản phẩm mới</h3>
        {/* <span>Xem tất cả {">"}</span> */}
      </div>
      <ProductSlide products={products} loading={loading} />
    </div>
  )
}

export default SellingProducts
