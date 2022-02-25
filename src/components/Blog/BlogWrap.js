import { Link } from "react-router-dom"

const BlogWrap = ({ post }) => {
  const { id, image, title, date } = post
  return (
    <div className="blog-wrap">
      <Link to={`blog/detail/${id}`}>
        <img src={image} alt="" className="blog-wrap__image" />
      </Link>
      <div>
        <Link to={`blog/detail/${id}`}>{title.substring(0, 60)}...</Link>
        <p className="blog-wrap__date">{date}</p>
      </div>
    </div>
  )
}

export default BlogWrap
