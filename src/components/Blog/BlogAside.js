import BlogPostAside from "./BlogPostAside"
import BlogTagAside from "./BlogTagAside"
import { useEffect, useState } from "react"

import { PuffLoader } from "react-spinners"
import { useAxios } from "../../hook/useAxios"

const BlogAside = ({ categories }) => {
  const [ratePosts, setRatePosts] = useState([])
  const [trickPosts, setTrickPosts] = useState([])

  const ratePostsAPI = useAxios({
    url: "/api/blogs/blog-categories/3?_page=1&_limit=5&_sort=created_at&_order=desc&status=1",
  })
  const trickPostsAPI = useAxios({
    url: "/api/blogs/blog-categories/4?_page=1&_limit=5&_sort=created_at&_order=desc&status=1",
  })

  useEffect(() => {
    if (ratePostsAPI.response !== null) {
      setRatePosts(ratePostsAPI.response?.data.data)
    }
  }, [ratePostsAPI.response])

  useEffect(() => {
    if (trickPostsAPI.response !== null) {
      setTrickPosts(trickPostsAPI.response?.data.data)
    }
  }, [trickPostsAPI.response])

  return (
    <>
      {ratePostsAPI.loading ? (
        <div className="blog-aside product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <BlogPostAside title="Tin đánh giá" posts={ratePosts} />
      )}
      {trickPostsAPI.loading ? (
        <div className="blog-aside product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <BlogPostAside title="Tin mẹo hay" posts={trickPosts} />
      )}
      <BlogTagAside title="Danh mục bài viết" tags={categories} />
    </>
  )
}

export default BlogAside
