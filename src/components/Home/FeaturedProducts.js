import { Grid, Pagination } from "@mui/material"
import { useEffect, useState } from "react"
import usePagination from "../Pagination/Pagination"
import ProductCard from "../Product/ProductCard"
import { PuffLoader } from "react-spinners"
import { useAxios } from "../../hook/useAxios"

const FeaturedProducts = () => {
  let [page, setPage] = useState(1)

  const [products, setProducts] = useState([])

  const { response, loading, error } = useAxios({
    url: "/api/product?is_featured=Featured&_page=1&_limit=18&_sort=created_at&_order=desc",
  })

  error && console.log(error.message)

  useEffect(() => {
    if (response !== null) {
      setProducts(response.data)
    }
  }, [response])

  const PER_PAGE = 6

  const count = Math.ceil(products.length / PER_PAGE)
  const _DATA = usePagination(products, PER_PAGE)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }
  return (
    <div className="recommended-products">
      <div className="home__header">
        <h3>Sản phẩm nổi bật</h3>
      </div>

      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <>
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2 }}
            rowSpacing={{ xs: 1, sm: 2 }}
            columns={{ xs: 1, xss: 2, sm: 3, md: 3, lg: 6, xl: 6 }}
            className="recommended-products__list"
          >
            {Array.isArray(_DATA.currentData()) &&
              _DATA.currentData().map((d, i) => (
                <Grid item xs={1} key={i}>
                  <ProductCard product={d} loading={loading} />
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
        </>
      )}
    </div>
  )
}

export default FeaturedProducts
