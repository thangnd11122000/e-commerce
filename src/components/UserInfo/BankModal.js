import Modal from "@mui/material/Modal"
import { Close } from "@mui/icons-material"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../Form/FormControl"

const BankModal = ({ isOpenBankModal, setIsOpenBankModal }) => {
  const initialValues = {
    fullName: "",
    IDCard: "",
    bankName: "",
    bankBranch: "",
    accountNumber: "",
    accountName: "",
  }

  const bankNameOptions = [
    { key: "Tên ngân hàng", value: "" },
    { key: "Vietcombank", value: "vietcombank" },
    { key: "Viettinbank", value: "viettinbank" },
  ]

  const bankBranchOptions = [
    { key: "Tên chi nhánh", value: "" },
    { key: "Chi nhánh 1", value: "1" },
    { key: "Chi nhánh 2", value: "2" },
  ]

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Nhập họ và tên"),
    IDCard: Yup.string().required("Nhập CMND/CCCD"),
    bankName: Yup.string().required("Chọn tên ngân hàng"),
    bankBranch: Yup.string().required("Chọn chi nhánh ngân hàng"),
    accountNumber: Yup.string().required("Nhập số tài khoản"),
    accountName: Yup.string().required("Nhập tên tài khoản"),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Modal
      open={isOpenBankModal}
      onClose={() => setIsOpenBankModal(false)}
      aria-labelledby="credit-title"
      aria-describedby="credit-description"
    >
      <div className="modal bank-modal">
        <Close onClick={() => setIsOpenBankModal(false)} />
        <div className="bank-modal__container">
          <h3>Thêm thẻ ngân hàng</h3>
          <br />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <FormControl
                  control="input"
                  type="text"
                  name="fullName"
                  placeholder="Họ và tên"
                />
                <FormControl
                  control="input"
                  type="text"
                  name="IDCard"
                  placeholder="Chứng minh nhân dân"
                />
                <FormControl
                  control="select"
                  name="bankName"
                  options={bankNameOptions}
                />
                <FormControl
                  control="select"
                  name="bankBranch"
                  options={bankBranchOptions}
                />
                <FormControl
                  control="input"
                  type="number"
                  name="accountNumber"
                  placeholder="Số tài khoản"
                />
                <FormControl
                  control="input"
                  type="text"
                  name="accountName"
                  placeholder="Tên đầy đủ (viết in hoa, không dấu)"
                />
                <div className="bank-modal__button">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsOpenBankModal(false)}
                  >
                    Đóng
                  </button>
                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="btn-primary"
                  >
                    Thêm
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  )
}

export default BankModal
