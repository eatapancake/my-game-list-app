import React from "react";
// import gameData from "./game-data";
import { useLocalStorage } from "react-use";

function GameList() {
  const [items, setItems, removeItems] = useLocalStorage("items", []);
  let content;

  // console.log(items[0][0].name);

  const dataList = items.map((item, i) => {
    const title = items[i][0].name;
    const releaseYear = items[i][0].released;
    const image = items[i][0].image;
    const rating = Math.round(items[i][0].rating);
    const myRating = items[i][0].playerRating;
    const worldRatingString = "⭐".repeat(rating) + " ◽ ".repeat(5 - rating);
    const ratingString = "⭐".repeat(myRating) + " ◽ ".repeat(5 - myRating);
    const category = items[i][0].playerCategory;

    return (
      <div key={title}>
        <h2>
          {i + 1}. {title}
        </h2>
        <img id={title} src={image} alt={title} width="400"></img>
        <p>Released: {releaseYear}</p>
        <h3>Rating</h3>
        <ul>
          <li>World: {worldRatingString} </li>
          <li>My rating: {ratingString} </li>
        </ul>
        <p>Currently: {category}</p>

        <p>-----------------------------</p>
      </div>
    );
  });

  if (items[0] == null) {
    content = (
      <div>
        {" "}
        <h2>You have no games in your list :(</h2>{" "}
        <p>Please add come back once you add some</p>
      </div>
    );
  } else {
    content = <div>{dataList}</div>;
  }
  return <div>{content}</div>;
}

export default GameList;
