import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BannerCard from "./BannerCard"

const CategoryPopular = () => {
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

  const data = [
    {
      link: "/#",
      title: "Camera",
      subtitle: "Tìm kiếm ngay",
      image: "/img/categories/category-1.jpg",
    },
    {
      link: "/#",
      title: "Điện thoại",
      subtitle: "Tìm kiếm ngay",
      image: "/img/categories/category-2.png",
    },
    {
      link: "/#",
      title: "Laptop",
      subtitle: "Tìm kiếm ngay",
      image: "/img/categories/category-3.jpg",
    },
    {
      link: "/#",
      title: "Camera",
      subtitle: "Tim kiem ngay",
      image: "/img/categories/category-4.jpg",
    },
    {
      link: "/#",
      title: "Camera",
      subtitle: "Tim kiem ngay",
      image: "/img/categories/category-5.jpg",
    },
  ]

  return (
    <div className="category-popular">
      <div className="home__header">
        <h3>Danh mục phổ biến</h3>
        <span>Xem tất cả {">"}</span>
      </div>

      <Slider {...settings} className="category-popular__slider">
        {data.map((d, i) => (
          <BannerCard key={i} data={d} className="banner-card" />
        ))}
      </Slider>
    </div>
  )
}

export default CategoryPopular
