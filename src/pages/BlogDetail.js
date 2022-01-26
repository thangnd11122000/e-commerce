import Detail from "../components/Blog/BlogDetail"
import PageLinks from "../components/PageLinks"
import BlogAside from "../components/Blog/BlogAside"

const BlogDetail = () => {
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
            <Detail />
          </div>
          <div className="blog-layout__right">
            <BlogAside />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail
