import { useCallback, useState, useEffect } from "react"
import PageLinks from "../components/PageLinks"
import { recommendedProductsData } from "../data"
import { Tune } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { openFilter } from "../features/toggle/toggleSlice"
import FilterContainer from "../components/Catalog/FilterContainer"
import ProductContainer from "../components/Catalog/ProductContainer"

const initFilter = {
  category: [],
  color: [],
  brand: [],
}

const Catalog = () => {
  const [products, setProducts] = useState(recommendedProductsData)
  const [minMaxPrice, setMinMaxPrice] = useState([0, 9999])
  const [priceSlider, setPriceSlider] = useState([0, 9999])
  const [sorting, setSorting] = useState("")
  const [isResetPage, setIsResetPage] = useState(false)

  const dispatch = useDispatch()

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item],
          })
          break
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item] })
          break
        case "BRAND":
          setFilter({ ...filter, brand: [...filter.brand, item] })
          break
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter((c) => c !== item)
          setFilter({ ...filter, category: newCategory })
          break
        case "COLOR":
          const newColor = filter.color.filter((c) => c !== item)
          setFilter({ ...filter, color: newColor })
          break
        case "BRAND":
          const brand = filter.brand.filter((b) => b !== item)
          setFilter({ ...filter, brand: brand })
          break
        default:
      }
    }
  }

  const filterSorting = useCallback(
    (productsData) => {
      switch (sorting) {
        case "":
          return productsData
        case "DISCOUNT":
          let temp = productsData.filter((p) => "discount" in p)
          temp = temp.sort((product1, product2) => {
            const discount1 =
              product1?.amount || (product1.price * product1.percent) / 100
            const discount2 =
              product2?.amount || (product2.price * product2.percent) / 100

            return discount1 > discount2 ? 1 : -1
          })
          return temp
        case "BESTSELLER":
          break
        case "DOWN":
          return productsData.sort((a, b) => (a.price < b.price ? 1 : -1))
        case "UP":
          return productsData.sort((a, b) => (a.price > b.price ? 1 : -1))

        default:
          return productsData
      }
    },
    [sorting]
  )

  const updateProducts = useCallback(() => {
    let temp = recommendedProductsData

    if (filter.category.length > 0) {
      temp = temp.filter((t) => filter.category.includes(t.category_id))
    }
    if (filter.color.length > 0) {
      temp = temp.filter((t) => {
        const check = t.colors.find((c) => filter.color.includes(c))
        return check !== undefined
      })
    }
    if (filter.brand.length > 0) {
      temp = temp.filter((t) => filter.brand.includes(t.brand))
    }

    temp = filterSorting(temp)

    temp = temp.filter(
      (t) => t.price >= priceSlider[0] && t.price <= priceSlider[1]
    )

    setProducts(temp)
    setIsResetPage(true)
  }, [filter.brand, filter.category, filter.color, filterSorting, priceSlider])

  const clearFilter = () => {
    setFilter(initFilter)
    setPriceSlider(minMaxPrice)
  }

  const getMinMaxPrice = (productsData) => {
    let price = []
    productsData.map((p) => (price = [...price, p.price]))
    let minPrice = Math.min(...price)
    let maxPrice = Math.max(...price)
    return [minPrice, maxPrice]
  }

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  useEffect(() => {
    const temp = getMinMaxPrice(recommendedProductsData)
    setMinMaxPrice(temp)
    setPriceSlider(temp)
  }, [])

  return (
    <>
      <PageLinks links={[{ name: "Mua sam", link: "/catalog" }]} />
      <div className="catalog">
        <div className="catalog__toggle" onClick={() => dispatch(openFilter())}>
          <Tune />
        </div>

        <FilterContainer
          filter={filter}
          filterSelect={filterSelect}
          minMaxPrice={minMaxPrice}
          priceSlider={priceSlider}
          setPriceSlider={setPriceSlider}
          clearFilter={clearFilter}
        />

        <ProductContainer
          products={products}
          sorting={sorting}
          setSorting={setSorting}
          minMaxPrice={minMaxPrice}
          isResetPage={isResetPage}
          setIsResetPage={setIsResetPage}
          filter={filter}
          filterSelect={filterSelect}
          priceSlider={priceSlider}
          setPriceSlider={setPriceSlider}
        />
      </div>
    </>
  )
}

export default Catalog
