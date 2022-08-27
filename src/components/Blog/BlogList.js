import { Grid, Pagination } from "@mui/material"
import { useEffect, useState, useCallback } from "react"
import BlogCard from "./BlogCard"
import usePagination from "../Pagination/Pagination"
import { useParams } from "react-router-dom"
import axios from "axios"
import { PuffLoader } from "react-spinners"
import { scrollOnTop } from "../../utils"

const BlogList = ({ categories, postCategories = [] }) => {
  const params = useParams()
  let [page, setPage] = useState(12)
  const [perPage] = useState(5)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        `/api/blogs/blog-categories/${params.id}?_page=1&_limit=9&_sort=created_at&_order=desc&status=1`
      )
      .then((res) => {
        setPosts(res.data.data.data)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [params.id])

  const count = Math.ceil(posts.length / perPage)
  const _DATA = usePagination(posts, perPage)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  const renderTitle = useCallback(
    (id) => {
      if (Array.isArray(postCategories)) {
        const temp = postCategories.filter((cat) => cat.id === +id)
        if (temp.length) {
          return temp[0].name
        }
      }
      return ""
    },
    [postCategories]
  )

  return (
    <>
      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <>
          <h3 style={{ fontSize: "24px", fonWeight: "700", color: "#16bcdc", padding: '0 10px' }}>
            {renderTitle(params.id)}
          </h3>
          <Grid container spacing={1} columns={6}>
            {_DATA.currentData().map((p, i) => (
              <Grid item xs={6} sm={3} md={2} key={i}>
                <BlogCard post={p} categories={categories} />
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
            onClick={scrollOnTop}
          />
        </>
      )}
    </>
  )
}

export default BlogList
