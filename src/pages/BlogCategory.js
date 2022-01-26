import PageLinks from "../components/PageLinks"
import BlogList from "../components/Blog/BlogList"
import BlogAside from "../components/Blog/BlogAside"

const BlogCategory = () => {
  return (
    <>
      <PageLinks
        links={[
          { name: "Bài viết", link: "/blog" },
          { name: "Danh mục", link: "/blog-category" },
        ]}
      />
      <div className="blog-container">
        <div className="blog-layout">
          <div className="blog-layout__left">
            <BlogList />
          </div>
          <div className="blog-layout__right">
            <BlogAside />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogCategory
