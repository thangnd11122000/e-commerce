import BlogBanner from "../components/Blog/BlogBanner"
import BlogSection from "../components/Blog/BlogSection"
import { postsData } from "../data"
import PageLinks from "../components/PageLinks"
import BlogAside from "../components/Blog/BlogAside"
const Blog = () => {
  return (
    <>
      <PageLinks links={[{ name: "Bài viết", link: "/blog" }]} />
      <div className="blog-home blog-container">
        <BlogBanner />
        <div className=" blog-layout">
          <div className="blog-layout__left">
            <BlogSection link="/#" title="Tin công nghệ" posts={postsData} />
            <BlogSection link="/#" title="Tin điện thoại" posts={postsData} />
            <BlogSection link="/#" title="Tin máy tính" posts={postsData} />
          </div>
          <div className="blog-layout__right">
            <BlogAside />
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
