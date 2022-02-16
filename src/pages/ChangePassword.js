import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const ChangePassword = () => {
  const initialValues = {
    currentPassword: "",
    password: "",
    confirmPassword: "",
  }

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Nhập mật khẩu hiện tại"),
    password: Yup.string().required("Nhập mật khẩu mới"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Nhập mật khẩu không giống nhau")
      .required("Nhập xác thực mật khẩu"),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="form__container">
      <div className="form__box">
        <h3>Quên mật khẩu ?</h3>
        {/* <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormControl
                control="input"
                type="password"
                label="Mật khẩu hiện tại"
                name="currentPassword"
                autoComplete="on"
              />
              <FormControl
                control="input"
                type="password"
                label="Mật khẩu mới"
                name="password"
                autoComplete="on"
              />
              <FormControl
                control="input"
                type="password"
                label="Xác thực mật khẩu"
                name="confirmPassword"
                autoComplete="on"
              />

              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn-primary"
              >
                Thay đổi
              </button>
            </Form>
          )}
        </Formik> */}
      </div>
    </div>
  )
}

export default ChangePassword
