import firebase_app from "../config/firebase.config";

import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function addData(data, name) {
    try {
        await addDoc(collection(db, name), {
            data
        });
        // console.log("Document written with ID: ", docRef);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}