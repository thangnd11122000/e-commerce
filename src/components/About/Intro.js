import React from "react"

const Intro = () => {
  return (
    <div className="about__section about__intro">
      <div className="about__content">
        <h5 className="about__content--subtitle">
          Giới thiệu về cửa hàng trực tuyến của chúng tôi
        </h5>
        <h2 className="about__content--title">
          Xin chào với hơn 1 năm kinh nghiệm
        </h2>
        <p className="about__content--desc">
          Hơn 1 năm,chúng tôi đã giúp các công ty đạt được các mục tiêu tài
          chính và thương hiệu
        </p>
        <div className="about__content--text">
          Được thành lập từ năm 2021 với tiền thân là cửa hàng chuyên cung cấp
          các mẫu laptop,Điện thoại,phụ kiện cao cấp nhập khẩu chính thức tại
          Việt Nam. <span>Healthy Food</span> đã phát triển và đến nay đã sở hữu
          chuỗi cửa hàng nhằm mang tới những sản phẩm chất lượng được nhập khẩu
          trực tiếp tại Mỹ. Các mẫu laptop, PC đồng bộ, phụ kiện độc đáo, chất
          lượng phục vụ nhu cầu cao nhất của người dùng.
        </div>
      </div>
      <img src="/img/about/about.webp" alt="" />
    </div>
  )
}

export default Intro
