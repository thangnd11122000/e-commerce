import { Alert, Snackbar } from "@mui/material"
import { Form, Formik } from "formik"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BeatLoader } from "react-spinners"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"
import { signInWithFacebook, signInWithGoogle } from "../config/configFirebase"
import { login } from "../store/authSlice"
import { getAllUrlParams } from "../utils"

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const [typeAlert, setTypeAlert] = useState(0)
  const [isBack, setIsBack] = useState(false)

  const initialValues = {
    email: "",
    password: "",
  }
  const loginGoogle = async () => {
    try {
      const rs = await signInWithGoogle()
      const info = rs.user.providerData[0]
      const data = {
        googleId: info.uid,
        email: info.email,
        fullName: info.displayName,
        avatar: info.photoURL,
      }
      console.log(data)
    } catch (error) {
      console.log("error", error)
    }
  }
  const loginFacebook = async () => {
    try {
      const rs = await signInWithFacebook()
      // const info = rs.user.providerData[0];
      console.log(rs)
    } catch (error) {
      console.log("error", error)
    }
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
        isBack && navigate(-1)
      })
      .catch((e) => {
        setOpenAlert(true)
        setTypeAlert(0)
        setLoading(false)
        console.log(e)
      })
  }
  useEffect(() => {
    const params = getAllUrlParams(location.search)
    !!params?.back ? setIsBack(true) : setIsBack(false)
    return () => setIsBack(false)
  }, [location.search])

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
        <button
          onClick={loginFacebook}
          className="btn-primary form__item--facebook"
        >
          Đăng nhập với facebook
        </button>
        <button
          onClick={loginGoogle}
          className="btn-primary form__item--google"
        >
          Đăng nhập với google
        </button>

        <p className="form__switch">
          Bạn chưa có tài khoản? <Link to="/dang-ky">Đăng kí ngay</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
