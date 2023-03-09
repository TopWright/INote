import React from "react";

import CollectionItem from "./CollectionItem";

const CollectionList = (props) => {
  return (
    <ul>
      {props.collections.map((collection) => (
        <CollectionItem
          key={collection.id}
          id={collection.id}
          name={collection.name}
        />
      ))}
    </ul>
  );
};

export default CollectionList;
