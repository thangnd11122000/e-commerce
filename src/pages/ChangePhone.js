import { Form, Formik } from "formik"
import * as Yup from "yup"
import FormControl from "../components/Form/FormControl"

const ChangePhone = () => {
  const initialValues = {
    phone: "",
  }

  const validationSchema = Yup.object({
    phone: Yup.string().required("Nhập số điện thoại"),
  })

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <div className="form__container">
      <div className="form__box">
        <h3>Đổi số điện thoại</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormControl
                control="input"
                type="number"
                label="Số điện thoại"
                name="currentPhone"
                placeholder="0355xxxxx"
                disabled
              />
              <FormControl
                control="input"
                type="number"
                label="Số điện thoại mới"
                name="phone"
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

export default ChangePhone
