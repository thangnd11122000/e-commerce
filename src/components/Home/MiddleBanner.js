import React from "react"
import BannerCard from "./BannerCard"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
      title: "Camera phieen ban the thao tot nhat",
      subtitle: "Tìm kiếm ngay",
      image: "/img/banner/banner-5.png",
    },
    {
      link: "/#",
      title: "Microshop surface laptop",
      subtitle: "Tìm kiếm ngay",
      image: "/img/banner/banner-6.png",
    },
    {
      link: "/#",
      title: "Speaker nike Air max 90",
      subtitle: "Tìm kiếm ngay",
      image: "/img/banner/banner-7.png",
    },
  ]
  return (
    <div className="middle-banner">
      <Slider {...settings}>
        {data.map((d, i) => (
          <BannerCard key={i} data={d} className="banner-card" />
        ))}
      </Slider>
    </div>
  )
}

export default MiddleBanner
