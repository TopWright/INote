import React from "react";

import Layout from "@/components/Home/Layout";
import NoteDetails from "@/components/Home/note/NoteDetails";

import firebase_app from "@/src/config/firebase.config";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
} from "firebase/firestore";

const db = getFirestore(firebase_app);

const Notes = (props) => {
  return (
    <Layout>
      <NoteDetails
        title={props.noteData.title}
        date={props.noteData.date}
        collection={props.noteData.collection}
        content={props.noteData.content}
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const snapshot = await getDocs(collection(db, "Notes"));
  const paths = snapshot.docs.map((doc) => {
    return {
      params: { noteId: doc.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const noteId = context.params.noteId;

  const docRef = doc(db, "Notes", noteId);
  const docSnap = await getDoc(docRef);

  const data = docSnap.data();

  const noteData = data.data;

  return {
    props: { noteData },
  };
};
// JSON.stringify(docSnap.data()) || null;

export default Notes;
