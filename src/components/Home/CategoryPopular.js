import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BannerCard from "./BannerCard"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const CategoryPopular = () => {
  const { loading, response, error } = useSelector(
    (state) => state.categoriesApi
  )
  const [data, setData] = useState([])

  useEffect(() => {
    if (response !== null) {
      setData(response)
    }
  }, [response])

  return (
    <div className="category-popular">
      <div className="home__header">
        <h3>Danh mục phổ biến</h3>
        <span>Xem tất cả {">"}</span>
      </div>
      {error && console.log(error.message)}
      <Slider {...settings} className="category-popular__slider">
        {data.map((d, i) => (
          <BannerCard
            key={i}
            data={d}
            loading={loading}
            className="banner-card"
          />
        ))}
      </Slider>
    </div>
  )
}

export default CategoryPopular
