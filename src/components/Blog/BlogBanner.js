import { Person, Visibility } from "@mui/icons-material"
import { Link } from "react-router-dom"

const BlogBanner = ({ posts, categories }) => {
  return (
    <div className="blog-banner">
      <div className="blog-banner__list">
        {posts.map((p) => (
          <div key={p.id} className="blog-banner__item">
            <Link to={`/bai-viet/${p.id}`} className="blog-banner__item--img">
              <img
                src={`https://techchains-ecommerce.store/public/storage/uploads/blogs/${p?.thumbnail}`}
                alt={p.slug}
              />
            </Link>
            <div className="blog__tags">
            </div>
            <Link to={`/bai-viet/${p.id}`} className="blog-banner__item--title">
              {p?.title?.length > 70
                ? p.title.substring(0, 70) + "..."
                : p.title}
            </Link>
            <div className="blog-banner__actions">
              <div className="blog-banner__action">
                <Person fontSize="small" />
                <span>{p.author}</span>
              </div>
              <div className="blog-banner__action">
                <Visibility fontSize="small" />
                <span>{p.view}</span>
              </div>
            </div>
            <span>{p.created_at.split(" ")[0]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogBanner
