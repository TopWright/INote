import React from "react";

import classes from "./Layout.module.css";

import MenuBar from "./MenuBar";

const Layout = (props) => {
  return (
    <main className={ classes.layout }>
      <MenuBar />
      <div className={classes.main}>{props.children}</div>
    </main>
  );
};

export default Layout;
