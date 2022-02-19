import { AccountBalance } from "@mui/icons-material"
import React from "react"

const Bank = ({ setIsOpenCreditModal, setIsOpenBankModal }) => {
  return (
    <div className="section-box">
      <div className="user__header user__header--flex">
        <h3>Thẻ tín dụng / Thẻ ghi nợ</h3>
        <button
          className="btn-primary"
          onClick={() => setIsOpenCreditModal(true)}
        >
          Thêm thẻ mới
        </button>
      </div>
      <div className="user__body">
        <p>Bạn chưa có thẻ nào</p>
      </div>

      <div className="user__header user__header--flex">
        <h3>Thẻ tín dụng</h3>
        <button
          className="btn-primary"
          onClick={() => setIsOpenBankModal(true)}
        >
          Thêm thẻ mới
        </button>
      </div>
      <div className="user__body">
        <div className="bank-account">
          <div className="bank-account__item">
            <AccountBalance />
            <div>
              <h4>
                VP BANK - NHTMCP VN THINH VUONG
                <span>Đã kiểm tra</span>
                <button>Mặc định</button>
              </h4>
              <p>
                <span>Họ và tên</span>: Nguyễn Doãn Thắng
              </p>
              <p>
                <span>Khu vực</span>: Tp. Hồ Chí Minh
              </p>
            <p>*7777</p>
            </div>
          </div>
          <div className="bank-account__action">
            <button className="btn-primary">Xóa</button>
            <button className="btn-primary">Đặt làm mặc định</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bank
