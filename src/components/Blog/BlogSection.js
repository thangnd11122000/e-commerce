import BlogCard from "./BlogCard"
import BlogTitle from "./BlogTitle"
import BlogWrap from "./BlogWrap"

const BlogSection = ({ link, title, posts }) => {
  let [firstPost, ...postsArr] = posts
  return (
    <div className="blog-section">
      <BlogTitle link={link} title={title} />
      <div className="blog-section__container">
        <BlogCard post={firstPost} substring={160} />
        <div className="blog-section__list">
          {postsArr.slice(0, 5).map((post, index) => (
            <BlogWrap key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
