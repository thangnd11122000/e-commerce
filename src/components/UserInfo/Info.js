import React from "react"

const Info = () => {
  return (
    <div className="user__info section-box">
      <h3>Thông tin của tôi</h3>
      <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      <hr />
      <div className="user__row">
        <form className="user__form">
          <div className="user__form--group">
            <p>Tên đăng nhập</p>
            <p>Quang Tuấn</p>
          </div>
          <div className="user__form--group">
            <p>Họ và tên</p>
            <input type="text" name="" id="" required />
          </div>
          <div className="user__form--group">
            <p>Email</p>
            <p>
              thang*****@gmail.com <a href="/#">Thay đổi</a>
            </p>
          </div>
          <div className="user__form--group">
            <p>Số điện thoại</p>
            <p>
              0355***0000 <a href="/#">Thay đổi</a>
            </p>
          </div>

          <div className="user__form--group">
            <p>Giới tính</p>
            <div className="user__form--radio">
              <div>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Nam</label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Nữ</label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Khác</label>
              </div>
            </div>
          </div>
          <div className="user__form--group">
            <p></p>
            <button className="btn-primary">Lưu</button>
          </div>
        </form>
        <div className="user__change-avatar">
          <img src="/img/about/testimonial-5.jpg" alt="" />
          <button className="">Chọn ảnh</button>
        </div>
      </div>
    </div>
  )
}

export default Info
