import { useEffect, useState } from "react"
import { useAxios } from "../../hook/useAxios"
import ProductTab from "../Product/ProductTab"
const FlashSale = () => {
  const [products, setProducts] = useState([])
  const { response, loading, error } = useAxios({
    url: "/api/products_discount?_page=1&_limit=10&_sort=created_at&_order=desc",
  })
  error && console.log(error.message)

  useEffect(() => {
    if (response !== null) {
      setProducts(response.data)
    }
  }, [response])

  return (
    <div className="flash-sale">
      <ProductTab
        title="Flash Sale"
        productsData={products}
        loading={loading}
      />
    </div>
  )
}

export default FlashSale
