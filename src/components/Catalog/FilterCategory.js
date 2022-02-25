import { Checkbox, FormControlLabel } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { MoonLoader } from "react-spinners"
import uppercaseFirstLetter from "../../utils/string"
import { css } from "@emotion/react"

const override = css`
  display: block;
  margin: 20px auto;
`

const FilterCategory = ({ filterSelect, filter }) => {
  const [data, setData] = useState([])

  const { loading, response, error } = useSelector(
    (state) => state.categoriesApi
  )
  error && console.log(error)
  useEffect(() => {
    if (response !== null) {
      setData(response)
    }
  }, [response])

  return (
    <>
      <h2>Danh mục</h2>
      <div className="category-filter">
        {loading ? (
          <MoonLoader color="#0032FE" size={30} css={override} />
        ) : (
          <>
            {data.map((c, i) => (
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
          </>
        )}
      </div>
    </>
  )
}

export default FilterCategory
