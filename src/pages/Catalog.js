import { useCallback, useState, useEffect } from "react"
import PageLinks from "../components/PageLinks"
import { Tune } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { openFilter } from "../store/toggleSlice"
import FilterContainer from "../components/Catalog/FilterContainer"
import ProductContainer from "../components/Catalog/ProductContainer"
import { useAxios } from "../hook/useAxios"
import { useLocation } from "react-router-dom"
import { getAllUrlParams, scrollOnTop } from "../utils"
import axios from "axios"

const initFilter = {
  category: [],
  isNew: false,
  isFeatured: false,
}

const Catalog = () => {
  const location = useLocation()
  const [productsData, setProductsData] = useState([])
  const [products, setProducts] = useState([])

  const { response, loading } = useAxios({ url: "/api/product?_sort=created_at&_order=desc" })

  const [minMaxPrice, setMinMaxPrice] = useState([0, 9999])
  const [priceSlider, setPriceSlider] = useState([0, 9999])
  const [sorting, setSorting] = useState("")
  const [isResetPage, setIsResetPage] = useState(false)

  const dispatch = useDispatch()

  const [filter, setFilter] = useState(initFilter)

  useEffect(() => {
    const params = getAllUrlParams(location.search)
    const search = params._q || ""
    axios
      .get(`/api/product?q=${search}&_sort=created_at&_order=desc`)
      .then((res) => {
        if (res.data) {
          setProductsData(res.data.data)
        }
      })
      .catch(() => setProductsData([]))

    if (params._cat) {
      setFilter({
        ...initFilter,
        category: [...initFilter.category, +params._cat],
      })
    }
  }, [location.search])

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item],
          })
          break
        case "ISNEW":
          setFilter({ ...filter, isNew: true })
          break
        case "ISFEATURED":
          setFilter({ ...filter, isFeatured: true })
          break
        // case "COLOR":
        //   setFilter({ ...filter, color: [...filter.color, item] })
        //   break
        default:
          break
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter((c) => c !== item)
          setFilter({ ...filter, category: newCategory })
          break
        case "ISNEW":
          setFilter({ ...filter, isNew: false })
          break
        case "ISFEATURED":
          setFilter({ ...filter, isFeatured: false })
          break
        // case "COLOR":
        //   const newColor = filter.color.filter((c) => c !== item)
        //   setFilter({ ...filter, color: newColor })
        //   break
        default:
          break
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
              product1?.discount?.discount_type === "Percent"
                ? (product1.price * product1?.discount?.discount_value) / 100
                : product1?.discount?.discount_value
            const discount2 =
              product2?.discount?.discount_type === "Percent"
                ? (product2.price * product2?.discount?.discount_value) / 100
                : product1?.discount?.discount_value

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
    if (productsData !== null) {
      let temp = productsData

      if (filter.category.length > 0) {
        temp = temp.filter((t) => filter.category.includes(t.category_id))
      }

      if (filter.isNew) {
        temp = temp.filter((t) => t.is_new === "New")
      }

      if (filter.isFeatured) {
        temp = temp.filter((t) => t.is_featured === "Featured")
      }

      // if (filter.color.length > 0) {
      //   temp = temp.filter((t) => {
      //     const check = t.colors?.find((c) => filter.color.includes(c))
      //     return check !== undefined
      //   })
      // }

      temp = filterSorting(temp)
      temp = temp.filter(
        (t) => t.price >= priceSlider[0] && t.price <= priceSlider[1]
      )

      setProducts(temp)
      setIsResetPage(true)
    }
  }, [
    filter.category,
    filter.isFeatured,
    filter.isNew,
    filterSorting,
    priceSlider,
    productsData,
  ])

  const clearFilter = () => {
    setFilter(initFilter)
    setPriceSlider(minMaxPrice)
    scrollOnTop()
  }

  const getMinMaxPrice = (productsData) => {
    let price = []
    productsData.map((p) => (price = [...price, p?.price || 0]))
    let minPrice = Math.min(...price)
    let maxPrice = Math.max(...price)
    return [minPrice, maxPrice]
  }

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  useEffect(() => {
    if (response !== null) {
      const temp = getMinMaxPrice(response.data)
      setMinMaxPrice(temp)
      setPriceSlider(temp)
    }
  }, [response])

  return (
    <>
      <PageLinks links={[{ name: "Mua sắm", link: "/danh-sach" }]} />
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
          loading={loading}
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
