import React, { useState, useEffect } from "react";
// import showGame from "./props/games-showing";
import mainContent from "./Components/mainContent";
import sidebar from "./Components/sidebar";
import "./props/all-games.css";
import useGameData from "../custom-hooks/use-game-data";
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

  const { gameList, SetGameList } = useState([]);
  const { topGame, SetTopGame } = useState([]);
  const { search, SetSearch } = useState("");

  const GetTopGame = async () => {
    const temp = await fetch(
      `https://api.igdb.com/v4/popularity/`
    ).then((res) => res.json());

    SetTopGame(temp.top.slice(0, 8));
  };

  const HandleSearch = (e) => {
    e.preventDefault();

    //console.log(search);
    FetchGame(search);
  };

  const FetchGame = async (query) => {
    const temp = await fetch(
      `https://api.igdb.com/v4/search/game?q=${query}&order_by=titles&sort-asc&limit=10`
    ).then((res) => res.json());

    SetGameList(temp.results);
  };

  useEffect(() => {
    GetTopGame();
    console.log("Top Game");
  }, []);
  console.log(topGame);

  // console.log(data);

  return (
    <main>
      All Games 🎮🎱🎲🏓
      <h2>The Games we present to you</h2>
      {contents}
      <button onClick={onButtonClick}>{"Next -->"}</button>
      <div className="all-games-page">
        <h2>Game search with the API</h2>
        <div className="">
          <sidebar topGame={topGame} />
          <mainContent
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            gameList={gameList}
          />
        </div>
      </div>
    </main>
  );
}

export default AllGamesPage;
