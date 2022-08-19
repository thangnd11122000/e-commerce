import { Checkbox, Divider, ListItem } from "@mui/material"
import { Fragment, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material"

const FilterCategory = ({ filterSelect, filter }) => {
  const [categories, setCategories] = useState([])
  const [openIndex, setOpenIndex] = useState(-1)

  const handleClick = (id) =>
    id === openIndex ? setOpenIndex(-1) : setOpenIndex(id)

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
        <List
          sx={{ width: "100%" }}
          component="nav"
          aria-labelledby="filter-categories"
        >
          {!loading &&
            categories.map((c) => (
              <Fragment key={c.id}>
                <ListItem
                  key={c.id}
                  secondaryAction={
                    !c?.submenu?.length && (
                      <Checkbox
                        edge="end"
                        value={c.id}
                        onChange={(e) =>
                          filterSelect("CATEGORY", e.target.checked, c.id)
                        }
                        checked={filter.category.includes(c.id)}
                        inputProps={{ "aria-labelledby": c.id }}
                      />
                    )
                  }
                  disablePadding
                >
                  <ListItemButton onClick={() => handleClick(c.id)}>
                    <ListItemText primary={c.category_name} />
                    {c.submenu.length ? (
                      openIndex === c.id ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : (
                      <></>
                    )}
                  </ListItemButton>
                </ListItem>
                <Divider variant="fullWidth" component="div" />
                <Collapse
                  in={openIndex === c.id}
                  timeout="auto"
                  unmountOnExit
                  sx={{ maxHeight: 250, overflow: "scroll" }}
                >
                  <List component="div" disablePadding>
                    {c.submenu?.map((s) => (
                      <ListItem
                        key={s.id}
                        secondaryAction={
                          <Checkbox
                            edge="end"
                            value={s.id}
                            onChange={(e) =>
                              filterSelect("CATEGORY", e.target.checked, s.id)
                            }
                            checked={filter.category.includes(s.id)}
                            inputProps={{ "aria-labelledby": s.id }}
                          />
                        }
                        disablePadding
                      >
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemText primary={s.category_name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Fragment>
            ))}
        </List>
      </div>
    </>
  )
}

export default FilterCategory
