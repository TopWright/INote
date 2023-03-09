import React from "react";

import classes from "./Search.module.css";

import Input from "@/components/UI/Input";

const Search = () => {
  return (
    <Input
      //   label="Search"
      input={{
        id: "search",
        type: "text",
        placeholder: "Search Note",
      }}
      className={classes.input}
    />
  );
};

export default Search;
