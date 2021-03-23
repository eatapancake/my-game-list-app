import React, { useState } from "react";

function GameItem() {
  const [favorite, setFavorite] = useState(true);

  const title = "Animal Crossing: New Horizon";
  const releaseYear = 2020;
  //   const favorite = false;
  const genre = "Simulation and sports";
  const summary =
    "In New Horizon, the player arrives in a deserted island and is given the chance to turn it into paradise. Together with Tom Nook and the rest of the residents, the player gets to craft, fish, and dig their way into transforming their island.";
  const platforms = ["Nintendo Switch"];
  const developers = ["Nintendo EPD"];
  const review = "Wonderful game! Basically a masterpiece! ";

  let star = "";
  let favButtonText = "Add favorite";

  if (favorite) {
    star = "⭐";
    favButtonText = "Remove favorite";
  }

  const developerListItems = developers.map((developer, i) => (
    <li>{developer}</li>
  ));

  const platformListItems = platforms.map((platform, i) => <li>{platform}</li>);

  function onFavoriteChange() {
    if (favorite === true) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }

  return (
    <div>
      <h1>
        {" "}
        {title} ({releaseYear}) {star}
      </h1>
      <button onClick={onFavoriteChange}>{favButtonText}</button>
      <p>Genre: {genre}</p>
      <h2>Summary</h2>
      <p>{summary}</p>
      <p>-----------------------------</p>
      <h2>Developers</h2>
      <ul>{developerListItems}</ul>
      <h2>Platforms</h2>
      <ul>{platformListItems}</ul>
      <h2>Review</h2>
      <q>{review}</q>
    </div>
  );
}

export default GameItem;
