import { Facebook, FacebookOutlined, ArrowForward } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
const Footer = () => {
  const [actives, setActives] = useState([]);

  const handleClick = (className) => {
    if (actives.includes(className)) {
      const newActive = actives.filter((a) => a !== className);
      setActives(newActive);
    } else {
      setActives([...actives, className]);
    }
  };

  return (
    <div className="footer">
      <div className="footer__links large">
        <div
          className={`footer__header ${
            actives.includes("active-1") ? "active-1" : ""
          }`}
          onClick={() => handleClick("active-1")}
        >
          <h3>Download app</h3>
          <ArrowForward />
        </div>

        <div className="footer__body">
          <p>
            Ứng dụng đã có trên App Store và Google Play. <br />
            Tải ngay.
          </p>
          <div className="footer__download">
            <a href="/">
              <img src="/img/app-store.png" alt="" />
            </a>
            <a href="/">
              <img src="/img/google-play.png" alt="" />
            </a>
          </div>
          <div className="footer__socials">
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
            </a>
            <a href="/">
              <FacebookOutlined />
            </a>
            <a href="/">
              <FacebookOutlined />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__links">
        <div
          className={`footer__header ${
            actives.includes("active-2") ? "active-2" : ""
          }`}
          onClick={() => handleClick("active-2")}
        >
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
        <div
          className={`footer__header ${
            actives.includes("active-3") ? "active-3" : ""
          }`}
          onClick={() => handleClick("active-3")}
        >
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
      <div className="footer__links">
        <div
          className={`footer__header ${
            actives.includes("active-4") ? "active-4" : ""
          }`}
          onClick={() => handleClick("active-4")}
        >
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
      <div className="footer__links large">
        <div
          className={`footer__header ${
            actives.includes("active-5") ? "active-5" : ""
          }`}
          onClick={() => handleClick("active-5")}
        >
          <h3>Đăng kí nhận bản tin</h3>

          <ArrowForward />
        </div>
        <div className="footer__body">
          <p>
            Tham gia cùng hơn 60.000 người đăng ký và nhận được một phiếu giảm
            giá mới cho mỗi Ngày thứ bảy.
          </p>
          <div className="footer__form">
            <input type="text" name="" id="" placeholder="nhan email" />
            <button>Gửi</button>
          </div>
          <p>
            By providing your email address, you agree to our Privacy Policy and
            Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
