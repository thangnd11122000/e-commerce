import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const ForgotPassword = () => {
  const initialValues = {
    email: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("Nhập địa chỉ email"),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="form__container">
      <div className="form__box">
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
      </div>
    </div>
  )
}

export default ForgotPassword
