import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
  {
    img: "testimonial-1.jpg",
    name: "Huỳnh Tấn Lộc",
    title: "CO Founder - Backend Developer",
  },
  {
    img: "testimonial-2.jpg",
    name: "Hoàng Trần Thám",
    title: "CO Founder - Fullstack Developer",
  },
  {
    img: "testimonial-3.jpg",
    name: "Lê Quang Tuấn",
    title: "CEO HealThy Food - Leader Tech",
  },
  {
    img: "testimonial-4.jpg",
    name: "Hoàng Gia Khánh",
    title: "CO Founder - Backend Developer",
  },
  {
    img: "testimonial-5.jpg",
    name: "Nguyễn Doãn Thắng",
    title: "CO Founder - Fronent Developer",
  },
]

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
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
  return (
    <div className="about__section about__section--gray about__team">
      <div className="about__content">
        <h5 className="about__content--subtitle">ĐỘI CỦA CHÚNG TÔI</h5>
        <h2 className="about__content--title">Gặp đội của chúng tôi</h2>
        <p className="about__content--desc">
          Với những thành viên đó, Healthy Food kỳ vọng sẽ là người bạn đồng
          hành trong mỗi hành trình của khách hàng hiện tại và tương lai.
        </p>
        <div className="about__content--text about__team--container">
          <Slider {...settings}>
            {testimonials.map((t, i) => (
              <div key={i} className="about__team--box">
                <img src={`/img/about/${t.img}`} alt="" />
                <h3>{t.name}</h3>
                <p>{t.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Team
