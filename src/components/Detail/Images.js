import { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { MoonLoader } from "react-spinners"

const override = css`
  display: block;
  margin: auto auto;
`

const Images = ({ image }) => {
  const [images, setImages] = useState([])
  const [loading] = useState(false)

  useEffect(() => {
    setImages([image])
  }, [image])

  const [index, setIndex] = useState(0)
  const [isOpenMore, setIsOpenMore] = useState(false)

  return (
    <div className="detail-images">
      {loading ? (
        <MoonLoader color="#0032FE" size={50} css={override} />
      ) : (
        <>
          <div className="detail-images__view">
            <img src={`${images[index]}`} alt="" />
          </div>

          <div className="detail-images__list">
            {images?.length > 6 && isOpenMore ? (
              <>
                {images.map((img, i) => (
                  <img
                    className={index === i ? "active" : ""}
                    key={i}
                    src={`${img}`}
                    alt=""
                    onClick={() => setIndex(i)}
                    onMouseOver={() => setIndex(i)}
                  />
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
                  <img
                    className={index === i ? "active" : ""}
                    key={i}
                    src={`${img}`}
                    alt=""
                    onClick={() => setIndex(i)}
                    onMouseOver={() => setIndex(i)}
                  />
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
      )}
    </div>
  )
}

export default Images
