import React from "react";

const PostCard = ({ post }) => {
  const { image, title, description, date, link, categories } = post;
  return (
    <div className="post-card">
      <div className="post-card__categories">
        {categories?.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
      </div>
      <div className="post-card__header">
        <a href={link}>
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="post-card__body">
        <a href={link}>{title}</a>
        <p>{description.substring(0, 80)}...</p>
      </div>
      <div className="post-card__footer">
        <a href={link}>Xem tiếp</a>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default PostCard;
