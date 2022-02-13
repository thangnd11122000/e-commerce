import { ErrorMessage, Field } from "formik"
import DataView from "react-datepicker"
import TextError from "./TextError"
import "react-datepicker/dist/react-datepicker.css"

const DatePicker = ({ label, name, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DataView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              className="form-control"
            />
          )
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default DatePicker
