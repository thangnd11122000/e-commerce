import { Link } from "react-router-dom"

const BlogTitle = ({ link, title }) => {
  return (
    <div className="blog__title">
      <Link to={link} className="blog__title--main">
        {title}
      </Link>
      <Link to={link} className="blog__title--action">
        Xem tất cả
      </Link>
    </div>
  )
}

export default BlogTitle
