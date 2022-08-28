import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
import banner5 from "../../assets/img/banners/banner5.png"
import banner6 from "../../assets/img/banners/banner6.webp"
import banner7 from "../../assets/img/banners/banner7.webp"
import LazyLoad from "react-lazyload"

const MiddleBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  const data = [
    {
      link: "/danh-sach?_cat=15",
      name: "Máy tính bảng phiên bản mới",
      image: banner5,
    },
    {
      link: "/danh-sach?_cat=8",
      name: "Smart phones Oneplus 8",
      image: banner6,
    },
    {
      link: "/danh-sach?_cat=24",
      name: "Apple Watch Series 4",
      image: banner7,
    },
  ]
  return (
    <div className="middle-banner">
      <Slider {...settings}>
        {data.map((d, i) => (
          <div className="banner-card" key={i}>
            <div className="banner-card__item">
              <Link to={d.link}>
                <LazyLoad>
                  <img src={d.image} alt="banner" style={{ zIndex: "-1" }} />
                </LazyLoad>
                <div className="banner-card__content">
                  <h3>{d.name}</h3>
                  <p>Tìm kiếm ngay</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default MiddleBanner
