import { Close } from "@mui/icons-material"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeFilter } from "../../features/toggle/toggleSlice"
import FilterBrand from "./FilterBrand"
import FilterCategory from "./FilterCategory"
import FilterColor from "./FilterColor"
import FilterPrice from "./FilterPrice"

const FilterContainer = ({
  filter,
  filterSelect,
  minMaxPrice,
  priceSlider,
  setPriceSlider,
  clearFilter,
}) => {
  const filterRef = useRef(null)

  const isOpenFilter = useSelector((state) => state.toggle.isOpenFilter)
  const dispatch = useDispatch()

  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        dispatch(closeFilter())
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dispatch, filterRef])

  return (
    <div
      className={`catalog-filter ${
        isOpenFilter ? "catalog-filter--active" : ""
      }`}
      ref={filterRef}
    >
      <div className="catalog-filter__header">
        <h3>Tùy chọn mua sắm</h3>
        <Close onClick={() => dispatch(closeFilter())} />
      </div>
      <div className="catalog-filter__item">
        <FilterCategory filterSelect={filterSelect} filter={filter} />
      </div>
      <div className="catalog-filter__item">
        <FilterPrice
          minMaxPrice={minMaxPrice}
          priceSlider={priceSlider}
          setPriceSlider={setPriceSlider}
          filter={filter}
        />
      </div>
      <div className="catalog-filter__item">
        <FilterColor filterSelect={filterSelect} filter={filter} />
      </div>
      <div className="catalog-filter__item">
        <FilterBrand filterSelect={filterSelect} filter={filter} />
      </div>
      <h3 className="btn-primary" onClick={clearFilter}>
        Xóa bộ lọc
      </h3>
    </div>
  )
}

export default FilterContainer
