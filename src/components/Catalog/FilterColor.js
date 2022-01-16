import { Checkbox, FormControlLabel } from "@mui/material"
import React from "react"

const colors = ["red", "yellow", "blue"]

const FilterColor = ({ filterSelect, filter }) => {
  return (
    <>
      <h2>Màu sắc</h2>
      <div>
        {colors.map((c, i) => (
          <FormControlLabel
            key={i}
            value={c}
            control={
              <Checkbox
                onChange={(e) => filterSelect("COLOR", e.target.checked, c)}
                checked={filter.color.includes(c)}
              />
            }
            label={c}
          />
        ))}
      </div>
    </>
  )
}

export default FilterColor
