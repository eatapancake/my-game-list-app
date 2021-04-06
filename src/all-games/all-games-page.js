import React from "react";
// import showGame from "./props/games-showing";
import "./props/all-games.css";
import useGameData from "./use-game-data";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import DisplayGames from "./display-games";

function AllGamesPage() {
  const [isLoading, errorMessage, nextPage, data] = useGameData();

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
      {/* <showGame /> */}
    </main>
  );
}

export default AllGamesPage;
