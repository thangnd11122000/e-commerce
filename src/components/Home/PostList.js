import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { postsData } from "../../data";
import CardPost from "../Card/PostCard";

const PostList = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
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
  };
  return (
    <div className="post-list">
      <div className="component-header">
        <h3>Bai viet gan day</h3>
        <span>Xem tat ca</span>
      </div>
      <Slider {...settings} className="post-list__slider">
        {postsData.map((data, i) => (
          <CardPost key={i} post={data} />
        ))}
      </Slider>
    </div>
  );
};

export default PostList;
