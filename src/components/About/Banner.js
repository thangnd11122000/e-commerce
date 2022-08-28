import image from "../../assets/img/common/banner.jpeg"
import LazyLoad from "react-lazyload"

const Banner = () => {
  return (
    <div className="about-banner">
      <LazyLoad>
        <img src={image} alt="Về chúng tôi" />
      </LazyLoad>
      <div className="about-banner__container">
        <div className="about-banner__item">
          <h1>Về chúng tôi</h1>
          <p>
            Ngày nay, chúng tôi tự hào phục vụ cho hơn 1 triệu cá nhân, nghệ sĩ
            và chủ doanh nghiệp nhỏ trên khắp thế giới.
          </p>
          <div className="about-banner__button">
            <button className="btn-primary">Xem thêm</button>
            <button className="btn-secondary">Xem dự án</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
