import { ErrorMessage, Field } from "formik"
import TextError from "./TextError"

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor="">{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((option) => (
            <label htmlFor={option.value} key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
                class="input-radio"
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

export default RadioButtons
