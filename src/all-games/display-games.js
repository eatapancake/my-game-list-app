import React from "react";
import GameList from "./props/game-list";

//  item.id,
//  name: item.name,
//  released: item.released,
//  background_image: item.background_image,
//  rating: item.rating,

function DisplayGames({ gameData }) {
  const gameItem = gameData[0];
  const { id, name, released, background_image, rating } = gameItem;
  console.log(name);

  return (
    <div>
      <GameList
        // id={id}
        name={name}
        // released={released}
        // background_image={background_image}
        // rating={rating}
      />{" "}
    </div>
  );
}

export default DisplayGames;
