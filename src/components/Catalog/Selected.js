import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { formatCurrency } from "../../utils"
import { uppercaseFirstLetter } from "../../utils/string"

const Selected = ({
  minMaxPrice,
  filter,
  filterSelect,
  priceSlider,
  setPriceSlider,
}) => {
  const [categories, setCategories] = useState([])
  const [categoriesFilter, setCategoriesFilter] = useState([])

  const { response, error } = useSelector((state) => state.categoriesApi)
  error && console.log(error)
  useEffect(() => {
    if (response !== null) {
      setCategories(response)
    }
  }, [response])

  useEffect(() => {
    let temp = []
    filter.category.forEach((c) => {
      categories.forEach((cat) => {
        if (cat?.submenu?.length) {
          temp = [...temp, ...cat.submenu.filter((sub) => sub.id === c)]
        } else if (cat.id === c) {
          temp = [...temp, cat]
        }
      })
    })
    setCategoriesFilter(temp)
  }, [categories, filter.category])

  return (
    <div className="catalog-selected">
      {categoriesFilter?.length > 0 && (
        <div className="catalog-selected__list">
          <p>Danh mục: </p>
          {categoriesFilter.map((c, i) => (
            <div key={c.id}>
              {uppercaseFirstLetter(c.category_name)}
              <button onClick={() => filterSelect("CATEGORY", false, c.id)}>
                X
              </button>
            </div>
          ))}
        </div>
      )}

      {(filter.isNew || filter.isFeatured) && (
        <div className="catalog-selected__list">
          <p>Thể loại: </p>
          {filter.isNew && (
            <div>
              Sản phẩm mới
              <button onClick={() => filterSelect("ISNEW", false, false)}>
                X
              </button>
            </div>
          )}
          {filter.isFeatured && (
            <div>
              Sản phẩm nổi bật
              <button onClick={() => filterSelect("ISFEATURED", false, false)}>
                X
              </button>
            </div>
          )}
        </div>
      )}

      {!(
        priceSlider[0] === minMaxPrice[0] && priceSlider[1] === minMaxPrice[1]
      ) && (
        <div className="catalog-selected__list">
          <p>Khoảng giá:</p>
          <div>
            {formatCurrency(priceSlider[0])}đ - {formatCurrency(priceSlider[1])}
            đ<button onClick={() => setPriceSlider(minMaxPrice)}>X</button>
          </div>
        </div>
      )}

      {/* {filter.color.length > 0 && (
        <div className="catalog-selected__list">
          <p>Màu: </p>
          {filter.color.map((c, i) => (
            <div key={i}>
              {uppercaseFirstLetter(c)}
              <button onClick={() => filterSelect("COLOR", false, c)}>X</button>
            </div>
          ))}
        </div>
      )}*/}
    </div>
  )
}

export default Selected
