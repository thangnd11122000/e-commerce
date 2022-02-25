import BlogCard from "./BlogCard"
import BlogTitle from "./BlogTitle"
import BlogWrap from "./BlogWrap"

const BlogSection = ({ link, title, posts, categories }) => {
  let [firstPost, ...postsArr] = posts
  return (
    <div className="blog-section">
      <BlogTitle link={link} title={title} />
      <div className="blog-section__container">
        <BlogCard post={firstPost} substring={160} categories={categories} />
        <div className="blog-section__list">
          {postsArr.map((post, index) => (
            <BlogWrap key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
