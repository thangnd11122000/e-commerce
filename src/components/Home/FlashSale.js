import { useEffect, useState } from "react"
import ProductTab from "../Product/ProductTab"
import useAxios from "../../hook/useAxios"
const FlashSale = () => {
  const [products, setProducts] = useState([])
  const { response, loading, error } = useAxios({ url: "/products?_limit=12" })

  useEffect(() => {
    if (response !== null) {
      setProducts(response)
    }
  }, [response])
  return (
    <div className="flash-sale">
      {error && console.log(error.message)}
      <ProductTab
        title="Flash Sale"
        productsData={products}
        loading={loading}
      />
    </div>
  )
}

export default FlashSale
