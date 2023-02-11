import React from "react";
import classes from "./ErrorMsg.module.css";

const ErrorMessage = (props) => {
  return (
    <div className={props.className || classes.error}>{props.content}</div>
  );
};

export default ErrorMessage;
