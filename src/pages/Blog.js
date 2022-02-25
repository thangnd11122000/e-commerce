import BlogBanner from "../components/Blog/BlogBanner"
import BlogSection from "../components/Blog/BlogSection"
import PageLinks from "../components/PageLinks"
import BlogAside from "../components/Blog/BlogAside"
import { useEffect, useState } from "react"
import { PuffLoader } from "react-spinners"
import useAxios from "../hook/useAxios"
import { Route, Routes } from "react-router-dom"
import BlogList from "../components/Blog/BlogList"
import BlogDetail from "../components/Blog/BlogDetail"

const Blog = () => {
  const [postCategories, setPostCategories] = useState([])
  const [newPosts, setNewPosts] = useState([])

  const newPostsApi = useAxios({ url: "/posts" })
  const postCategoriesApi = useAxios({ url: "/post_categories" })

  newPostsApi.error && console.log(newPostsApi.error.message)
  postCategoriesApi.error && console.log(postCategoriesApi.error)

  useEffect(() => {
    if (postCategoriesApi.response !== null) {
      setPostCategories(postCategoriesApi.response)
    }
  }, [postCategoriesApi.response])

  useEffect(() => {
    if (newPostsApi.response !== null) {
      setNewPosts(newPostsApi.response)
    }
  }, [newPostsApi.response])

  return (
    <>
      {postCategoriesApi.loading ? (
        <div className="product-loading" style={{ margin: "100px 0" }}>
          <PuffLoader color="#0032FE" size={60} />
        </div>
      ) : (
        <div className="blog-home blog-container">
          <Routes>
            <Route
              path="/"
              element={
                newPostsApi.loading ? (
                  <div className="product-loading">
                    <PuffLoader color="#0032FE" size={60} />
                  </div>
                ) : (
                  <BlogBanner
                    posts={newPosts.slice(0, 3)}
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
                      {newPostsApi.loading ? (
                        <div className="blog-section product-loading">
                          <PuffLoader color="#0032FE" size={60} />
                        </div>
                      ) : (
                        <BlogSection
                          link="/blog/news"
                          title="Tin mới nhất"
                          posts={newPosts.slice(3, 10)}
                          categories={postCategories}
                        />
                      )}
                      {newPostsApi.loading ? (
                        <div className="blog-section product-loading">
                          <PuffLoader color="#0032FE" size={60} />
                        </div>
                      ) : (
                        <BlogSection
                          link="/blog/category/2"
                          title="Tin điện thoại"
                          posts={newPosts.slice(3, 10)}
                          categories={postCategories}
                        />
                      )}
                      {newPostsApi.loading ? (
                        <div className="blog-section product-loading">
                          <PuffLoader color="#0032FE" size={60} />
                        </div>
                      ) : (
                        <BlogSection
                          link="/blog/category/3"
                          title="Tin laptop"
                          posts={newPosts.slice(3, 10)}
                          categories={postCategories}
                        />
                      )}
                    </>
                  }
                />
              </Routes>

              <Routes>
                <Route
                  path="/news"
                  element={<BlogList categories={postCategories} />}
                />
              </Routes>
              <Routes>
                <Route
                  path="/category/:id"
                  element={<BlogList categories={postCategories} />}
                />
              </Routes>
              <Routes>
                <Route path="/detail/:id" element={<BlogDetail />} />
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
