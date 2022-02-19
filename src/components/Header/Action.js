import { Link } from "react-router-dom"

export const Action = ({ icon, topText, bottomText, link, children }) => {
  return (
    <Link to={link} className="navbar-action__item">
      {icon}
      <div>
        <span className="navbar-action__top">{topText}</span>
        <span className="navbar-action__bottom">{bottomText}</span>
      </div>
      {children}
    </Link>
  )
}
