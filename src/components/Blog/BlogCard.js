import { Person, Visibility } from "@mui/icons-material"
import dayjs from "dayjs"
import { Link } from "react-router-dom"
import { scrollOnTop } from "../../utils"
import { BsArrowRightSquare } from "react-icons/bs"
import LazyLoad from "react-lazyload"

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog__tags"></div>
      <div className="blog-card__header">
        <Link
          to={`/bai-viet/chi-tiet/${post?.id}`}
          onClick={() => scrollOnTop()}
        >
          <LazyLoad>
            <img
              src={`https://techchains-ecommerce.store/public/storage/uploads/blogs/${post?.thumbnail}`}
              alt={post?.title}
            />
          </LazyLoad>
        </Link>
      </div>
      <div className="blog-card__body">
        <Link
          to={`/bai-viet/chi-tiet/${post?.id}`}
          onClick={() => scrollOnTop()}
        >
          {post?.title}
        </Link>
        <p>{post?.subtitle}</p>
        <div className="blog-card__items">
          {post?.author && (
            <div className="blog-card__item">
              <Person fontSize="small" />
              <span>{post.author}</span>
            </div>
          )}
          {post?.view && (
            <div className="blog-card__item">
              <Visibility fontSize="small" />
              <span>{post.view}</span>
            </div>
          )}
        </div>
      </div>
      <div className="blog-card__footer">
        <p>{dayjs(post?.created_at).format("DD/MM/YYYY")}</p>
        <Link
          to={`/bai-viet/chi-tiet/${post?.id}`}
          onClick={() => scrollOnTop()}
        >
          Xem tiếp <BsArrowRightSquare />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
