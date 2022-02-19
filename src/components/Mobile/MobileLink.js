import React from "react"
import { Link } from "react-router-dom"

export const MobileLink = ({ name, link, icon }) => {
  return (
    <div className="mobile-bottom__item">
      <Link to={link} className="mobile-bottom__link">
        {icon}
        <span>{name}</span>
      </Link>
    </div>
  )
}
