import React from "react";
import gameData from "./game-data";

function GameList() {
  const data = gameData;
  // const {
  //   title,
  //   releaseYear,
  //   genre,
  //   summary,
  //   developers,
  //   platforms,
  //   platformListItems,
  //   review,
  // } = data;

  console.log();

  const dataList = data.map((item, i) => {
    const {
      title,
      releaseYear,
      genre,
      summary,
      // developers,
      // platforms,
      review,
    } = item;

    // const platformListItems = platforms.map((platform, i) => (
    //   <li>{platform}</li>
    // ));
    // const developerListItems = developers.map((developer, i) => (
    //   <li>{developer}</li>
    // ));

    return (
      <div>
        <h1>
          {" "}
          {title} ({releaseYear}){" "}
        </h1>
        <p>Genre: {genre}</p>
        <h2>Summary</h2>
        <p>{summary}</p>
        <p>-----------------------------</p>
        <h2>Developers</h2>
        {/* <ul>
          {developers.map((item, i) => {
            return <li key={i}>{item} </li>;
          })}
        </ul> */}
        <h2>Platforms</h2>
        {/* <ul>{platformListItems}</ul> */}
        <h2>Review</h2>
        <q>{review}</q>
      </div>
    );
  });
  return <div>{dataList}</div>;
}

export default GameList;
