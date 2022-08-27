import BlogBanner from "../components/Blog/BlogBanner"
import BlogSection from "../components/Blog/BlogSection"
import BlogAside from "../components/Blog/BlogAside"
import { useEffect, useState } from "react"
import { PuffLoader } from "react-spinners"
import { Route, Routes } from "react-router-dom"
import BlogList from "../components/Blog/BlogList"
import BlogDetail from "../components/Blog/BlogDetail"
import { useAxios } from "../hook/useAxios"

const Blog = () => {
  const [postCategories, setPostCategories] = useState([])
  const [newPosts, setNewPosts] = useState([])
  const [newProductPosts, setNewProductPosts] = useState([])
  const [advisePosts, setAdvisePosts] = useState([])

  const postCategoriesAPI = useAxios({ url: "/api/blogs-categories" })
  const newPostsAPI = useAxios({
    url: "/api/blogs/blog-categories/5?_page=1&_limit=7&_sort=created_at&_order=desc&status=1",
  })
  const newProductPostsAPI = useAxios({
    url: "/api/blogs/blog-categories/1?_page=1&_limit=7&_sort=created_at&_order=desc&status=1",
  })
  const advisePostsAPI = useAxios({
    url: "/api/blogs/blog-categories/2?_page=1&_limit=7&_sort=created_at&_order=desc&status=1",
  })

  useEffect(() => {
    if (postCategoriesAPI.response !== null) {
      setPostCategories(postCategoriesAPI.response?.data)
    }
  }, [postCategoriesAPI.response])

  useEffect(() => {
    if (newPostsAPI.response !== null) {
      setNewPosts(newPostsAPI.response?.data.data)
    }
  }, [newPostsAPI.response])

  useEffect(() => {
    if (newProductPostsAPI.response !== null) {
      setNewProductPosts(newProductPostsAPI.response?.data.data)
    }
  }, [newProductPostsAPI.response])

  useEffect(() => {
    if (advisePostsAPI.response !== null) {
      setAdvisePosts(advisePostsAPI.response?.data.data)
    }
  }, [advisePostsAPI.response])

  return (
    <>
      {postCategoriesAPI.loading ? (
        <div className="product-loading" style={{ margin: "100px 0" }}>
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <div className="blog-home blog-container">
          <Routes>
            <Route
              path="/"
              element={
                newPostsAPI.loading ? (
                  <div className="product-loading">
                    <PuffLoader color="#0032FE" size={60} />
                  </div>
                ) : (
                  <BlogBanner
                    posts={newPosts.slice(0, 4)}
                    categories={postCategories}
                  />
                )
              }
            />
          </Routes>
          <div className=" blog-layout">
            <div className="blog-layout__left">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      {newPostsAPI.loading ? (
                        <div className="blog-section product-loading">
                          <PuffLoader color="#0032FE" size={60} />
                        </div>
                      ) : (
                        <BlogSection
                          link="/bai-viet/the-loai/5"
                          title="Tin mới nhất"
                          posts={newPosts.slice(3, 10)}
                          categories={postCategories}
                        />
                      )}
                      {newProductPostsAPI.loading ? (
                        <div className="blog-section product-loading">
                          <PuffLoader color="#0032FE" size={60} />
                        </div>
                      ) : (
                        <BlogSection
                          link="/bai-viet/the-loai/1"
                          title="Sản phẩm mới"
                          posts={newProductPosts}
                          categories={postCategories}
                        />
                      )}
                      {newPostsAPI.loading ? (
                        <div className="blog-section product-loading">
                          <PuffLoader color="#0032FE" size={60} />
                        </div>
                      ) : (
                        <BlogSection
                          link="/bai-viet/the-loai/2"
                          title="Tư vấn"
                          posts={advisePosts}
                          categories={postCategories}
                        />
                      )}
                    </>
                  }
                />
              </Routes>

              <Routes>
                <Route
                  path="/the-loai/:id"
                  element={<BlogList categories={postCategories} postCategories={postCategories} />}
                />
              </Routes>
              <Routes>
                <Route path="/chi-tiet/:id" element={<BlogDetail />} />
              </Routes>
            </div>
            <div className="blog-layout__right">
              <BlogAside categories={postCategories} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Blog
