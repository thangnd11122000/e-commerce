import Modal from "@mui/material/Modal"
import { Close } from "@mui/icons-material"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../Form/FormControl"
import LazyLoad from "react-lazyload"

const CreditModal = ({ isOpenCreditModal, setIsOpenCreditModal }) => {
  const initialValues = {
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    fullName: "",
    address: "",
    postalCode: "",
  }

  const validationSchema = Yup.object({
    cardNumber: Yup.string().required("Nhập số thẻ"),
    expirationDate: Yup.string().required("Nhập ngày hết hạn"),
    cvv: Yup.string().required("Nhập mã cvv"),
    fullName: Yup.string().required("Nhập họ và tên"),
    address: Yup.string().required("Nhập địa chỉ đăng kí"),
    postalCode: Yup.string().required("Nhập mã bưu chính"),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <Modal
      open={isOpenCreditModal}
      onClose={() => setIsOpenCreditModal(false)}
      aria-labelledby="credit-title"
      aria-describedby="credit-description"
    >
      <div className="bank-modal modal">
        <Close onClick={() => setIsOpenCreditModal(false)} />
        <div className="bank-modal__container">
          <h3>Thêm thẻ tín dụng</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <Form>
                <div className="bank-modal__title">
                  <p>Chi tiết thẻ</p>
                  <div>
                    <LazyLoad>
                      <img src="/img/credit/jcb.png" alt="" />
                    </LazyLoad>
                    <LazyLoad>
                      <img src="/img/credit/master.png" alt="" />
                    </LazyLoad>
                    <LazyLoad>
                      <img src="/img/credit/american.png" alt="" />
                    </LazyLoad>
                    <LazyLoad>
                      <img src="/img/credit/visa.png" alt="" />
                    </LazyLoad>
                  </div>
                </div>
                <FormControl
                  control="input"
                  type="text"
                  name="fullName"
                  placeholder="Họ và tên"
                />
                <FormControl
                  control="input"
                  type="text"
                  name="cardNumber"
                  placeholder="Số thẻ"
                />
                <div className="bank-modal--flex">
                  <FormControl
                    control="input"
                    type="date"
                    name="expirationDate"
                    placeholder="Ngày hết hạn"
                  />
                  <FormControl
                    control="input"
                    type="number"
                    name="cvv"
                    placeholder="Mã CVV"
                  />
                </div>
                <div className="bank-modal__title">
                  Địa chỉ đăng kí Thẻ tín dụng
                </div>
                <FormControl
                  control="input"
                  type="text"
                  name="address"
                  placeholder="Địa chỉ"
                />
                <FormControl
                  control="input"
                  type="text"
                  name="postalCode"
                  placeholder="Mã bưu chính"
                />

                <div className="bank-modal__button">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsOpenCreditModal(false)}
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

export default CreditModal
