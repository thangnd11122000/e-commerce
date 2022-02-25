import { useEffect, useState } from "react"
import ProductSlide from "./ProductSlider"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { BarLoader, PuffLoader } from "react-spinners"
import { css } from "@emotion/react"

const a11yProps = (index) => {
  return {
    id: `product-tab-${index}`,
    "aria-controls": `product-tabpanel-${index}`,
  }
}

const override = css`
  display: block;
  margin: 20px auto;
`

const ProductTab = ({ title, productsData, loading }) => {
  const categoriesApi = useSelector((state) => state.categoriesApi)

  const [categories, setCategories] = useState([])

  const [value, setValue] = useState(0)

  const [products, setProducts] = useState(productsData)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (categoriesApi.response !== null) {
      setCategories([{ id: 0, name: "Tất cả" }, ...categoriesApi.response])
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
        <Link to="/#" className="product-tab__link">
          Xem tất cả {">"}
        </Link>
        <h3>{title}</h3>
        <Box>
          {categoriesApi.loading ? (
            <BarLoader color="#fff" height={4} css={override} size={15} />
          ) : (
            <>
              {categoriesApi.error && console.log(categoriesApi.error.message)}
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="product tabs"
                className="product-tab__tabs"
              >
                {categories.map((c, i) => (
                  <Tab
                    key={i}
                    label={c.name}
                    {...a11yProps(i)}
                    onClick={() => handleClick(i)}
                    className="product-tab__button"
                  />
                ))}
              </Tabs>
            </>
          )}
        </Box>
      </div>
      {categoriesApi.loading ? (
          <div className="product-tab__body product-tab__body--loading">
            <PuffLoader color="#fff" css={override} size={100} />
          </div>
      ) : (
        <>
          {categoriesApi.error && console.log(categoriesApi.error.message)}
          {categories.map((c, i) => (
            <div
              className="product-tab__body"
              role="tabpanel"
              hidden={value !== i}
              id={`product-tabpanel-${i}`}
              aria-labelledby={`product-tab-${i}`}
              key={i}
            >
              <ProductSlide
                value={value}
                index={i}
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
