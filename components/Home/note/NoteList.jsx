import React from "react";

import classes from "./NoteList.module.css";

import NoteItem from "./NoteItem";

const NoteList = (props) => {
  return (
    <ul className={classes.list}>
      {props.notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          collection={note.collection}
          date={note.date}
        />
      ))}
    </ul>
  );
};

export default NoteList;
