import BlogWrap from "./BlogWrap"

const BlogPostAside = ({ title, posts }) => {
  return (
    <div className="blog__aside">
      <h3>{title}</h3>
      <div className="blog__aside--items">
        {posts.slice(0, 4).map((post, index) => (
          <BlogWrap key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export default BlogPostAside