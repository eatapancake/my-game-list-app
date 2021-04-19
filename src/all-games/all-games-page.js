import React, { useState } from "react";
import "./props/all-games.css";
import useGameData from "../custom-hooks/use-game-data";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import DisplayGames from "./display-games";
import { useHistory } from "react-router-dom";

function AllGamesPage() {
  const [userSearch, setUserSearch] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [order, setOrder] = useState("bloop");
  const [isLoading, errorMessage, data] = useGameData(pageNum, order);
  const history = useHistory();

  const options = [
    "added",
    "name",
    "released",

    "created",
    "updated",
    "rating",
    "metacritic",
  ];

  const myOptions = options.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));
  const onButtonClick = (event) => {
    setPageNum(pageNum + 1);
  };
  const onSearchChange = (event) => {
    setUserSearch(event.target.value);
    console.log(userSearch);
  };
  const onSearchButtonClick = () =>
    history.push(`/add-game-search/${userSearch}`);
  const onFilterChange = (event) => {
    const sortBy = event.target.value;

    setOrder(`-${sortBy}`);
    console.log(order);
  };

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
      <label>Sort By: </label>

      <select onChange={onFilterChange}>{myOptions}</select>
      {contents}
      <button className="all_games__button" onClick={onButtonClick}>
        {"Next -->"}
      </button>
    </main>
  );
}

export default AllGamesPage;
