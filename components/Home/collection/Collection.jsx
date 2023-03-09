import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Collection.module.css";
import { TbFolderPlus } from "react-icons/tb";

import Button from "@/components/UI/Button";
import CollectionForm from "./CollectionForm";
import CollectionList from "./CollectionList";

import { UiActions } from "@/src/store/UISlice";

const Collection = () => {
  const [collection, setCollection] = useState([]);
  const dispatch = useDispatch();

  const showCollection = useSelector((state) => state.UI.collection);
  const showCollectionInput = useSelector((state) => state.UI.inputCollection);
  const showCollectionStatus = useSelector((state) => state.UI.status);

  const toggleCollectionCtrl = (e) => {
    dispatch(UiActions.toggle());
  };


  return (
    <details open className={classes.collection}>
      <summary className={classes.box}>
        <h1>Collections</h1>
        <Button className={classes.button} onClick={toggleCollectionCtrl}>
          <TbFolderPlus />
        </Button>
      </summary>
      <div className={classes.controls}>
        {showCollectionInput && (
          <CollectionForm />
        )}
        <span>{showCollectionStatus}</span>
        {showCollection && <CollectionList collections={collection} />}
      </div>
    </details>
  );
};

export default Collection;
