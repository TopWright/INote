import React from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./NotePad.module.css";

const NotePad = () => {
  return (
    <form className={classes.note}>
      <Input //   label="Search"
        input={{
          id: "title",
          type: "text",
          placeholder: "Title",
        }}
        className={classes.title}
      />
      <Input //   label="Search"
        input={{
          id: "date",
          type: "date",
        }}
      />
      <Input //   label="Search"
        input={{
          id: "collection",
          type: "text",
          placeholder: "collection",
        }}
      />

      <textarea
        name="content"
        id="content"
        // cols="100"
        // rows="10"
        placeholder="Start Writing..."
      ></textarea>

      <div className={classes.control}>
        <Button type="submit" className={classes.btn}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NotePad;
