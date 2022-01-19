import { useState } from "react"

const imagesData = [
  "product-1.jpg",
  "product-2.jpg",
  "product-3.jpg",
  "product-4.jpg",
  "product-5.jpg",
  "product-6.jpg",
  "product-7.jpg",
]

const Images = () => {
  const [images, setImages] = useState(imagesData)
  const [index, setIndex] = useState(0)
  const [isOpenMore, setIsOpenMore] = useState(false)

  return (
    <div className="detail__images">
      <div className="detail__images--view">
        <img src={`/img/products/${images[index]}`} alt="" />
      </div>

      <div className="detail__images--slide">
        {images?.length > 6 && isOpenMore ? (
          <>
            {images.map((image, i) => (
              <img
                className={index === i ? "active" : ""}
                key={i}
                src={`/img/products/${image}`}
                alt=""
                onClick={() => setIndex(i)}
                onMouseOver={() => setIndex(i)}
              />
            ))}
            <div
              className="detail__images--more"
              onClick={() => setIsOpenMore(false)}
            >
              Ẩn bớt
            </div>
          </>
        ) : (
          <>
            {images.slice(0, 4).map((image, i) => (
              <img
                className={index === i ? "active" : ""}
                key={i}
                src={`/img/products/${image}`}
                alt=""
                onClick={() => setIndex(i)}
                onMouseOver={() => setIndex(i)}
              />
            ))}
            <div
              className="detail__images--more"
              onClick={() => setIsOpenMore(true)}
            >
              + {images.length - 4}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Images
