import { Link } from "react-router-dom"
import getPostCategoryName from "../../utils/getPostCategoryName"

const BlogBanner = ({ posts, categories }) => {
  return (
    <div className="blog-banner">
      <div className="blog-banner__list">
        {posts.map((p) => (
          <div key={p.id} className="blog-banner__item">
            <Link
              to={`/blog/detail/${p.id}`}
              className="blog-banner__item--img"
            >
              <img src={p.image} alt={p.name} />
            </Link>
            <div className="blog__tags">
              <Link key={p.category_id} to={`/blog/category/${p.category_id}`}>
                {getPostCategoryName(categories, p.category_id)}
              </Link>
            </div>
            <Link
              to={`/blog/detail/${p.id}`}
              className="blog-banner__item--title"
            >
              {p.title}
            </Link>
            <span>{p.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogBanner
