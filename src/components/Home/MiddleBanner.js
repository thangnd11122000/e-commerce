import React from "react"
import BannerCard from "./BannerCard"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"

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
      link: "/#",
      name: "Camera phieen ban the thao tot nhat",
      image: "banner-5.png",
    },
    {
      link: "/#",
      name: "Microshop surface laptop",
      image: "banner-6.png",
    },
    {
      link: "/#",
      name: "Speaker nike Air max 90",
      image: "banner-7.png",
    },
  ]
  return (
    <div className="middle-banner">
      <Slider {...settings}>
        {data.map((d, i) => (
          // <BannerCard key={i} data={d} className="banner-card" />
          <div className="banner-card" key={i}>
            <div className="banner-card__item">
              <Link to={d.link}>
                <img src={`/img/banner/${d.image}`} alt="" />
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
