const Technology = () => {
  return (
    <div className="about__section about-technology">
      <div className="about-content">
        <h5 className="about-content__subtitle">Chỉ số công nghệ</h5>
        <h2 className="about-content__title">Thành Tựu</h2>
        <p className="about-content__desc">
          Qua các cuộc khảo sát nội bộ cũng như thấu hiểu hành vi khách hàng,
          <span>Healthy Food</span> team đã xây dựng thêm hàng loạt các tính
          năng thông minh bắt kịp xu hướng công nghệ mới đem lại tốc độ truyền
          tải thông tin sản phẩm nhanh chóng và chính xác.
        </p>
        <div className="about-technology__image">
          <img src="/img/about/team-1.webp" alt="Team 1" />
          <img src="/img/about/team-2.webp" alt="Team 2" />
        </div>
        <div className="about-technology__list">
          <div className="about-technology__item">
            <div>
              <img src="/img/about/icon-4.webp" alt="Icon" />
              <h5>4268+</h5>
            </div>
            <h3>Khách hàng</h3>
            <p>
              Đặt uy tín lên hàng đầu giúp <span>Healthy Food</span> trở thành
              nơi lựa chọn hàng đầu của khách hàng
            </p>
          </div>
          <div className="about-technology__item">
            <div>
              <img src="/img/about/icon-4.webp" alt="Icon" />
              <h5>4268+</h5>
            </div>
            <h3>Đơn hàng</h3>
            <p>
              Để đưa ra con số khủng <span>Healthy Food</span> đã thay đổi cho
              toàn bộ chiến lược kinh doanh của hệ thống
            </p>
          </div>
          <div className="about-technology__item">
            <div>
              <img src="/img/about/icon-4.webp" alt="Icon" />
              <h5>643+</h5>
            </div>
            <h3>Dự án</h3>
            <p>
              <span>Healthy Food</span> được nhiều người tiêu dùng đón nhận ủng
              hộ và trở thành đơn vị tiên phong trong việc cung cấp thiết bị
            </p>
          </div>
          <div className="about-technology__item">
            <div>
              <img src="/img/about/icon-4.webp" alt="Icon" />
              <h5>269k</h5>
            </div>
            <h3>Toàn cầu</h3>
            <p>
              Không chỉ phát triển tại thị trường trong nước{" "}
              <span>Healthy Food</span> có tham vọng trở thành ông lớn trong
              phạm vi toàn cầu
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
