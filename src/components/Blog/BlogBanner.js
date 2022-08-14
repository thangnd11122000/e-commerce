import { Person, Visibility } from "@mui/icons-material"
import { Link } from "react-router-dom"
import getPostCategoryName from "../../utils/getPostCategoryName"

const BlogBanner = ({ posts, categories }) => {
  console.log(posts)
  return (
    <div className="blog-banner">
      <div className="blog-banner__list">
        {posts.map((p) => (
          <div key={p.id} className="blog-banner__item">
            <Link
              to={`/blog/detail/${p.id}`}
              className="blog-banner__item--img"
            >
              <img src={p.thumbnail} alt={p.slug} />
            </Link>
            <div className="blog__tags">
              {/* <Link key={p.category_id} to={`/blog/category/${p.category_id}`}>
                {getPostCategoryName(categories, p.category_id)}
              </Link> */}
            </div>
            <Link
              to={`/blog/detail/${p.id}`}
              className="blog-banner__item--title"
            >
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
