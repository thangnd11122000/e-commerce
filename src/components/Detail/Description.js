import { useState } from "react"

const Description = ({ description }) => {
  const [showMore, setShowMore] = useState(false)

  const renderDescription = () => {
    if (description.length > 1000) {
      return (
        <p style={{ fontSize: "18px", lineHeight: "28px" }}>
          {showMore ? description.substring(0, 50) : description}
          <span
            style={{
              display: "inline-block",
              padding: "0px 5px",
              fontSize: "12px",
              marginLeft: "10px",
            }}
            className="btn-primary"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Xem thêm" : "Ẩn bớt"}
          </span>
        </p>
      )
    } else return <p>{description}</p>
  }
  return (
    <div className="detail-description">
      <h3 className="detail-description__title">Mô tả sản phẩm</h3>
      <div className="detail-description__desc">{renderDescription()}</div>
    </div>
  )
}

export default Description
