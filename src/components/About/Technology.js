import React from "react"

const Technology = () => {
  return (
    <div className="about__section about__technology">
      <div className="about__content">
        <h5 className="about__content--subtitle">Chỉ số công nghệ</h5>
        <h2 className="about__content--title">Thành Tựu</h2>
        <p className="about__content--desc">
          Qua các cuộc khảo sát nội bộ cũng như thấu hiểu hành vi khách hàng,
          <span>Healthy Food</span> team đã xây dựng thêm hàng loạt các tính năng thông minh
          bắt kịp xu hướng công nghệ mới đem lại tốc độ truyền tải thông tin sản
          phẩm nhanh chóng và chính xác.
        </p>
        <div className="about__technology--image">
          <img src="/img/about/team-1.webp" alt="" />
          <img src="/img/about/team-2.webp" alt="" />
        </div>
        <div className="about__technology--container">
          <div className="about__technology--box">
            <div>
              <img src="/img/about/icon-4.webp" alt="" />
              <h5>4268+</h5>
            </div>
            <h3>Khách hàng</h3>
            <p>
              Đặt uy tín lên hàng đầu giúp <span>Healthy Food</span> trở thành nơi lựa chọn
              hàng đầu của khách hàng
            </p>
          </div>
          <div className="about__technology--box">
            <div>
              <img src="/img/about/icon-4.webp" alt="" />
              <h5>4268+</h5>
            </div>
            <h3>Đơn hàng</h3>
            <p>
              Để đưa ra con số khủng <span>Healthy Food</span> đã thay đổi cho toàn bộ chiến
              lược kinh doanh của hệ thống
            </p>
          </div>
          <div className="about__technology--box">
            <div>
              <img src="/img/about/icon-4.webp" alt="" />
              <h5>643+</h5>
            </div>
            <h3>Dự án</h3>
            <p>
              <span>Healthy Food</span> được nhiều người tiêu dùng đón nhận ủng hộ và trở
              thành đơn vị tiên phong trong việc cung cấp thiết bị
            </p>
          </div>
          <div className="about__technology--box">
            <div>
              <img src="/img/about/icon-4.webp" alt="" />
              <h5>269k</h5>
            </div>
            <h3>Toàn cầu</h3>
            <p>
              Không chỉ phát triển tại thị trường trong nước <span>Healthy Food</span> có
              tham vọng trở thành ông lớn trong phạm vi toàn cầu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
