import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../Form/FormControl"
import Modal from "@mui/material/Modal"
import { Close } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { addAddress, editAddress } from "../../features/userAddress/userAddressSlice"
import { provinceData } from "../../data"
import Notification from "../Notification"

// const initialValues = {
//   id: null,
//   name: "",
//   phone: "",
//   email: "",
//   province: "",
//   district: "",
//   commune: "",
//   detail: "",
// }

const provinceOptions = [
  { key: "Tỉnh / Thành phố", value: "" },
  { key: "TP HCM", value: "1" },
  { key: "Hà Nội", value: "2" },
]

const validationSchema = Yup.object({
  name: Yup.string().required("Nhập Họ và tên"),
  phone: Yup.string().required("Nhập Số điện thoại"),
  email: Yup.string().required("Nhập Email"),
  province: Yup.string().required("Chọn Tỉnh / Thành phố"),
  district: Yup.string().required("Chọn Quận / Huyện"),
  commune: Yup.string().required("Chọn Phường / Xã"),
  detail: Yup.string().required("Nhập Đường / Số nhà..."),
})

const AddressModal = ({ isOpenModal, setIsOpenModal, edit }) => {
  const [address, setAddress] = useState(edit)
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" })
  const dispatch = useDispatch()

  const getKeyAndValue = (array, value) => {
    let temp
    array.forEach((a) => {
      if (a.value === value) temp = a.key
    })
    return temp
  }

  const onSubmit = (values) => {
    if (edit?.id) {
      if (values.province !== address.province) {
        values.provinceKey = getKeyAndValue(provinceData, values.province)
      }
      dispatch(editAddress(values))
      setNotify({
        isOpen: true,
        message: "Sửa địa chỉ thành công",
        type: "success",
      })
    } else {
      values.provinceKey = getKeyAndValue(provinceData, values.province)
      dispatch(addAddress(values))
      setNotify({
        isOpen: true,
        message: "Thêm địa chỉ thành công",
        type: "success",
      })
    }
    setIsOpenModal(false)
  }

  // useEffect(() => {
  //   setAddress(edit || initialValues)
  // }, [edit, isOpenModal])

  return (
    <>
      <Modal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        aria-labelledby="address-title"
        aria-describedby="address-description"
      >
        <div className="modal section-box">
          <Close onClick={() => setIsOpenModal(false)} />
          <Formik
            initialValues={address}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div className="modal__box">
                  <h3>Thông tin người nhận</h3>
                  <FormControl
                    control="input"
                    type="text"
                    name="name"
                    label="Họ và tên"
                  />
                  <div className="modal__flex">
                    <FormControl
                      control="input"
                      type="number"
                      name="phone"
                      label="Số điện thoại"
                    />
                    <FormControl
                      control="input"
                      type="email"
                      name="email"
                      label="Email"
                    />
                  </div>
                </div>
                <div className="modal__box">
                  <h3>Địa chỉ nhận hàng</h3>
                  <div className="modal__flex">
                    <FormControl
                      control="select"
                      name="province"
                      options={provinceData}
                      label="Tỉnh / Thành phố"
                    />
                    <FormControl
                      control="select"
                      name="district"
                      options={provinceOptions}
                      label="Quận / Huyện"
                    />
                  </div>
                  <div className="modal__flex">
                    <FormControl
                      control="select"
                      name="commune"
                      options={provinceOptions}
                      label="Phường / Xã"
                    />
                    <FormControl
                      control="input"
                      type="text"
                      name="detail"
                      label="Đường / Số nhà..."
                    />
                  </div>
                </div>
                <div className="modal__button">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsOpenModal(false)}
                  >
                    Hủy
                  </button>
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={!formik.isValid}
                  >
                    Lưu
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  )
}

export default AddressModal
