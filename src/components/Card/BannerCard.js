import React from "react";

const BannerCard = ({ data }) => {
  const { link, image, title, subtitle } = data;
  return (
    <div className="banner-card__box">
      <a href={link}>
        <img src={image} alt="" />
        <div className="banner-card__box--content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default BannerCard;
