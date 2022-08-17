import { Grid } from "@mui/material"
import banner1 from "../../assets/img/banners/banner1.png"
import banner2 from "../../assets/img/banners/banner2.png"
import banner3 from "../../assets/img/banners/banner3.png"
import banner4 from "../../assets/img/banners/banner4.jpeg"
import slide1 from "../../assets/img/slider/slide_home_1.jpeg"
import slide2 from "../../assets/img/slider/slide_home_2.jpeg"
import slide3 from "../../assets/img/slider/slide_home_3.jpeg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom"
const banners = [
  {
    link: "/san-pham?cat=31",
    title: "Tai nghe Canyon",
    description: "Thiết bị âm thanh",
    image: banner1,
  },
  {
    link: "/san-pham?cat=1",
    title: "Điện thoại Galaxy S20",
    description: "Điện thoại",
    image: banner2,
  },
  {
    link: "/san-pham?cat=31",
    title: "Galaxy Buds Plus",
    description: "Tai nghe",
    image: banner3,
  },
  {
    link: "/san-pham?cat=5",
    title: "Loa Bluetooh Speaker",
    description: "Loa",
    image: banner4,
  },
]

const carousels = [
  {
    link: "/san-pham?cat=31",
    title: "Tai nghe không dây <br /> Top Headphone",
    description: "Sự lựa chọn tốt nhất dành cho bạn",
    image: slide1,
  },
  {
    link: "/san-pham?cat=2",
    title: "Laptop gamming <br /> Razer Blade 15",
    description: "Sự lựa chọn tốt nhất dành cho bạn",
    image: slide2,
  },
  {
    link: "/san-pham?cat=4",
    title: "Đồng hồ hiện đại <br /> Galaxy watch",
    description: "Sự lựa chọn tốt nhất dành cho bạn",
    image: slide3,
  },
]

const TopBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrow: false,
  }

  return (
    <div className="top-banner">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <Slider {...settings}>
            {carousels.map((carousel, index) => (
              <Link to={carousel.link} key={index}>
                <div className="top-banner__carousel">
                  <img
                    src={carousel.image}
                    alt="Ảnh Banner"
                    className="top-banner__carousel-img"
                  />
                  <h3
                    className="top-banner__carousel-title"
                    dangerouslySetInnerHTML={{ __html: carousel.title }}
                  ></h3>
                  <p className="top-banner__carousel-description">
                    {carousel.description}
                  </p>
                  <button className="top-banner__carousel-button">
                    Khám phá ngay
                  </button>
                </div>
              </Link>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Grid container spacing={3} height={350} className="top-banner__list">
            {banners.map((banner, index) => (
              <Grid item xs={6} md={3} lg={6} key={index}>
                <Link to={banner.link}>
                  <div className="top-banner__item">
                    <img src={banner.image} alt="Ảnh banner" />
                    <div className="top-banner__item-title">{banner.title}</div>
                    <div className="top-banner__item-description">
                      {banner.description}
                    </div>
                  </div>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default TopBanner
