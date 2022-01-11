import React from "react";

export const MobileLink = ({  name, link, icon }) => {
  return (
    <div className="mobile-bottom__box menu-sidebar">
      <a href={link} className="mobile-bottom__link menu-sidebar">
        {icon}
        <span className="menu-sidebar">{name}</span>
      </a>
    </div>
  );
};
