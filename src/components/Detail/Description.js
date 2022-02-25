import { useState } from "react"

const Description = ({ description }) => {
  const [isOpenDesc, setIsOpenDesc] = useState(false)
  return (
    <div className="detail-description">
      <h3 className="detail-description__title">Mô tả sản phẩm</h3>
      <div
        className={`detail-description__desc ${
          isOpenDesc ? "detail-description__desc--active" : ""
        }`}
      >
        {description}
      </div>
      <div className="detail-description__button">
        <button
          className="btn-primary"
          onClick={() => setIsOpenDesc(!isOpenDesc)}
        >
          {isOpenDesc ? "Thu gọn" : "Xem thêm"}
        </button>
      </div>
    </div>
  )
}

export default Description
