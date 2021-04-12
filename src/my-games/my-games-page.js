import React from "react";
import GameList from "./game-list";
import { useHistory } from "react-router-dom";
import TestPage from "../test/test-page";

function MyGamesPage() {
  const history = useHistory();

  return (
    <div>
      <h1>My Games 🎲</h1>
      <button onClick={() => history.push(`/all-games`)}>Add New Game</button>
      <GameList />
    </div>
  );
}

export default MyGamesPage;
