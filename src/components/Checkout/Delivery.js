import { Add, BorderColor, Delete } from "@mui/icons-material"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteAddress,
  selectedAddress,
} from "../../features/userAddress/userAddress"
import AddressModal from "../Modal/AddressModal"

const Delivery = () => {
  const [edit, setEdit] = useState({})
  const [activeAddress, setActiveAddress] = useState({})
  const [isOpenModal, setIsOpenModal] = useState(false)
  const userAddress = useSelector((state) => state.userAddress.value)
  const dispatch = useDispatch()
  const handleEdit = (id) => {
    const temp = userAddress.filter((a) => a.id === id)
    if (temp.length > 0) {
      setEdit(temp[0])
    }
    setIsOpenModal(true)
  }
  const handleAdd = () => {
    setEdit({})
    setIsOpenModal(true)
  }

  useEffect(() => {
    const temp = userAddress?.filter((a) => a.active === true)
    setActiveAddress(temp)
  }, [userAddress])

  return (
    <div className="section-box checkout__delivery">
      <h3 className="section-box__title">Thông tin nhận hàng</h3>
      <div className="checkout__user">
        {userAddress?.map((a) => (
          <div
            className={`checkout__user--box checkout__user--info ${
              a.active && "active"
            }`}
            key={a.id}
            onClick={() => dispatch(selectedAddress(a.id))}
          >
            <div>
              <h5>{a?.name}</h5>
              <div className="checkout__user--actions">
                <BorderColor onClick={() => handleEdit(a.id)} />
                <Delete onClick={() => dispatch(deleteAddress(a.id))} />
              </div>
            </div>
            <p>{a?.phone}</p>
            <p>
              {a.detail}, {a.commune}, {a.district}, {a.provinceKey}
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
      <AddressModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        edit={edit}
      />
    </div>
  )
}

export default Delivery
