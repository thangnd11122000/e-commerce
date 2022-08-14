import { Checkbox, FormControlLabel } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { uppercaseFirstLetter } from "../../utils/string"

const FilterCategory = ({ filterSelect, filter }) => {
  const [categories, setCategories] = useState([])

  const { loading, response, error } = useSelector(
    (state) => state.categoriesApi
  )
  error && console.log(error)
  useEffect(() => {
    if (response !== null) {
      setCategories(response)
    }
  }, [response])

  return (
    <>
      <h2>Danh mục</h2>
      <div className="category-filter">
        {!loading &&
          categories.map((c, i) => (
            <FormControlLabel
              key={i}
              value={c.id}
              control={
                <Checkbox
                  onChange={(e) => {
                    filterSelect("CATEGORY", e.target.checked, c.id)
                  }}
                  checked={filter.category.includes(c.id)}
                />
              }
              label={uppercaseFirstLetter(c.category_name)}
            />
          ))}
      </div>
    </>
  )
}

export default FilterCategory
