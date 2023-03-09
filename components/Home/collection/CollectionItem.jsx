import React from "react";

import classes from "./CollectionItem.module.css";

import Button from "@/components/UI/Button";
import { TbFolder } from "react-icons/tb";

const CollectionItem = (props) => {
  return (
    <li>
      <Button className={classes.col}>
        <TbFolder style={{ fontSize: "2.5rem", marginTop: "5px" }} />
        <h1>{props.name}</h1>
      </Button>
    </li>
  );
};

export default CollectionItem;
