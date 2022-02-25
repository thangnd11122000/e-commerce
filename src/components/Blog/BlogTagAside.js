import { Link } from "react-router-dom"

const BlogTagAside = ({ title, tags }) => {
  return (
    <div className="blog-aside">
      <h3>{title}</h3>
      <div className="blog-aside__button">
        {tags?.map((tag, index) => (
          <Link to="" key={index} className="btn-primary">
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogTagAside
