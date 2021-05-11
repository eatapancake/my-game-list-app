import React from "react";
import { useState } from "react";
import { useLocalStorage } from "react-use";
import { Delete } from "@material-ui/icons";

import "./game-list.css";
import useFsAllGames from "../custom-hooks/use-fs-all-games";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";

function GameList(props) {
  const userId = props.user.uid;
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [items, setItems] = useLocalStorage("items", []);

  const [games, isLoading2, errorMessage_2] = useFsAllGames(userId);
  // console.log(games.doc);
  // let content;
  let contents;
  // let gameList;

  // try {
  const gameList = games.map((gameDoc, i) => {
    const gameData = gameDoc.data();
    const title = gameData.name;
    const releaseYear = gameData.released;
    const image = gameData.background_image;
    let rating = Math.round(gameData.rating);
    const myRating = gameData.myRating;
    const category = gameData.category;
    if (rating > 5) {
      rating = 5;
    }
    const worldRatingString = "⭐".repeat(rating) + " ◽ ".repeat(5 - rating);
    const ratingString = "⭐".repeat(myRating) + " ◽ ".repeat(5 - myRating);

    const onDeleteClick = () => {
      items.splice(i, 1);
      const oops = items;
      setItems(oops);
    };
    return (
      <li className="" key={i}>
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
  // } catch {}

  // const dataList = items.map((item, i) => {
  //   const title = items[i][0].name;
  //   const releaseYear = items[i][0].released;
  //   const image = items[i][0].image;
  //   const rating = Math.round(items[i][0].rating);
  //   const myRating = items[i][0].playerRating;
  //   const worldRatingString = "⭐".repeat(rating) + " ◽ ".repeat(5 - rating);
  //   const ratingString = "⭐".repeat(myRating) + " ◽ ".repeat(5 - myRating);
  //   const category = items[i][0].playerCategory;

  //   // console.log(myRating);

  //   const onDeleteClick = () => {
  //     items.splice(i, 1);
  //     const oops = items;
  //     setItems(oops);
  //   };

  //   return (
  //     <li className="" key={title}>
  //       <h2 className="">
  //         {i + 1}. {title}
  //       </h2>
  //       <img id={title} src={image} alt={title} height="250"></img>
  //       <p>Released: {releaseYear}</p>
  //       <h3>Rating</h3>
  //       <ul>
  //         <li>World: {worldRatingString} </li>
  //         <li>My rating: {ratingString} </li>
  //       </ul>
  //       <p>Currently: {category}</p>
  //       <button className="game__button" onClick={onDeleteClick}>
  //         <Delete />
  //       </button>

  //       <p>-----------------------------</p>
  //     </li>
  //   );
  // });

  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else contents = <ul className="game-list">{gameList}</ul>;

  // if (items[0] == null) {
  //   content = (
  //     <div>
  //       {" "}
  //       <h2>You have no games in your list :(</h2>{" "}
  //       <p>Please come back once you add some</p>
  //     </div>
  //   );
  // } else {
  //   content = <ul className="game-list">{gameList}</ul>;
  // }
  return <div className="game-container">{contents}</div>;
}

export default GameList;
