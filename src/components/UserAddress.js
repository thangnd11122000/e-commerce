import { Add, BorderColor, Delete } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteAddress, selectedAddress } from "../features/userAddress/userAddress"
import AddressModal from "./Modal/AddressModal"

const UserAddress = () => {
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
    <>
      <div className="user-address">
        {userAddress?.map((a) => (
          <div
            className={`user-address__item ${
              a.active && "user-address__item--active"
            }`}
            key={a.id}
            onClick={() => dispatch(selectedAddress(a.id))}
          >
            <div className="user-address__info">
              <h5>{a?.name}</h5>
              <div className="user-address__actions">
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
          className="user-address__item user-address__item--center"
          onClick={handleAdd}
        >
          <div className="user-address__add">
            <Add />
            <span>Thêm địa chỉ</span>
          </div>
        </div>
      </div>
      <AddressModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        edit={edit}
      />
    </>
  )
}

export default UserAddress
