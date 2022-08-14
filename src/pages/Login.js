import { Alert, Snackbar } from "@mui/material"
import { Form, Formik } from "formik"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"
import { login } from "../store/authSlice"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [typeAlert, setTypeAlert] = useState(0)
  let location = useLocation()
  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Nhập đúng định dạng email")
      .required("Nhập email"),
    password: Yup.string().required("Nhập mật khẩu"),
  })
  const onSubmit = (values) => {
    setLoading(true)
    dispatch(login({ email: values.email, password: values.password }))
      .unwrap()
      .then(() => {
        setOpenAlert(true)
        setTypeAlert(1)
        setLoading(false)
      })
      .catch((e) => {
        setOpenAlert(true)
        setTypeAlert(0)
        setLoading(false)
        console.log(e)
      })
  }

  return (
    <div className="form form__container">
      <div className="form__item">
        <Snackbar
          open={openAlert}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={3000}
          onClose={() => setOpenAlert(false)}
        >
          <Alert
            variant="filled"
            onClose={() => setOpenAlert(false)}
            severity={typeAlert ? "success" : "error"}
            sx={{ width: "100%" }}
          >
            {typeAlert ? "Đăng nhập thành công" : "Đăng nhập thất bại"}
          </Alert>
        </Snackbar>
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
                type="email"
                label="Email"
                name="email"
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
                Đăng nhập <BeatLoader size={5} loading={loading} color="#fff" />
              </button>
            </Form>
          )}
        </Formik>
        <div className="form__action">
          <p></p>
          <a href="/#">Quên mật khẩu</a>
        </div>
        <div className="form__option">
          <div></div>
          <span>Hoặc</span>
          <div></div>
        </div>
        <button className="btn-primary form__item--facebook">
          Đăng nhập với facebook
        </button>
        <button className="btn-primary form__item--google">
          Đăng nhập với google
        </button>

        <p className="form__switch">
          Bạn chưa có tài khoản? <Link to="/register">Đăng kí ngay</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
