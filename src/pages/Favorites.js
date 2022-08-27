import { Grid, Pagination } from "@mui/material"
import { useState } from "react"
import { useSelector } from "react-redux"
import usePagination from "../components/Pagination/Pagination"
import ProductCard from "../components/Product/ProductCard"

const Products = () => {
  const products = useSelector((state) => state.favorites.value)
  let [page, setPage] = useState(1)

  const [perPage] = useState(18)

  const count = Math.ceil(products.length / perPage)
  const _DATA = usePagination(products, perPage)
  const handleChange = (_e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  return (
    <div className="favorite">
      <h2>Sản phẩm yêu thích</h2>
      {products?.length ? (
        <div>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2 }}
            rowSpacing={{ xs: 1, sm: 2 }}
            columns={{ xs: 2, sm: 3, md: 3, lg: 6, xl: 6 }}
          >
            {_DATA.currentData().map((p, i) => (
              <Grid item xs={1} key={i}>
                <ProductCard product={p} isFavorite={true} />
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
          />
        </div>
      ) : (
        <div className="product-slider__empty">
          <h3>Không có sản phẩm</h3>
        </div>
      )}
    </div>
  )
}

export default Products
