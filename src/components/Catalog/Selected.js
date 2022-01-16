import { useEffect, useState } from "react"
import { categoriesData } from "../../data"
import uppercaseFirstLetter from "../../utils/string"

const Selected = ({
  minMaxPrice,
  filter,
  filterSelect,
  priceSlider,
  setPriceSlider,
}) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let temp = []
    filter.category.forEach((c) => {
      temp = [...temp, ...categoriesData.filter((d) => d.id === c)]
    })
    setCategories(temp)
  }, [filter.category])

  return (
    <div className="catalog__selected">
      {categories.length > 0 && (
        <div className="catalog__selected--box">
          <p>Danh mục: </p>
          {categories.map((c, i) => (
            <div key={c.id}>
              {uppercaseFirstLetter(c.name)}
              <button onClick={() => filterSelect("CATEGORY", false, c.id)}>
                X
              </button>
            </div>
          ))}
        </div>
      )}

      {filter.color.length > 0 && (
        <div className="catalog__selected--box">
          <p>Màu: </p>
          {filter.color.map((c, i) => (
            <div key={i}>
              {uppercaseFirstLetter(c)}
              <button onClick={() => filterSelect("COLOR", false, c)}>X</button>
            </div>
          ))}
        </div>
      )}

      {filter.brand.length > 0 && (
        <div className="catalog__selected--box">
          <p>Thương hiệu: </p>
          {filter.brand.map((b, i) => (
            <div key={i}>
              {uppercaseFirstLetter(b)}
              <button onClick={() => filterSelect("BRAND", false, b)}>X</button>
            </div>
          ))}
        </div>
      )}
      {!(
        priceSlider[0] === minMaxPrice[0] && priceSlider[1] === minMaxPrice[1]
      ) && (
        <div className="catalog__selected--box">
          <p>Khoảng giá:</p>
          <div>
            {priceSlider[0]}d - {priceSlider[1]}d
            <button onClick={() => setPriceSlider(minMaxPrice)}>X</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Selected
