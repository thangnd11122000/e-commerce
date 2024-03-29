import { Link } from "react-router-dom"
import { scrollOnTop } from "../../utils"

const BlogTagAside = ({ title, tags }) => {
  return (
    <div className="blog-aside">
      <h3>{title}</h3>
      <div className="blog-aside__button">
        {tags?.map((tag, index) => (
          <Link
            to={`/bai-viet/the-loai/${tag?.id}`}
            key={index}
            className="btn-primary"
            onClick={scrollOnTop}
          >
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogTagAside
