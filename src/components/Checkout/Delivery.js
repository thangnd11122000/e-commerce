import { Add, BorderColor, Delete } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteInfo, selectedInfo } from "../../features/userInfo/userInfo"
import UserModal from "./UserModal"

const Delivery = () => {
  const [editInfo, setEditInfo] = useState({})
  const [activeInfo, setActiveInfo] = useState({})
  const [isOpenModal, setIsOpenModal] = useState(false)
  const userInfo = useSelector((state) => state.userInfo.value)
  const dispatch = useDispatch()
  const handleEdit = (id) => {
    const temp = userInfo.filter((info) => info.id === id)
    if (temp.length > 0) {
      setEditInfo(temp[0])
    }
    setIsOpenModal(true)
  }
  const handleAdd = () => {
    setEditInfo({})
    setIsOpenModal(true)
  }

  useEffect(() => {
    const temp = userInfo?.filter((info) => info.active === true)
    setActiveInfo(temp)
  }, [userInfo])

  return (
    <div className="section-box checkout__delivery">
      <h3 className="section-box__title">Thông tin nhận hàng</h3>
      <div className="checkout__user">
        {userInfo?.map((info) => (
          <div
            className={`checkout__user--box checkout__user--info ${
              info.active && "active"
            }`}
            key={info.id}
            onClick={() => dispatch(selectedInfo(info.id))}
          >
            <div>
              <h5>{info?.name}</h5>
              <div className="checkout__user--actions">
                <BorderColor onClick={() => handleEdit(info.id)} />
                <Delete onClick={() => dispatch(deleteInfo(info.id))} />
              </div>
            </div>
            <p>{info?.phone}</p>
            <p>
              {info.address?.detail}, {info.address?.commune},{" "}
              {info.address?.district}, {info.address?.province}
            </p>
          </div>
        ))}
        <div
          className="checkout__user--box checkout__user--add"
          onClick={handleAdd}
        >
          <Add />
          <p>Thêm địa chỉ</p>
        </div>
      </div>
      <UserModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        editInfo={editInfo}
      />
    </div>
  )
}

export default Delivery
