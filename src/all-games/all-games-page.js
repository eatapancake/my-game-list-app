import React, { useState } from "react";
// import showGame from "./props/games-showing";
import "./props/all-games.css";
import useGameData from "./use-game-data";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import DisplayGames from "./display-games";

function AllGamesPage() {
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, errorMessage, nextPage, data] = useGameData(pageNum);

  const onButtonClick = (event) => {
    setPageNum(pageNum + 1);
  };
  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else contents = <DisplayGames gameData={data} />;

  console.log(data);

  return (
    <main>
      All Games 🎮🎱🎲🏓
      <h2>The Games we present to you</h2>
      {contents}
      <button onClick={onButtonClick}>{"Next -->"}</button>
      {/* <showGame /> */}
    </main>
  );
}

export default AllGamesPage;
