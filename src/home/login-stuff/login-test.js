import React, { useState } from "react";
import { provider, auth, db } from "../../data/firebase";
import ErrorMessage from "../../common/error-message";

function LoginTest(props) {
  const { user } = props;
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      setErrorMessage("Something went wrong, please try again");
      console.error(error);
    }
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      await auth.signOut();
    } catch (error) {
      setErrorMessage("Something went wrong, please try again");
    }
    setIsLoading(false);
  };

  // const signInEx1 = async () => {

  //   setIsLoading(true);
  //   setErrorMessage(null);

  //   var docRef = db.collection("users").doc("5br0JLUGBUDTzUAeCQCz");
  //   const displayName = "5br0JLUGBUDTzUAeCQCz";

  //   docRef.get().then((doc) => {
  //     if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //     } else {
  //         console.log("No such document!");
  //     }

  // }).catch((error) => {
  //     console.log("Error getting document:", error);
  // });
  // setIsLoading(false);
  // };

  let contents;
  if (user) {
    const { displayName} = user;
    contents = (
      <>
        <p>Welcome back, {displayName}! You can log out below</p>
        <button onClick={signOut}>
          {" "}
          {isLoading ? "Logging Out..." : "Log Out"}
        </button>
      </>
    );
  } else {
    contents = (
      <>
        <p>
          You can log in or create an account by linking your Google Account.
          Follow the instructions in the pop up window.{" "}
        </p>
        <button onClick={signIn} disabled={isLoading}>
          {isLoading ? "Logging In..." : "Log In"}
        </button>
        {/* <button onClick= {signInEx1} disabled={isLoading}>
          {isLoading ? "Logging In..." : "Log In as example person 1"}
        </button> */}
      </>
    );
  }
  return (
    <div>
      <div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {contents}
      </div>
    </div>
  );
}

export default LoginTest;
