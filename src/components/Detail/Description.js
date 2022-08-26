import { useState } from "react"
import parse from "html-react-parser"

const Description = ({ description }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="detail-description">
      <h3 className="detail-description__title">Mô tả sản phẩm</h3>
      {description?.length > 1200 ? (
        <>
          <div
            className={`detail-description__desc ${showMore ? "active" : ""}`}
          >
            {parse(description)}
          </div>

          <div className="detail-description__button">
            <button
              className="btn-primary"
              onClick={() => setShowMore(!showMore)}
            >
              {!showMore ? "Xem thêm" : "Ẩn bớt"}
            </button>
          </div>
        </>
      ) : (
        <div className="detail-description__desc">{description}</div>
      )}
    </div>
  )
}

export default Description
