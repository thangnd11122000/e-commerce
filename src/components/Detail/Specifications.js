import React from "react"

const Specifications = ({ setIsOpenModal }) => {
  return (
    <div className="detail__specifications">
      <h3>Thông số kĩ thuật</h3>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">Thương hiệu</p>
        <p className="detail__specifications--value">ACER</p>
      </div>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">Bảo hành</p>
        <p className="detail__specifications--value">12</p>
      </div>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">CPU</p>
        <p className="detail__specifications--value">
          Intel Core i5-11300H ( 4.4 GHz / 8MB / 4 nhân, 8 luồng )
        </p>
      </div>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">Chip đồ họa</p>
        <p className="detail__specifications--value">
          NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
        </p>
      </div>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">Thương hiệu</p>
        <p className="detail__specifications--value">ACER</p>
      </div>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">Bảo hành</p>
        <p className="detail__specifications--value">12</p>
      </div>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">CPU</p>
        <p className="detail__specifications--value">
          Intel Core i5-11300H ( 4.4 GHz / 8MB / 4 nhân, 8 luồng )
        </p>
      </div>
      <div className="detail__specifications--box">
        <p className="detail__specifications--key">Chip đồ họa</p>
        <p className="detail__specifications--value">
          NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
        </p>
      </div>
      <div className="detail__specifications--button">
        <button
          className="btn-primary"
          onClick={() => setIsOpenModal(true)}
        >
          Xem thêm
        </button>
      </div>
    </div>
  )
}

export default Specifications
