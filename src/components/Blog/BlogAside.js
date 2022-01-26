import BlogPostAside from "./BlogPostAside"
import BlogTagAside from "./BlogTagAside"
import { blogTagsData, postsData, blogCategoriesData } from "../../data"

const BlogAside = () => {
  return (
    <>
      <BlogPostAside title="Bài viết nổi bật" posts={postsData} />
      <BlogPostAside title="Bài viết mới" posts={postsData} />
      <BlogTagAside title="Danh mục bài viết" tags={blogCategoriesData} />
      <BlogTagAside title="Tag nổi bật" tags={blogTagsData} />
    </>
  )
}

export default BlogAside
