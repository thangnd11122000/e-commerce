import { Link } from "react-router-dom"
import { scrollOnTop } from "../../utils"

const BlogTitle = ({ link, title }) => {
  return (
    <div className="blog__title">
      <Link
        to={link}
        className="blog__title--main"
        onClick={() => scrollOnTop()}
      >
        {title}
      </Link>
      <Link
        to={link}
        className="blog__title--action"
        onClick={() => scrollOnTop()}
      >
        Xem tất cả
      </Link>
    </div>
  )
}

export default BlogTitle
