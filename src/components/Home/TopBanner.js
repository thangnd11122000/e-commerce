import { Grid } from "@mui/material";
import React from "react";
import banner1 from "../../assets/img/banners/banner1.png";
import banner2 from "../../assets/img/banners/banner2.png";
import banner3 from "../../assets/img/banners/banner3.png";
import banner4 from "../../assets/img/banners/banner4.png";
import slide1 from "../../assets/img/banners/slide-home1.png";
import slide2 from "../../assets/img/banners/slide-home2.png";
import slide3 from "../../assets/img/banners/slide-home3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const banners = [
  {
    link: "/#",
    title: "Canyon Star Raider",
    description: "Thiet bi am thanh",
    image: banner1,
  },
  {
    link: "/#",
    title: "Điện thoại Galaxy S20",
    description: "Dien thoai",
    image: banner2,
  },
  {
    link: "/#",
    title: "Galaxy Buds Plus",
    description: "Tai nghe",
    image: banner3,
  },
  { link: "/#", title: "Ghe", description: "Ghe", image: banner4 },
];

const carousels = [
  {
    link: "/#",
    title: "Phien Ban the thao <br /> Su lua chon tot nhat cho ban",
    description: "Ket noi khong day voi Tv, may tinh, laptop",
    image: slide1,
  },
  {
    link: "/#",
    title: "Phien Ban the thao <br /> Su lua chon tot nhat cho ban",
    description: "Ket noi khong day voi Tv, may tinh, laptop",
    image: slide2,
  },
  {
    link: "/#",
    title: "Phien Ban the thao <br /> Su lua chon tot nhat cho ban",
    description: "Ket noi khong day voi Tv, may tinh, laptop",
    image: slide3,
  },
];

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
  };

  return (
    <div className="top-banner">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={7}>
          <Slider {...settings}>
            {carousels.map((carousel, index) => (
              <div className="top-banner__carousel" key={index}>
                <a href={carousel.link}>
                  <img
                    src={carousel.image}
                    alt=""
                    className="top-banner__carousel--img"
                  />
                  <h3
                    className="top-banner__carousel--title"
                    dangerouslySetInnerHTML={{ __html: carousel.title }}
                  >
                    {/* {carousel.title} */}
                  </h3>
                  <p className="top-banner__carousel--description">
                    {carousel.description}
                  </p>
                </a>
                <a
                  href={carousel.link}
                  className="top-banner__carousel--button"
                >
                  Kham pha ngay
                </a>
              </div>
            ))}
          </Slider>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Grid
            container
            spacing={3}
            height={350}
            className="top-banner__container"
          >
            {banners.map((banner, index) => (
              <Grid item xs={6} md={3} lg={6} key={index}>
                <div href={banner.link} className="top-banner__box">
                  <a href="/#">
                    <img
                      src={banner.image}
                      alt=""
                      className="top-banner__box--img"
                    />
                    <div className="top-banner__box--title">{banner.title}</div>
                    <div className="top-banner__box--description">
                      {banner.description}
                    </div>
                  </a>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopBanner;
