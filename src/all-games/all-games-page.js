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
  const [filter, setFilter] = useState("");
  const [isLoading, errorMessage, data] = useGameData(pageNum, order, filter);
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
  const filterOptions = [
    "",
    "action",
    "strategy",
    "rpg",
    "shooter",
    "adventure",
    "puzzle",
    "racing",
    "sports",
  ];

  const myOptions = options.map((item, i) => (
    <option key={i} value={item}>
      {item}
    </option>
  ));
  const myFilter = filterOptions.map((item, i) => (
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
  const onSortChange = (event) => {
    const sortBy = event.target.value;
    setOrder(`-${sortBy}`);
    console.log(order);
  };
  const onFilterChange = (event) => {
    const filterBy = event.target.value;
    setFilter(filterBy);
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
      <label> Sort By: </label>
      <select onChange={onSortChange}>{myOptions}</select>{" "}
      <label>Filter By Genre: </label>{" "}
      <select onChange={onFilterChange}>{myFilter}</select>
      {contents}
      <button className="all_games__button" onClick={onButtonClick}>
        {"Next -->"}
      </button>
    </main>
  );
}

export default AllGamesPage;
