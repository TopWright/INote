import classes from "./Input.module.css";
import ErrorMessage from "./ErrorMsg";

const Input = (props) => {
  // function p() {}

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
        required
      />
      <ErrorMessage content={props.errorMessage} className={classes.error} />
    </div>
  );
};

export default Input;
