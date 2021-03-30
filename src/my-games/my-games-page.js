import React from "react";
import GameList from "./game-list";
import { useHistory } from "react-router-dom";
import TestPage from "../test/test-page";

function MyGamesPage() {
  const history = useHistory();
  // const data = gameData;

  // console.log();

  // const dataList = data.map((item, i) => {
  //   const {
  //     title,
  //     releaseYear,
  //     genre,
  //     summary,
  //     developers,
  //     platforms,
  //     review,
  //   } = item;

  //   const developerListItems = developers.map((developer, i) => (
  //     <li>{developer}</li>
  //   ));

  //   const platformListItems = platforms.map((platform, i) => (
  //     <li>{platform}</li>
  //   ));

  //   return (
  //     <div>
  //       <h1>
  //         {" "}
  //         {title} ({releaseYear}){" "}
  //       </h1>
  //       <p>Genre: {genre}</p>
  //       <h2>Summary</h2>
  //       <p>{summary}</p>
  //       <p>-----------------------------</p>
  //       <h2>Developers</h2>
  //       <ul>{developerListItems}</ul>
  //       <h2>Platforms</h2>
  //       <ul>{platformListItems}</ul>
  //       <h2>Review</h2>
  //       <q>{review}</q>
  //     </div>
  //   );
  // });
  return (
    <div>
      <h1>My Games 🎲</h1>
      {/* {dataList} */}
      <button onClick={() => history.push(`/add-game`)}>Add New Game</button>
      <GameList />
      {/* <GameListing gameData={gameData} /> */}
      <TestPage />
    </div>
  );
}

export default MyGamesPage;
