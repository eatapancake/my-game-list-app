import React from "react";
import GameList from "../my-games/game-list.js";
import { useHistory } from "react-router-dom";
import TestPage from "../test/test-page";

function GamePage() {
    const history = useHistory();


    return (
        <div>
          <h1>test </h1>
          {/* {dataList} */}
          <GameList />
          {/* <GameListing gameData={gameData} /> */}
          <TestPage />
        </div>
      );
}



export default GamePage;