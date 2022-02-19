import React from "react";
import { Link } from "react-router-dom";

const BannerCard = ({ data }) => {
  const { link, image, title, subtitle } = data;
  return (
    <div className="banner-card__item">
      <Link to={link}>
        <img src={image} alt="" />
        <div className="banner-card__content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </Link>
    </div>
  );
};

export default BannerCard;
