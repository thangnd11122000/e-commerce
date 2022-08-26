import dayjs from "dayjs"
import { Link } from "react-router-dom"
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai"
import { BsPerson } from "react-icons/bs"

const BlogBanner = ({ posts }) => {
  return (
    <div className="blog-banner">
      <div className="blog-banner__list">
        {posts.map((p) => (
          <div key={p.id} className="blog-banner__item">
            <Link to={`/bai-viet/chi-tiet/${p.id}`} className="blog-banner__item--img">
              <img
                src={`https://techchains-ecommerce.store/public/storage/uploads/blogs/${p?.thumbnail}`}
                alt={p.slug}
              />
            </Link>
            <div className="blog__tags"></div>
            <Link to={`/bai-viet/chi-tiet/${p.id}`} className="blog-banner__item--title">
              {p.title}
            </Link>
            <div className="blog-banner__actions">
              <div className="blog-banner__action">
                <BsPerson fontSize={16} />
                <span>{p.author}</span>
              </div>
              <div className="blog-banner__action">
                <AiOutlineEye fontSize={18} />
                <span>{p.view}</span>
              </div>
            </div>
            <div className="blog-banner__action">
              <AiOutlineClockCircle />
              <span>{dayjs(p.created_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogBanner
