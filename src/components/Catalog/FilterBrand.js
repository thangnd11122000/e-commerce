import { Checkbox, FormControlLabel } from "@mui/material"

const brands = ["nokia", "samsung", "iphone"]

const FilterBrand = ({ filterSelect, filter }) => {
  return (
    <>
      <h2>Thương hiệu</h2>
      <div>
        {brands.map((b, i) => (
          <FormControlLabel
            key={i}
            value={b}
            control={
              <Checkbox
                onChange={(e) => filterSelect("BRAND", e.target.checked, b)}
                checked={filter.brand.includes(b)}
              />
            }
            label={b}
          />
        ))}
      </div>
    </>
  )
}

export default FilterBrand
