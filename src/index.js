import React from "react";
import ReactDOM from "react-dom";
import App from "./main-app";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
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

console.log(db);
