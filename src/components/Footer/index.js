import { FacebookOutlined, ArrowForward } from "@mui/icons-material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showNotify } from "../../store/notifySlice"
import { AiFillGoogleCircle } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"
import { SiZalo } from "react-icons/si"
import { Link } from "react-router-dom"

const Footer = () => {
  const dispatch = useDispatch()
  const { response } = useSelector((state) => state.categoriesApi)
  const footerToggle = (e) => e.target.classList.toggle("active")
  const [value, setValue] = useState("")

  return (
    <div className="footer-layout">
      <div className="footer">
        <div className="footer__links">
          <div className="footer__header" onClick={(e) => footerToggle(e)}>
            <h3>Tech chain</h3>
            <ArrowForward />
          </div>

          <div className="footer__body">
            <p>Tương tác với chúng tôi:</p>
            <br />
            <div className="footer__socials">
              <a href="/" style={{ backgroundColor: "#0B86EE" }}>
                <FacebookOutlined />
              </a>
              <a href="mailto:thang111220@gmail.com" style={{ backgroundColor: "#D42E34" }}>
                <AiFillGoogleCircle fontSize={22} />
              </a>
              <a href="/" style={{ backgroundColor: "#000" }}>
                <FaTiktok fontSize={18} />
              </a>
              <a href="/" style={{ backgroundColor: "#0091FF" }}>
                <SiZalo fontSize={22} />
              </a>
            </div>
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
                <Link to="/payment">Phương thức thanh toán</Link>
              </li>
              <li>
                <a href="/#">Phương thức bảo mật</a>
              </li>
              <li>
                <a href="/#">Phương thức vận chuyển</a>
              </li>
            </ul>
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
        </div> */}
        <div className="footer__links ">
          <div className="footer__header" onClick={(e) => footerToggle(e)}>
            <h3>Đăng ký nhận bản tin</h3>
            <ArrowForward />
          </div>
          <div className="footer__body">
            <p>Nhận được một phiếu giảm giá mới cho mỗi Ngày thứ bảy.</p>
            <div className="footer__form">
              <input
                type="text"
                placeholder="Nhập email của bạn"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                onClick={() => {
                  setValue("")
                  dispatch(
                    showNotify({
                      isOpen: true,
                      message: "Bạn đã gửi mail thành công",
                      type: "success",
                    })
                  )
                }}
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
