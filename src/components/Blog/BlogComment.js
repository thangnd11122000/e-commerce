import dayjs from "dayjs"
import { Fragment, useState } from "react"
import BlogForm from "./BlogForm"
import avatar from "../../assets/img/common/user.png"
import { Pagination } from "@mui/material"
import usePagination from "../Pagination/Pagination"

const BlogComment = ({ blogId, comments = [], setComments, getComments }) => {
  let [page, setPage] = useState(1)
  const [perPage] = useState(5)
  const count = Math.ceil(comments.length / perPage)
  const _DATA = usePagination(comments, perPage)

  const handleChange = (e, p) => {
    setPage(p)
    _DATA.jump(p)
  }

  return (
    <div className="blog-comment">
      <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>
        {comments?.length || 0} bình luận
      </h3>
      <BlogForm
        blogId={blogId}
        setComments={setComments}
        getComments={getComments}
      />
      <div className="blog-comment__item">
        {_DATA.currentData().map((c, i) => (
          <Fragment key={c.id}>
            <div className="blog-comment__main">
              <div className="blog-comment__content">
                <img src={c?.avatar || avatar} alt="" />
                <div>
                  <h5>
                    {c.fullname} -{" "}
                    <span>{dayjs(c.created_at).format("DD/MM/YYYY")}</span>
                  </h5>
                  <p>{c.content}</p>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
        {comments?.length > 0 && (
          <Pagination
            className="pagination"
            count={count}
            size="medium"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  )
}

export default BlogComment
