import { Grid, Pagination } from "@mui/material"
import { useState } from "react"
import { postsData } from "../../data"
import BlogCard from "./BlogCard"
import usePagination from "../Pagination/Pagination"

const BlogList = () => {
  let [page, setPage] = useState(1)

  const [perPage, setPerPage] = useState(12)

  const count = Math.ceil(postsData.length / perPage)
  const _DATA = usePagination(postsData, perPage)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <>
      <Grid container spacing={1} columns={6}>
        {_DATA.currentData().map((p, i) => (
          <Grid item xs={6} sm={3} md={2} key={i}>
            <BlogCard post={p} />
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
  )
}

export default BlogList
