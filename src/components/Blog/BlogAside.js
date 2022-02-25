import BlogPostAside from "./BlogPostAside"
import BlogTagAside from "./BlogTagAside"
import { blogTagsData } from "../../data"
import { useEffect, useState } from "react"
import useAxios from "../../hook/useAxios"
import { PuffLoader } from "react-spinners"

const BlogAside = ({categories}) => {
  const [featuredPosts, setFeaturedPosts] = useState([])

  const featuredPostsApi = useAxios({ url: "/posts" })
  featuredPostsApi.error && console.log(featuredPostsApi.error.message)

  useEffect(() => {
    if (featuredPostsApi.response !== null) {
      setFeaturedPosts(featuredPostsApi.response)
    }
  }, [featuredPostsApi.response])
  return (
    <>
      {featuredPostsApi.loading ? (
        <div className="blog-aside product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <BlogPostAside title="Bài viết nổi bật" posts={featuredPosts} />
      )}
      {featuredPostsApi.loading ? (
        <div className="blog-aside product-loading">
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <BlogPostAside title="Bài viết đã xem" posts={featuredPosts} />
      )}
      <BlogTagAside title="Danh mục bài viết" tags={categories} />
      <BlogTagAside title="Tag nổi bật" tags={blogTagsData} />
    </>
  )
}

export default BlogAside
