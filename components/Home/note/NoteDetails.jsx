import React, { useState } from "react";
import { useRouter } from "next/router";

import Input from "@/components/UI/Input";

import classes from "./NoteDetails.module.css";
import Button from "@/components/UI/Button";

import { FiChevronLeft, FiEdit } from "react-icons/fi";

const NoteDetails = (props) => {
  const [btn, setBtn] = useState(false);

  const router = useRouter();

  const editCtrl = () => {
    setBtn(!btn);
  };
  const gotoNotesPage = () => {
    router.push("/notes");
  };
  return (
    <div className={classes.details}>
      <div className={classes.controls}>
        <Button className={classes.btn} onClick={gotoNotesPage}>
          <FiChevronLeft />
        </Button>
        <Button className={classes.btn} onClick={editCtrl}>
          <FiEdit />
        </Button>
      </div>
      <form className={classes.note}>
        <Input
          input={{
            id: "title",
            type: "text",
          }}
          className={classes.title}
          value={props.title}
        />
        <Input
          input={{
            id: "collection",
            type: "text",
          }}
          className={classes.collect}
          value={props.collection}
        />
        <Input
          input={{
            id: "date",
            type: "text",
          }}
          className={classes.date}
          value={props.date}
        />
        <textarea
          name="content"
          id="content"
          className={classes.content}
          // cols="100"
          // rows="10"
          value={props.content}
        ></textarea>

        {btn && (
          <div className={classes.center}>
            <Button type="submit" className={classes.btnSubmit}>
              Save
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default NoteDetails;
