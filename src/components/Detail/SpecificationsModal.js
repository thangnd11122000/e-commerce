import * as React from "react"
import Modal from "@mui/material/Modal"
import { Close } from "@mui/icons-material"

export default function SpecificationsModal({ isOpenModal, setIsOpenModal }) {
  return (
    <div>
      <Modal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        aria-labelledby="specifications-title"
        aria-describedby="specifications-description"
      >
        <div className="detail__specifications detail__modal">
          <h3>Thông số kĩ thuật</h3>
          <Close onClick={() => setIsOpenModal(false)} />
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
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
          <div className="detail__specifications--box">
            <p className="detail__specifications--key">Chip đồ họa</p>
            <p className="detail__specifications--value">
              NVIDIA GeForce GTX 1650 4GB GDDR6 / Intel Iris Xe Graphics
            </p>
          </div>
        </div>
      </Modal>
    </div>
  )
}
