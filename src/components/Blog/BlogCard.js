import { Person, Visibility } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { scrollOnTop } from "../../utils"

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog__tags"></div>
      <div className="blog-card__header">
        <Link
          to={`/bai-viet/chi-tiet/${post?.id}`}
          onClick={() => scrollOnTop()}
        >
          <img
            src={`https://techchains-ecommerce.store/public/storage/uploads/blogs/${post?.thumbnail}`}
            alt={post?.title}
          />
        </Link>
      </div>
      <div className="blog-card__body">
        <Link
          to={`/bai-viet/chi-tiet/${post?.id}`}
          onClick={() => scrollOnTop()}
        >
          {post.title}
        </Link>
        <p>{post.subtitle}</p>
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
        <Link
          to={`/bai-viet/chi-tiet/${post?.id}`}
          onClick={() => scrollOnTop()}
        >
          Xem tiếp
        </Link>
        <p>{post?.created_at.split(" ")[0]}</p>
      </div>
    </div>
  )
}

export default BlogCard
