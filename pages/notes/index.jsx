import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/src/context/auth-context";

import NoteList from "@/components/Home/note/NoteList";
import Layout from "@/components/Home/Layout";

import firebase_app from "@/src/config/firebase.config";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);

const Notes = (props) => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [router, authUser, loading]);

  return (
    <Layout>
      <NoteList notes={props.notes} />
    </Layout>
  );
};

export async function getStaticProps() {
  // Fetch data from the DataBase
  const colRef = collection(db, "Notes");

  const snapShots = await getDocs(colRef);

  const docs = snapShots.docs.map((doc) => {
    const baseData = doc.data();

    const baseDataValues = baseData.data;

    const data = {
      id: doc.id,
      ...baseDataValues,
    };

    return data;
  });

  if (!docs) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      notes: docs,
    },
    revalidate: 1,
  };
}

export default Notes;
