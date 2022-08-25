import { HeartBroken, RemoveRedEye } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import parse from "html-react-parser"
import { useAxios } from "../../hook/useAxios"
import { formatDate } from "../../utils"
import BlogComment from "./BlogComment"

const BlogDetail = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const postApi = useAxios({
    url: `/api/blogs/${params.id}`,
  })

  const commentsApi = useAxios({
    url: `/api/blogs-comments/${params.id}`,
  })

  postApi.error && console.log(postApi.error.message)
  commentsApi.error && console.log(commentsApi.error.message)

  useEffect(() => {
    if (postApi.response !== null) {
      setPost(postApi.response.data)
    }
  }, [postApi.response])

  useEffect(() => {
    if (commentsApi.response !== null) {
      setComments(commentsApi.response.data.data)
    }
  }, [commentsApi.response])
  console.log(post)
  return (
    <>
      {commentsApi.loading && postApi.loading ? (
        <div className="product-loading" style={{ margin: "100px 0" }}>
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <div className="blog-detail">
          <h1 className="blog-detail__title">{post.title}</h1>
          <div className="blog-detail__info">
            <p>
              Biên tập: {post?.author} - {formatDate(post?.created_at)}
            </p>
            <div>
              <p>
                <RemoveRedEye /> <span>{post.view}</span>
              </p>
            </div>
          </div>
          <img className="blog-detail__img" src={post.thumbnail} alt="" />
          <div className="blog-detail__content">
            <p>{parse(post.content)}</p>
          </div>
          <div className="blog-detail__button">
            <Button
              variant="contained"
              startIcon={<HeartBroken />}
              sx={{ mr: 1 }}
            >
              Thích
            </Button>
            <Button variant="contained" startIcon={<HeartBroken />}>
              Chia sẻ
            </Button>
          </div>

          <BlogComment blog_id={post?.id} comments={comments} />
        </div>
      )}
    </>
  )
}

export default BlogDetail
