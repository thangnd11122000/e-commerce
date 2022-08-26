import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PuffLoader } from "react-spinners"
import parse from "html-react-parser"
import { useAxios } from "../../hook/useAxios"
import BlogComment from "./BlogComment"
import dayjs from "dayjs"
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"

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
            <div className="blog-banner__actions">
              {post?.author && (
                <div className="blog-banner__action">
                  <BsPerson fontSize={20} />
                  <span>{post.author}</span>
                </div>
              )}
              {post?.view && (
                <div className="blog-banner__action">
                  <AiOutlineEye fontSize={20} />
                  <span>{post.view}</span>
                </div>
              )}
              {post?.created_at && (
                <div className="blog-banner__action">
                  <AiOutlineClockCircle />
                  <span>{dayjs(post.created_at).format("DD/MM/YYYY")}</span>
                </div>
              )}
            </div>
          </div>
          <div className="blog-detail__content">
            <p>{parse(post?.content || "")}</p>
          </div>

          <BlogComment blogId={post?.id} comments={comments} />
        </div>
      )}
    </>
  )
}

export default BlogDetail
