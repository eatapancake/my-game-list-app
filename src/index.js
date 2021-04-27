import React from "react";
import ReactDOM from "react-dom";
import App from "./main-app";
import {db} from "./data/firebase";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

async function readAllUsers() {
  try{
    const snapshot = await db.collection("users").get();

    console.log(`Found ${snapshot.size}x users.`);
    const docs = snapshot.docs;
    docs.forEach((docSnapshot) => {
      console.log(docSnapshot.id, docSnapshot.data());
    });
  } catch (err) {
    console.error(err);
  }
}
/* 
async function readAllusers(){
  try{
    const collectionRef = db.collection("users");
    const getPromise = collectionRef.get();
    const snapshot = await getPromise;
    
    console.log(`Found ${snapshot.size}x user(s).`);

  } catch (err){
    console.error(err);
  }

  }
  readAllusers();

 */
readAllUsers();
console.log(db);
