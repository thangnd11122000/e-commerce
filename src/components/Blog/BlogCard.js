import { Person, Visibility } from "@mui/icons-material"
import { Link } from "react-router-dom"

const BlogCard = ({ post, titleSubstring = 55, substring = 95 }) => {
  return (
    <div className="blog-card">
      <div className="blog__tags"></div>
      <div className="blog-card__header">
        <Link to={`/bai-viet/detail/${post?.id}`}>
          <img src={post?.thumbnail} alt={post?.title} />
        </Link>
      </div>
      <div className="blog-card__body">
        <Link to={`/bai-viet/detail/${post?.id}`}>
          {post?.title.length > titleSubstring
            ? post?.title.substring(0, titleSubstring) + "..."
            : post?.title}
        </Link>
        <p>
          {post?.subtitle.length > substring
            ? post?.subtitle.substring(0, substring) + "..."
            : post?.subtitle}
        </p>
        <div className="blog-card__items">
          <div className="blog-card__item">
            <Person fontSize="small" />
            <span>{post?.author}</span>
          </div>
          <div className="blog-card__item">
            <Visibility fontSize="small" />
            <span>{post?.view}</span>
          </div>
        </div>
      </div>
      <div className="blog-card__footer">
        <Link to={`/bai-viet/detail/${post?.id}`}>Xem tiếp</Link>
        <p>{post?.created_at.split(" ")[0]}</p>
      </div>
    </div>
  )
}

export default BlogCard
