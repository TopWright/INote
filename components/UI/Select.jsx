import React from "react";

import classes from "./Select.module.css";

const Select = (props) => {
  return (
    <select className={classes.select} onChange={props.onChange} id={props.id}>
      <option value="" hidden>
        Collection
      </option>
      <option value="none">None</option>
      {props.select.map((opt) => (
        <option key={opt.id} value={opt.value}>
          {opt.value} {props.value}
        </option>
      ))}
    </select>
  );
};

export default Select;
