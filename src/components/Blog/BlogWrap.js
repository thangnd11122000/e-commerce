import { CalendarToday, Person, Visibility } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { scrollOnTop } from "../../utils"

const BlogWrap = ({ post }) => {
  const { id, thumbnail, title, created_at, author, view } = post
  return (
    <div className="blog-wrap">
      <Link to={`chi-tiet/${id}`} onClick={() => scrollOnTop()}>
        <img src={thumbnail} alt="" className="blog-wrap__image" />
      </Link>
      <div>
        <Link to={`chi-tiet/${id}`} onClick={() => scrollOnTop()}>
          {title}
        </Link>
        <div className="blog-wrap__actions">
          <div className="blog-wrap__action">
            <Person fontSize="small" />
            <span>{author}</span>
          </div>
          <div className="blog-wrap__action">
            <Visibility fontSize="small" />
            <span>{view}</span>
          </div>
          {/* <div className="blog-wrap__action">
            <CalendarToday fontSize="small" />
            <span>{created_at.split(" ")[0]}</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default BlogWrap
