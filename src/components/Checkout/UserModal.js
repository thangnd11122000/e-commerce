import Modal from "@mui/material/Modal"
import { Close } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { addInfo, editInfo } from "../../features/userInfo/userInfo"

const initState = {
  id: null,
  name: "",
  phone: "",
  email: "",
  address: {
    province: "",
    district: "",
    commune: "",
    detail: "",
  },
}

const UserModal = ({ isOpenModal, setIsOpenModal, editInfo }) => {
  const [info, setInfo] = useState(initState)

  const dispatch = useDispatch()

  const handleSave = () => {
    if (editInfo?.id) {
      dispatch(editInfo(info))
    } else {
      dispatch(addInfo(info))
    }
    setIsOpenModal(false)
  }

  useEffect(() => {
    setInfo(editInfo || initState)
  }, [editInfo, isOpenModal])

  return (
    <Modal
      open={isOpenModal}
      onClose={() => setIsOpenModal(false)}
      aria-labelledby="checkout-title"
      aria-describedby="checkout-description"
    >
      <div className="checkout__modal section-box ">
        <Close onClick={() => setIsOpenModal(false)} />
        <div className="checkout__modal--box">
          <h3>Thông tin người nhận</h3>
          <div className="form-group">
            <label htmlFor="checkout-name">Họ và tên</label>
            <input
              type="text"
              className="form-control"
              name="checkout-name"
              value={info.name || ""}
              onChange={(e) => setInfo({ ...info, name: e.target.value })}
            />
          </div>
          <div className="checkout__modal--flex">
            <div className="form-group">
              <label htmlFor="checkout-phone">Số điện thoại</label>
              <input
                type="number"
                name="checkout-phone"
                value={info.phone || ""}
                className="form-control"
                onChange={(e) => setInfo({ ...info, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="checkout-email">Email</label>
              <input
                type="email"
                name="checkout-email"
                value={info.email || ""}
                className="form-control"
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="checkout__modal--box">
          <h3>Địa chỉ nhận hàng</h3>
          <div className="checkout__modal--flex">
            <div className="form-group">
              <label htmlFor="checkout-province">Tỉnh / Thành phố</label>
              <select
                className="form-control"
                name="checkout-province"
                value={info.address?.province}
                onChange={(e) =>
                  setInfo({
                    ...info,
                    address: { ...info.address, province: e.target.value },
                  })
                }
              >
                <option value="1">Tp HCM</option>
                <option value="2">Hà Nội</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="checkout-district">Quận / Huyện</label>
              <select
                className="form-control"
                name="checkout-district"
                value={info.address?.district}
                onChange={(e) =>
                  setInfo({
                    ...info,
                    address: { ...info.address, district: e.target.value },
                  })
                }
              >
                <option value="1">Tp HCM</option>
                <option value="2">Hà Nội</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="checkout-commune">Phường / Xã</label>
              <select
                className="form-control"
                name="checkout-commune"
                value={info.address?.commune}
                onChange={(e) =>
                  setInfo({
                    ...info,
                    address: { ...info.address, commune: e.target.value },
                  })
                }
              >
                <option value="1">Tp HCM</option>
                <option value="2">Hà Nội</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="checkout-detail">Đường / Số nhà ...</label>
              <select
                className="form-control"
                name="checkout-detail"
                value={info.address?.detail}
                onChange={(e) =>
                  setInfo({
                    ...info,
                    address: { ...info.address, detail: e.target.value },
                  })
                }
              >
                <option value="1">Tp HCM</option>
                <option value="2">Hà Nội</option>
              </select>
            </div>
          </div>
        </div>
        <div className="checkout__modal--btn">
          <button
            className="btn-secondary"
            onClick={() => setIsOpenModal(false)}
          >
            Hủy
          </button>
          <button className="btn-primary" onClick={handleSave}>
            Lưu
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default UserModal
