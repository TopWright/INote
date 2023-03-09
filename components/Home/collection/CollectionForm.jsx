import React from "react";
import { useDispatch } from "react-redux";

import addData from "@/src/firebase/fireStore";

import classes from "./CollectionForm.module.css";
import { TbFolderPlus, TbFolder } from "react-icons/tb";

import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import useInput from "@/hooks/useInput";
import { UiActions } from "@/src/store/UISlice";

const CollectionForm = (props) => {
  const dispatch = useDispatch();

  const { value: name, inputChangeCtrl: nameChangeCtrl } = useInput(
    (value) => value.trim() !== ""
  );

  const formSubmitCtrl = async (e) => {
    e.preventDefault();

    try {
      await addData(name, "Collections");
    } catch (e) {
      console.log(e);
    }

    dispatch(UiActions.switch());
  };

  return (
    <form className={classes.form} onSubmit={formSubmitCtrl}>
      <TbFolder style={{ fontSize: "2.5rem", marginTop: "5px" }} />
      <Input
        input={{
          id: "search",
          type: "text",
          placeholder: "Search Note",
        }}
        className={classes.collectionInput}
        onChange={nameChangeCtrl}
        value={name}
      />
      <Button type="submit" className={classes.button}>
        <TbFolderPlus />
      </Button>
    </form>
  );
};

export default CollectionForm;
