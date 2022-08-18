import { Alert, Snackbar } from "@mui/material"
import axios from "axios"
import { Form, Formik } from "formik"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const Register = () => {
  let navigate = useNavigate()
  const [errors, setErrors] = useState(null)
  const [openAlert, setOpenAlert] = useState(false)
  const [typeAlert, setTypeAlert] = useState(0)
  const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  }

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Nhập họ và tên"),
    email: Yup.string()
      .email("Nhập đúng định dạng email")
      .required("Nhập email"),
    phone: Yup.string()
      .required("Nhập số điện thoại")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Số điện thoại không chính xác"
      ),
    password: Yup.string()
      .min(6, "Nhập ít nhất 6 kí tự")
      .required("Nhập mật khẩu"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Nhập mật khẩu không giống nhau")
      .required("Nhập xác thực mật khẩu"),
  })

  const onSubmit = (values) => {
    setErrors(null)
    try {
      axios({
        method: "POST",
        url: "/api/auth/register",
        data: values,
        headers: {
          Accept: "application/json",
        },
      })
        .then(() => {
          setOpenAlert(true)
          setTypeAlert(1)
          setTimeout(() => navigate("/login"), 3000)
        })
        .catch((error) => {
          setOpenAlert(true)
          setTypeAlert(0)
          setErrors(error.response.data.errors)
        })
    } catch (error) {
      console.log(error)
    }
  }

  const renderErrors = () => {
    return errors ? (
      Object.keys(errors).map((key, index) => (
        <p key={index} style={{ margin: "5px 0", color: "red" }}>
          {errors[key][0]}
        </p>
      ))
    ) : (
      <></>
    )
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
            {typeAlert ? "Đăng kí thành công" : "Đăng kí thất bại"}
          </Alert>
        </Snackbar>
        <h3>Đăng kí</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form onChange={() => setErrors(null)}>
              <FormControl
                control="input"
                type="text"
                label="Họ và tên"
                name="fullname"
              />
              <FormControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormControl
                control="input"
                type="text"
                label="Số điện thoại"
                name="phone"
              />
              <FormControl
                control="input"
                type="password"
                label="Mật khẩu"
                name="password"
                autoComplete="on"
              />
              <FormControl
                control="input"
                type="password"
                label="Xác thực mật khẩu"
                name="password_confirmation"
                autoComplete="on"
              />
              {renderErrors()}
              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn-primary"
              >
                Đăng kí
              </button>
            </Form>
          )}
        </Formik>
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
          Bạn đã có tài khoản? <Link to="/dang-nhap">Đăng nhập ngay</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
