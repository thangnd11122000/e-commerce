import { Grid, Pagination } from "@mui/material"
import { useEffect, useState } from "react"
import usePagination from "../Pagination/Pagination"
import ProductCard from "../Product/ProductCard"

const Products = ({
  products,
  layout,
  isResetPage,
  setIsResetPage,
  isSwitchLayout,
  setIsSwitchLayout,
  handleMoveClick,
}) => {
  let [page, setPage] = useState(1)

  const [perPage, setPerPage] = useState(20)

  const count = Math.ceil(products.length / perPage)
  const _DATA = usePagination(products, perPage)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  useEffect(() => {
    if (isResetPage) {
      setPage(1)
      _DATA.reset()
    }
    setIsResetPage(false)
  }, [_DATA, isResetPage, setIsResetPage])

  useEffect(() => {
    if (isSwitchLayout) {
      layout === 2
        ? setPerPage(20)
        : layout === 3
        ? setPerPage(30)
        : layout === 4
        ? setPerPage(40)
        : setPerPage(50)
      setPage(1)
      _DATA.reset()
    }
    setIsSwitchLayout(false)
  }, [_DATA, isSwitchLayout, layout, setIsSwitchLayout])

  return (
    <div>
      <Pagination
        className="pagination"
        count={count}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        onClick={handleMoveClick}
      />
      <Grid container spacing={2} columns={{ xs: layout }}>
        {_DATA.currentData().map((p, i) => (
          <Grid item xs={1} key={i}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        className="pagination"
        count={count}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        onClick={handleMoveClick}
      />
    </div>
  )
}

export default Products
