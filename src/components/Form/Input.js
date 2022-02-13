import { ErrorMessage, Field } from "formik"
import TextError from "./TextError"

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} className="form-control" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Input
