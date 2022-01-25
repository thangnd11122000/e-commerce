import React from "react"

const Banner = () => {
  return (
    <div className="about__banner">
      <img
        src="https://mageblueskytech.com/dukamarket/media/wysiwyg/banner-about-us.jpg"
        alt=""
      />
      <div className="about__banner--main">
        <div className="about__banner--content">
          <h1>Về chúng tôi</h1>
          <p>
            Ngày nay, chúng tôi tự hào phục vụ cho hơn 1 triệu cá nhân, nghệ sĩ
            và chủ doanh nghiệp nhỏ trên khắp thế giới.
          </p>
          <div className="about__banner--btn">
            <button className="btn-primary">Xem thêm</button>
            <button className="btn-secondary">Xem dự án</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
