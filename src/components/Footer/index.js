import { FacebookOutlined, ArrowForward } from "@mui/icons-material"
import { useSelector } from "react-redux"

const Footer = () => {
  const { response } = useSelector((state) => state.categoriesApi)
  const footerToggle = (e) => e.target.classList.toggle("active")
  console.log(response)
  return (
    <div className="footer-layout">
      <div className="footer">
        <div className="footer__links">
          <div className="footer__header" onClick={(e) => footerToggle(e)}>
            <h3>Tech chain</h3>
            <ArrowForward />
          </div>

          <div className="footer__body">
            {/* <p>
              Ứng dụng đã có trên App Store và Google Play.<br />
              Tải ngay.
            </p> */}
            {/* <div className="footer__download">
              <a href="/">
                <img src="/img/app-store.png" alt="" />
              </a>
              <a href="/">
                <img src="/img/google-play.png" alt="" />
              </a>
            </div> */}
            <div className="footer__socials">
              <a href="/">
                <FacebookOutlined />
              </a>
              {/* <a href="/">
                <FacebookOutlined />
              </a>
              <a href="/">
                <FacebookOutlined />
              </a>
              <a href="/">
                <FacebookOutlined />
              </a>
              <a href="/">
                <FacebookOutlined />
              </a>
              <a href="/">
                <FacebookOutlined />
              </a> */}
            </div>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__header" onClick={(e) => footerToggle(e)}>
            <h3>Trung tâm trợ giúp</h3>

            <ArrowForward />
          </div>

          <div className="footer__body">
            <ul>
              <li>
                <a href="/#">Khách hàng mới</a>
              </li>
              <li>
                <a href="/#">Cách sử dụng tài khoản</a>
              </li>
              <li>
                <a href="/#">Đặt một đơn hàng</a>
              </li>
              <li>
                <a href="/#">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="/#">Trục trặc với đơn hàng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__header" onClick={(e) => footerToggle(e)}>
            <h3>Danh mục sản phẩm</h3>

            <ArrowForward />
          </div>

          <div className="footer__body">
            <ul>
              {response?.map(
                (cat, index) =>
                  index < 4 && (
                    <li>
                      <a href="/#">{cat.category_name}</a>
                    </li>
                  )
              )}
            </ul>
            {/* <ul>
              <li>
                <a href="/#">Trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="/#">Liên hệ</a>
              </li>
              <li>
                <a href="/#">Báo cáo lạm dụng</a>
              </li>
              <li>
                <a href="/#">Chính sách và quy tắc</a>
              </li>
              <li>
                <a href="/#">Chính sách trả hàng</a>
              </li>
            </ul> */}
          </div>
        </div>
        {/* <div className="footer__links">
          <div className="footer__header" onClick={(e) => footerToggle(e)}>
            <h3>Dịch vụ khách hàng</h3>

            <ArrowForward />
          </div>

          <div className="footer__body">
            <ul>
              <li>
                <a href="/#">Trung tâm trợ giúp</a>
              </li>
              <li>
                <a href="/#">Liên hệ</a>
              </li>
              <li>
                <a href="/#">Báo cáo lạm dụng</a>
              </li>
              <li>
                <a href="/#">Chính sách và quy tắc</a>
              </li>
              <li>
                <a href="/#">Chính sách trả hàng</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__links footer__links--large">
          <div className="footer__header" onClick={(e) => footerToggle(e)}>
            <h3>Đăng kí nhận bản tin</h3>
            <ArrowForward />
          </div>
          <div className="footer__body">
            <p>Nhận được một phiếu giảm giá mới cho mỗi Ngày thứ bảy.</p>
            <div className="footer__form">
              <input
                type="text"
                name=""
                id=""
                placeholder="Nhập email của bạn"
              />
              <button>Gửi</button>
            </div>
            <p>
              By providing your email address, you agree to our Privacy Policy
              and Terms of Service.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
