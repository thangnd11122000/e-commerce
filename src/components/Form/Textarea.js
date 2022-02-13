import { ErrorMessage, Field } from "formik"
import TextError from "./TextError"

const Textarea = ({ label, name, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        as="textarea"
        id={name}
        name={name}
        {...rest}
        className="input-textarea"
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Textarea
