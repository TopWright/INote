import React from "react";

import NotePad from "./NotePad";

import Input from "../UI/Input";
import Button from "../UI/Button";

import classes from "./DashBoard.module.css";

const DashBoard = () => {
  return (
    <section className={classes.dash}>
      <div className={classes.menu}>
        <h1>INOTE</h1>
        <h2>
          Welcome
          <span> User</span>
        </h2>
        <Input
          //   label="Search"
          input={{
            id: "search",
            type: "text",
            placeholder: "Search Note",
          }}
          className={classes.input}
        />
        <details open className={classes.collection}>
          <summary className={classes.box}>COLLECTIONS</summary>
          <div className={classes.controls}>
            {/* <Button className={classes.button}> Add Note</Button>
            <Button className={classes.button}> Add Note</Button>
            <Button className={classes.button}> Add Note</Button>
            <Button className={classes.button}> Add Note</Button> */}
            <div> No Collection</div>
            <Button className={classes.button}> Create Collection</Button>
          </div>
        </details>
        {/* <Button className={classes.button}> All Notes</Button> */}
        <Button className={classes.button}> Add Note</Button>
      </div>

      <NotePad />
    </section>
  );
};

export default DashBoard;
