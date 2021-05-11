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
