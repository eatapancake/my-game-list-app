import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const firebaseConfig =
{
    apiKey: "AIzaSyAdR92rK3dPDQbYkBsOA8c6HVhV-AM_I4M",
    authDomain: "team4-cf1de.firebaseapp.com",
    projectId: "team4-cf1de",
    storageBucket: "team4-cf1de.appspot.com",
    messagingSenderId: "20400761487",
    appId: "1:20400761487:web:ddb808587fb1a499015efa",
    measurementId: "G-EGVZRHM8V7"

};
if(!firebaseConfig.apiKey) throw new Error("Missing Firebase credential: apiKey");
if(!firebaseConfig.authDomain) throw new Error("Missing Firebase credential: authDomain");
if(!firebaseConfig.projectId) throw new Error("Missing Firebase credential: projectId");
if(!firebaseConfig.storageBucket) throw new Error("Missing Firebase credential: storageBucket");
if(!firebaseConfig.measurementId) throw new Error("Missing Firebase credential: messagingSenderId");
if(!firebaseConfig.appId) throw new Error("Missing Firebase credential: appId");
if(!firebaseConfig.measurementId) throw new Error("Missing Firebase credential: measurementId");

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider, firebase};