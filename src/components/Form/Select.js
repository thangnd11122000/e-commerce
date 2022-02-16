import { ErrorMessage, Field } from "formik"
import TextError from "./TextError"

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest} className="form-control">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select
