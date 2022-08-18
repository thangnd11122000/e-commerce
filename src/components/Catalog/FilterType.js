import { Checkbox, FormControlLabel } from "@mui/material"

const FilterType = ({ filterSelect, filter }) => {
  return (
    <>
      <h2>Thể loại</h2>
      <div>
        <FormControlLabel
          value={filter.isNew}
          control={
            <Checkbox
              onChange={(e) =>
                filterSelect("ISNEW", e.target.checked, filter.isNew)
              }
              checked={filter.isNew}
            />
          }
          label="Sản phẩm mới"
        />
        <FormControlLabel
          value={filter.isFeatured}
          control={
            <Checkbox
              onChange={(e) =>
                filterSelect("ISFEATURED", e.target.checked, filter.isFeatured)
              }
              checked={filter.isFeatured}
            />
          }
          label="Sản phẩm nổi bật"
        />
      </div>
    </>
  )
}

export default FilterType
