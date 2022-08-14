import { Skeleton } from "@mui/material"
import { Link } from "react-router-dom"

const BannerCard = ({ data, loading }) => {
  const { link, image, category_name } = data
  return (
    <div className="banner-card__item">
      {loading ? (
        <Skeleton variant="rectangular" height={130} />
      ) : (
        <Link to={"#"}>
          <img src={`/img/categories/${image}`} alt="" />
          <div className="banner-card__content">
            <h3>{category_name}</h3>
            <p>Tìm kiếm ngay</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default BannerCard
