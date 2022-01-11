import React from "react";

export const MobileDiv = ({ name, icon, handle }) => {
  return (
    <div className="mobile-bottom__box menu-sidebar" onClick={() => handle()}>
      <div className="mobile-bottom__link menu-sidebar">
        <img
          src={icon}
          alt=""
          className="menu-sidebar mobile-bottom__link--img"
        />
        <span className="menu-sidebar">{name}</span>
      </div>
    </div>
  );
};
