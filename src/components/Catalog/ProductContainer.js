import { useCallback, useEffect, useRef, useState } from "react"
import Display from "./Display"
import Products from "./Products"
import Selected from "./Selected"
import Sorting from "./Sorting"

const ProductContainer = ({
  products,
  loading,
  sorting,
  setSorting,
  minMaxPrice,
  isResetPage,
  setIsResetPage,
  filter,
  filterSelect,
  priceSlider,
  setPriceSlider,
}) => {
  const [layout, setLayout] = useState(4)
  const [width, setWidth] = useState(window.innerWidth)
  const [isSwitchLayout, setIsSwitchLayout] = useState()

  const productsRef = useRef(null)

  const handleMoveClick = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" })
  }

  const handleWindowResize = useCallback(() => {
    setWidth(window.innerWidth)
    if (width > 900) {
      setLayout(4)
    } else if (width > 600) {
      setLayout(3)
    } else if (width > 375) {
      setLayout(2)
    } else {
      setLayout(1)
    }
  }, [width])

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [handleWindowResize])

  useEffect(() => {
    setWidth(window.innerWidth)
    if (window.innerWidth > 900) {
      setLayout(4)
    } else if (window.innerWidth > 600) {
      setLayout(3)
    } else {
      setLayout(2)
    }
  }, [])

  return (
    <div className="catalog__products" ref={productsRef}>
      <div className="catalog__selection">
        <Sorting setSorting={setSorting} sorting={sorting} />
        <Display
          width={width}
          layout={layout}
          setLayout={setLayout}
          setIsSwitchLayout={setIsSwitchLayout}
        />
        <p>{products.length} sản phẩm</p>
      </div>
      <Selected
        minMaxPrice={minMaxPrice}
        filter={filter}
        filterSelect={filterSelect}
        priceSlider={priceSlider}
        setPriceSlider={setPriceSlider}
      />
      <Products
        products={products}
        loading={loading}
        layout={layout}
        isResetPage={isResetPage}
        setIsResetPage={setIsResetPage}
        isSwitchLayout={isSwitchLayout}
        setIsSwitchLayout={setIsSwitchLayout}
        handleMoveClick={handleMoveClick}
      />
    </div>
  )
}

export default ProductContainer
