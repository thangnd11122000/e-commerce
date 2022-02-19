import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const ChangeEmail = () => {
  const initialValues = {
    email: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Nhập đúng định dạng email")
      .required("Nhập địa chỉ email"),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="form form__container">
      <div className="form__item">
        <h3>Đổi email</h3>
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
                label="Địa chỉ Email"
                name="currentEmail"
                placeholder="thangndps14667@fpt.edu.vn"
                disabled
              />
              <FormControl
                control="input"
                type="email"
                label="Đỉa chỉ Email mới"
                name="email"
              />

              <button
                type="submit"
                disabled={!formik.isValid}
                className="btn-primary"
              >
                Đổi
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ChangeEmail
