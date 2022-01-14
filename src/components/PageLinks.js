import React from "react";

const PageLinks = ({ links }) => {
  return (
    <div className="page-links">
      <a href="/">Trang chủ</a>
      {links?.map((link, index) => (
        <React.Fragment key={index}>
          <span>{">"}</span>
          <a href={link.link}>{link.name}</a>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PageLinks;
