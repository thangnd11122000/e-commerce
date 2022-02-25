import { Grid, Pagination } from "@mui/material"
import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import usePagination from "../Pagination/Pagination"
import { useParams } from "react-router-dom"
import axios from "axios"
import { PuffLoader } from "react-spinners"

const BlogList = ({ categories }) => {
  const params = useParams()
  let [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(12)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      axios
        .get(`/posts?category_id=${params.id}`)
        .then((res) => {
          setPosts(res.data)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    } else {
      axios
        .get(`/posts`)
        .then((res) => {
          setPosts(res.data)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [params.id])

  const count = Math.ceil(posts.length / perPage)
  const _DATA = usePagination(posts, perPage)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <>
      {loading ? (
        <div className="product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <>
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
            onClick={handleClick}
          />
        </>
      )}
    </>
  )
}

export default BlogList
