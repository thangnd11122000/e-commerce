import { useState } from "react"

const Images = ({ image, gallery = [] }) => {
  const images = [image, ...gallery]

  const [index, setIndex] = useState(0)
  const [isOpenMore, setIsOpenMore] = useState(false)

  return (
    <div className="detail-images">
      {
        <>
          <div className="detail-images__view">
            <img src={`${images[index]}`} alt="" />
          </div>

          <div className="detail-images__list">
            {images?.length > 6 && isOpenMore ? (
              <>
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={
                      index === i
                        ? "detail-images__list--img active"
                        : "detail-images__list--img"
                    }
                  >
                    <img
                      src={`${img}`}
                      alt=""
                      onClick={() => setIndex(i)}
                      onMouseOver={() => setIndex(i)}
                    />
                  </div>
                ))}
                <div
                  className="detail-images__more"
                  onClick={() => setIsOpenMore(false)}
                >
                  Ẩn bớt
                </div>
              </>
            ) : (
              <>
                {images.slice(0, 4).map((img, i) => (
                  <div
                    key={i}
                    className={
                      index === i
                        ? "detail-images__list--img active"
                        : "detail-images__list--img"
                    }
                  >
                    <img
                      src={`${img}`}
                      alt=""
                      onClick={() => setIndex(i)}
                      onMouseOver={() => setIndex(i)}
                    />
                  </div>
                ))}
                {images.length > 4 && (
                  <div
                    className="detail-images__more"
                    onClick={() => setIsOpenMore(true)}
                  >
                    + {images.length - 4}
                  </div>
                )}
              </>
            )}
          </div>
        </>
      }
    </div>
  )
}

export default Images
