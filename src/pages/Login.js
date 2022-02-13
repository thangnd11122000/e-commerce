import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const Login = () => {
  const initialValues = {
    username: "",
    password: "",
  }
  const validationSchema = Yup.object({
    username: Yup.string().required("Nhập tên đăng nhập"),
    password: Yup.string().required("Nhập mật khẩu"),
  })
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="form__container">
      <div className="form__box">
        <h3>Đăng nhập</h3>
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
                label="Tên đăng nhập"
                name="username"
              />
              <FormControl
                control="input"
                type="password"
                label="Mật khẩu"
                name="password"
                autoComplete="on"
              />

              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn-primary"
              >
                Đăng nhập
              </button>
            </Form>
          )}
        </Formik>
        <div className="form__box--actions">
          <p></p>
          <a href="/#">Quên mật khẩu</a>
        </div>
        <div className="form__box--options">
          <div></div>
          <span>Hoặc</span>
          <div></div>
        </div>
        <button className="btn-primary form__box--facebook">
          Đăng nhập với facebook
        </button>
        <button className="btn-primary form__box--google">
          Đăng nhập với google
        </button>

        <p className="form__box--switch">
          Bạn chưa có tài khoản? <a href="/register">Đăng kí ngay</a>
        </p>
      </div>
    </div>
  )
}

export default Login
