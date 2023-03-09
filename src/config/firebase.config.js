import { getApps, initializeApp, } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/performance';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

const auth = getAuth(firebase_app);

export { auth };