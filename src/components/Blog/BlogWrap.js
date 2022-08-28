import { CalendarToday, Visibility } from "@mui/icons-material"
import dayjs from "dayjs"
import { Link } from "react-router-dom"
import { scrollOnTop } from "../../utils"
import LazyLoad from "react-lazyload"

const BlogWrap = ({ post }) => {
  const { id, thumbnail, title, created_at, view } = post
  return (
    <div className="blog-wrap">
      <div className="blog-wrap--left">
        <Link to={`chi-tiet/${id}`} onClick={() => scrollOnTop()}>
          <LazyLoad>
            <img
              src={`https://techchains-ecommerce.store/public/storage/uploads/blogs/${thumbnail}`}
              alt=""
              className="blog-wrap__image"
            />
          </LazyLoad>
        </Link>
      </div>
      <div className="blog-wrap--right">
        <Link to={`chi-tiet/${id}`} onClick={() => scrollOnTop()}>
          {title}
        </Link>
        <div className="blog-wrap__actions">
          <div className="blog-wrap__action">
            <CalendarToday fontSize="small" />
            <span>{dayjs(created_at).format("DD/MM/YYYY")}</span>
          </div>
          <div className="blog-wrap__action">
            <Visibility fontSize="small" />
            <span>{view}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogWrap
