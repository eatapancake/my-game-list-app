import React, { useState } from 'react';
import LoginForm from './login-stuff/LoginForm';
//import "./home.css"

function HomePage() {
  const adminUser = {
email: "admin@admin.com",
password: "admin123"

  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");


  const Login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password)
    {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else{
      console.log("Details does not match");
      setError();
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""})
  }

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
      <div className="home2">
      {(user.email != "") ? (
        <div className = "welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
  
      </div>
    </main>
  );
  
}

export default HomePage
