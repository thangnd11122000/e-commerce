import BlogWrap from "./BlogWrap"

const BlogPostAside = ({ title, posts }) => {
  return (
    <div className="blog-aside">
      <h3>{title}</h3>
      <div className="blog-aside__list">
        {posts.slice(0, 6).map((post, index) => (
          <BlogWrap key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default BlogPostAside
