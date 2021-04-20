import React, { useState } from "react";
import LoginForm from "./login-stuff/LoginForm";
import { auth, provider } from "../data/firebase";
import LoginTest from "./login-stuff/login-test";
//import "./home.css"

function HomePage(props) {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "admin123",
  // };

  // const [user, setUser] = useState({ name: "", email: "" });
  // const [error, setError] = useState("");

  // const signIn = async () => {
  //   try {
  //     const credentials = await auth.signInWithPopup(provider);
  //     console.log("signed in!");
  //     console.log(credentials);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const Logout = () => {
  //   setUser({ name: "", email: "" });
  // };

  return (
    <main className="home">
      <h1>Home</h1>
      <p>This is the home page.</p>
      <p>
        Made by Josh, Janet, and Justin we are all working throughout the
        website and will try to update it whenever we can!
      </p>
      <p>
        This home page is to tell you about the scope of this website you are
        entering.
      </p>
      <p>
        This website is for searching games you have played and being able to
        categorize or review on your own play experience. We'll provide games
        you might be interested and provide the information of the developers
        that made it and the game its compatible with.
      </p>
      <LoginTest user={props.user} />
      {/* <div className="home2">
        {user.email != "" ? (
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
        ) : (
          // <LoginForm Login={Login} error={error} />
          <button onClick={signIn}> Sign In</button>
        )} */}
      {/*         
      </div> */}
    </main>
  );
}

export default HomePage;
