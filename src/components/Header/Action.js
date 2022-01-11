import React from "react";

export const Action = ({ icon, topText, bottomText, link, children }) => {
  return (
    <a href={link} className="navbar__action">
      {icon}
      <div>
        <span className="navbar__action--top">{topText}</span>
        <span className="navbar__action--bottom">{bottomText}</span>
      </div>
      {children}
    </a>
  );
};
