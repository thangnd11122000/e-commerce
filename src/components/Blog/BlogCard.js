import { Link } from "react-router-dom"
import getPostCategoryName from "../../utils/getPostCategoryName"

const BlogCard = ({ post, substring = 100, categories }) => {
  const { id, image, title, description, date, category_id } = post
  return (
    <div className="blog-card">
      <div className="blog__tags">
        <Link to={`/blog/category/${category_id}`} key={category_id}>
          {getPostCategoryName(categories, category_id)}
        </Link>
      </div>
      <div className="blog-card__header">
        <Link to={`/blog/detail/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="blog-card__body">
        <Link to={`/blog/detail/${id}`}>{title.substring(0, 50)}</Link>
        <p>{description.substring(0, substring)}...</p>
      </div>
      <div className="blog-card__footer">
        <Link to={`/blog/detail/${id}`}>Xem tiếp</Link>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default BlogCard
