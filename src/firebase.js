import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// initialize app
const firebaseApp = initializeApp(firebaseConfig);

// initialize db
const db = getFirestore(firebaseApp);

// initialize Auth
const auth = getAuth(firebaseApp);

export { db, auth };
