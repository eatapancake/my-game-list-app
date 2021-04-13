import React, { useState } from "react";
// import {useEffect} from "react"
// import showGame from "./props/games-showing";
// import mainContent from "./Components/mainContent";
// import sidebar from "./Components/sidebar";
import "./props/all-games.css";
import useGameData from "../custom-hooks/use-game-data";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import DisplayGames from "./display-games";
import { useHistory } from "react-router-dom";

function AllGamesPage() {
  const [userSearch, setUserSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, errorMessage, data] = useGameData(pageNum);
  const history = useHistory();

  const onButtonClick = (event) => {
    setPageNum(pageNum + 1);
  };
  const onSearchChange = (event) => {
    setUserSearch(event.target.value);
    console.log(userSearch);
  };
  const onSearchButtonClick = () =>
    history.push(`/add-game-search/${userSearch}`);

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else contents = <DisplayGames gameData={data} />;
  return (
    <main>
      <h1>All Games 🎮</h1>
      <div className="all_games__container ">
        {" "}
        <label>Enter Game Title: </label>{" "}
        <input onChange={onSearchChange} type="text" value={userSearch}></input>
        <button className="all_games__button" onClick={onSearchButtonClick}>
          Search
        </button>{" "}
      </div>

      {contents}
      <button className="all_games__button" onClick={onButtonClick}>
        {"Next -->"}
      </button>
      {/* <div className="all-games-page"> */}
      {/* <h2>Game search with the API</h2>
        <div className="">
          <sidebar topGame={topGame} />
          <mainContent
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            gameList={gameList}
          />
        </div> */}
      {/* </div> */}
    </main>
  );
}

export default AllGamesPage;
