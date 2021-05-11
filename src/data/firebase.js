import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
if (!firebaseConfig.apiKey)
  throw new Error("Missing Firebase credential: apiKey");
if (!firebaseConfig.authDomain)
  throw new Error("Missing Firebase credential: authDomain");
if (!firebaseConfig.projectId)
  throw new Error("Missing Firebase credential: projectId");
if (!firebaseConfig.storageBucket)
  throw new Error("Missing Firebase credential: storageBucket");
if (!firebaseConfig.messagingSenderId)
  throw new Error("Missing Firebase credential: messagingSenderId");
if (!firebaseConfig.appId)
  throw new Error("Missing Firebase credential: appId");
// if (!firebaseConfig.measurementId)
//   throw new Error("Missing Firebase credential: measurementId");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, firebase };
