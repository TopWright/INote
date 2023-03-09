import { forwardRef } from "react";

import classes from "./Input.module.css";
import ErrorMessage from "./ErrorMsg";

const Input = forwardRef(function Input(props, ref) {
  return (
    <div className={classes.input || props.className}>
      <label htmlFor={props.input.id} className={props.labelClass}>
        {props.label}
      </label>
      <input
        {...props.input}
        className={props.inputClass}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        ref={ref}
        required
      />
      <ErrorMessage content={props.errorMessage} className={classes.error} />
    </div>
  );
});

export default Input;
