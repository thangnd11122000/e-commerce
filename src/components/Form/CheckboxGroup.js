import { ErrorMessage, Field } from "formik"
import TextError from "./TextError"

const CheckboxGroup = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((option) => (
            <label htmlFor={option.value} key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
                className="input-checkbox"
              />
              {option.key}
            </label>
          ))
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CheckboxGroup
