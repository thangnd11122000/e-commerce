import { useEffect, useState } from "react"
import ProductSlide from "./ProductSlider"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { useSelector } from "react-redux"

const a11yProps = (index) => {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  }
}

const ProductTab = ({ title, productsData, loading }) => {
  const categoriesApi = useSelector((state) => state.categoriesApi)

  categoriesApi.error && console.log(categoriesApi.error.message)

  const [categories, setCategories] = useState([])

  const [value, setValue] = useState(0)

  const [products, setProducts] = useState(productsData)

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (categoriesApi.response !== null) {
      setCategories([
        { id: 0, category_name: "Tất cả" },
        ...categoriesApi.response,
      ])
    }
  }, [categoriesApi.response])

  useEffect(() => {
    if (productsData !== null) {
      setProducts(productsData)
    }
  }, [productsData])

  const handleClick = (id) => {
    if (id === 0) {
      setProducts(productsData)
      return
    }
    const newProduct = productsData.filter((p) => p.category_id === id)
    setProducts(newProduct)
  }

  return (
    <div className="product-tab">
      <div className="product-tab__header">
        <h3>{title}</h3>
        <Box>
          {!categoriesApi.loading && (
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="product tabs"
              className="product-tab__tabs"
            >
              {categories.map((c) => (
                <Tab
                  key={c.id}
                  value={c.id}
                  label={c.category_name}
                  {...a11yProps(c.id)}
                  onClick={() => handleClick(c.id)}
                  className="product-tab__button"
                />
              ))}
            </Tabs>
          )}
        </Box>
      </div>
      {categoriesApi.loading ? (
        <div className="product-tab__empty"></div>
      ) : (
        <>
          {categories.map((c) => (
            <div
              className="product-tab__body"
              role="tabpanel"
              hidden={value !== c.id}
              id={`product-tabpanel-${c.id}`}
              aria-labelledby={`product-tab-${c.id}`}
              key={c.id}
            >
              <ProductSlide
                value={value}
                index={c.id}
                products={products}
                loading={loading}
              />
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default ProductTab
