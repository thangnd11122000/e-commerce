import { HeartBroken, RemoveRedEye } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import useAxios from "../../hook/useAxios"
import BlogComment from "./BlogComment"

const BlogDetail = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const postApi = useAxios({
    url: `/posts?id=${params.id}`,
  })

  const commentsApi = useAxios({
    url: `/post_comments?post_id=${params.id}`,
  })

  postApi.error && console.log(postApi.error.message)
  commentsApi.error && console.log(commentsApi.error.message)

  useEffect(() => {
    if (postApi.response !== null) {
      setPost(postApi.response[0])
    }
  }, [postApi.response])
  useEffect(() => {
    if (commentsApi.response !== null) {
      setComments(commentsApi.response)
    }
  }, [commentsApi.response])

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
            <p>Biên tập: Doãn Thắng - {post.date}</p>
            <div>
              <p>
                <RemoveRedEye /> <span>4</span>
              </p>
              <p>
                <RemoveRedEye /> <span>4</span>
              </p>
            </div>
          </div>
          <div className="blog-detail__content">{post.description}</div>
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

          <BlogComment comments={comments} />
        </div>
      )}
    </>
  )
}

export default BlogDetail
