import React from "react";
// import gameData from "./game-data";
import { useLocalStorage } from "react-use";
import { Delete } from "@material-ui/icons";

import "./game-list.css";

function GameList() {
  const [items, setItems] = useLocalStorage("items", []);
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

    console.log(myRating);

    const onDeleteClick = () => {
      items.splice(i, 1);
      const oops = items;
      setItems(oops);
    };

    return (
      <li className="" key={title}>
        <h2 className="">
          {i + 1}. {title}
        </h2>
        <img id={title} src={image} alt={title} height="250"></img>
        <p>Released: {releaseYear}</p>
        <h3>Rating</h3>
        <ul>
          <li>World: {worldRatingString} </li>
          <li>My rating: {ratingString} </li>
        </ul>
        <p>Currently: {category}</p>
        <button className="game__button" onClick={onDeleteClick}>
          <Delete />
        </button>

        <p>-----------------------------</p>
      </li>
    );
  });

  if (items[0] == null) {
    content = (
      <div>
        {" "}
        <h2>You have no games in your list :(</h2>{" "}
        <p>Please come back once you add some</p>
      </div>
    );
  } else {
    content = <ul className="game-list">{dataList}</ul>;
  }
  return <div className="game-container">{content}</div>;
}

export default GameList;
