import React from "react";
import GameList from "./game-list";
import { useHistory } from "react-router-dom";
import "./game-list.css";
// import TestPage from "../test/test-page";

function MyGamesPage() {
  const history = useHistory();

  return (
    <div>
      <h1>My Games 🎲</h1>
      <GameList />
      <button
        className="game__button_new"
        onClick={() => history.push(`/all-games`)}
      >
        + New Game
      </button>
    </div>
  );
}

export default MyGamesPage;
