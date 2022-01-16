import { Checkbox, FormControlLabel } from "@mui/material"
import { categoriesData } from "../../data"
import uppercaseFirstLetter from "../../utils/string"

const FilterCategory = ({ filterSelect, filter }) => {
  return (
    <>
      <h2>Danh mục</h2>
      <div>
        {categoriesData.map((c, i) => (
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
            label={uppercaseFirstLetter(c.name)}
          />
        ))}
      </div>
    </>
  )
}

export default FilterCategory
