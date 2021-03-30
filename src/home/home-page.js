import React from "react";
import "./home-page.css";
function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <p>This is the home page.</p>
      <p className="home__p">
        Made by Josh, Janet, and Justin we are all working throughout the
        website and will try to update it whenever we can!
      </p>
      <p>
        This home page is to tell you about the scope of this website you are
        entering.
      </p>
      <p className="home__p">
        This website is for searching games you have played and being able to
        categorize or review on your own play experience. We'll provide games
        you might be interested and provide the information of the developers
        that made it and the game its compatible with.
      </p>
    </main>
  );
}

export default HomePage;
