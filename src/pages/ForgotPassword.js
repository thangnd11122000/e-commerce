import axios from "axios"
import { Form, Formik } from "formik"
import { useState } from "react"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const ForgotPassword = () => {
  const [type, setType] = useState(null)
  const initialValues = {
    email: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Nhập địa chỉ email"),
  })

  const onSubmit = (values) => {
    setType(null)
    axios
      .post("/api/reset-password", {
        email: values.email,
      })
      .then((res) => {
        if (res.data?.status === 200) setType("success")
        else setType("error")
      })
  }

  return (
    <div className="form form__container">
      <div className="form__item">
        <h3>Quên mật khẩu ?</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormControl
                control="input"
                type="email"
                label="Địa chỉ email"
                name="email"
              />

              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn-primary"
              >
                Gửi
              </button>
            </Form>
          )}
        </Formik>
        {type === "success" && (
          <p style={{ marginTop: "10px", color: "green" }}>
            Đã gửi thông tin về mail của bạn
          </p>
        )}
        {type === "error" && (
          <p style={{ marginTop: "10px", color: "red" }}>Đã có lỗi xảy ra</p>
        )}
      </div>
    </div>
  )
}

export default ForgotPassword
