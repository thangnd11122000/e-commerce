import { Grid, Pagination } from "@mui/material"
import { useEffect, useState } from "react"
import usePagination from "../Pagination/Pagination"
import ProductCard from "../Product/ProductCard"
import { PuffLoader } from "react-spinners"
import { useAxios } from "../../hook/useAxios"

const RecommendedProducts = () => {
  let [page, setPage] = useState(1)

  const [products, setProducts] = useState([])

  const { response, loading, error } = useAxios({ url: "/api/product" })
  // const { response, loading, error } = useAxios({ url: "/api/product?is_featured=featured&_page=1" })

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
        <h3>Dành cho bạn</h3>
        {/* <span>Xem tất cả</span> */}
      </div>

      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <>
          <Grid
            container
            spacing={2}
            columns={{ xs: 2, sm: 3, md: 4, lg: 6, xl: 6 }}
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

export default RecommendedProducts
