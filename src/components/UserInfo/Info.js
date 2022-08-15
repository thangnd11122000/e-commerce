import { Link } from "react-router-dom"

const Info = () => {
  return (
    <div className="section-box">
      <div className="user__header">
        <h3>Thông tin của tôi</h3>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <div className="user__body user--flex">
        <form className="user-form">
          <div className="user-form__group">
            <p>Tên đăng nhập</p>
            <p>Quang Tuấn</p>
          </div>
          <div className="user-form__group">
            <p>Họ và tên</p>
            <input type="text" name="" id="" required />
          </div>
          <div className="user-form__group">
            <p>Email</p>
            <p>
              thang*****@gmail.com <Link to="/doi-email">Thay đổi</Link>
            </p>
          </div>
          <div className="user-form__group">
            <p>Số điện thoại</p>
            <p>
              0355***0000 <Link to="/doi-so-dien-thoai">Thay đổi</Link>
            </p>
          </div>

          <div className="user-form__group">
            <p>Giới tính</p>
            <div className="user-form__radio">
              <div>
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Nam</label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Nữ</label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" value="other" />
                <label htmlFor="other">Khác</label>
              </div>
            </div>
          </div>
          <div className="user-form__button">
            <button className="btn-primary">Lưu</button>
          </div>
        </form>
        <div className="user__avatar">
          <img src="/img/about/testimonial-5.jpg" alt="avatar" />
          <button className="btn-primary">Chọn ảnh</button>
        </div>
      </div>
    </div>
  )
}

export default Info
