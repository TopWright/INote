import React from "react";
import { useRouter } from "next/router";

import Button from "../UI/Button";
import Collection from "./collection/Collection";
import Search from "./search/Search";

import classes from "./MenuBar.module.css";

const MenuBar = () => {
  const router = useRouter();

  const newNoteCtrl = (e) => {
    e.preventDefault();

    router.push("/notes/new-note");
  };

  return (
    <div className={classes.menu}>
      <h1>INOTE</h1>
      <h2>
        Welcome
        <span> User</span>
      </h2>
      <Search />
      <Collection />
      <Button className={classes.button} onClick={newNoteCtrl}>
        Add Note
      </Button>
    </div>
  );
};

export default MenuBar;
