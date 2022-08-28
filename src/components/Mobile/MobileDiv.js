import LazyLoad from "react-lazyload"

export const MobileDiv = ({ name, icon, handle }) => {
  return (
    <div className="mobile-bottom__box menu-sidebar" onClick={() => handle()}>
      <div className="mobile-bottom__link menu-sidebar">
        <LazyLoad>
          <img
            src={icon}
            alt=""
            className="menu-sidebar mobile-bottom__link--img"
          />
        </LazyLoad>
        <span className="menu-sidebar">{name}</span>
      </div>
    </div>
  )
}
