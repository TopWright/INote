import React from "react";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { noteActions } from "@/src/store/noteSlice";

import classes from "./NoteItem.module.css";

import Button from "@/components/UI/Button";

import { TbTrash } from "react-icons/tb";

const NoteItem = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { title, date, collection, content, id } = props;

  dispatch(
    noteActions.addNote({
      id,
      title,
      date,
      collection,
      content,
    })
  );

  const goToDetailsPage = () => {
    router.push("/notes/" + id);
  };

  return (
    <Button className={classes.control} onClick={goToDetailsPage}>
      <div className={classes.delete}>
        <TbTrash
          style={{
            fontSize: "2.5rem",
            transition: "ease-in-out",
          }}
        />
      </div>
      <li className={classes.noteItem}>
        <h1>{title.substring(0, 15).concat("...")}</h1>
        <p>{content.substring(0, 70).concat("...")}</p>
        <h3>{collection}</h3>
        <div>{date}</div>
      </li>
    </Button>
  );
};

export default NoteItem;
