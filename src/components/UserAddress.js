import { Add, BorderColor, Delete } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  deleteAddress,
  selectedAddress,
} from "../features/userAddress/userAddressSlice"
import ConfirmDialog from "./ConfirmDialog"
import AddressModal from "./Modal/AddressModal"

const initialValues = {
  id: null,
  name: "",
  phone: "",
  email: "",
  province: "",
  district: "",
  commune: "",
  detail: "",
}

const UserAddress = () => {
  const [edit, setEdit] = useState(initialValues)
  const [activeAddress, setActiveAddress] = useState({})
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    type: "",
    title: "",
    onConfirm: () => {},
  })
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
    setEdit(initialValues)
    setIsOpenModal(true)
  }

  const handleDelete = (id) => {
    setConfirmDialog({
      isOpen: true,
      type: "confirm",
      title: "Xóa địa chỉ này?",
      onConfirm: () => dispatch(deleteAddress(id)),
    })
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
              <div className="user-address__action">
                <BorderColor onClick={() => handleEdit(a.id)} />
                <Delete onClick={() => handleDelete(a.id)} />
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
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )
}

export default UserAddress
