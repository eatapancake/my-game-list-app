import React from "react";
import GameList from "./props/game-list";

//  item.id,
//  name: item.name,
//  released: item.released,
//  background_image: item.background_image,
//  rating: item.rating,

function DisplayGames({ gameData }) {
  const gameListItems = gameData.map((item, i) => {
    const { id, name, released, background_image, rating } = item;

    return (
      <div>
        <GameList
          key={id}
          id={id}
          name={name}
          released={released}
          background_image={background_image}
          rating={rating}
        />
        <button>Add +</button>
      </div>
    );
  });

  return <div>{gameListItems}</div>;
}

export default DisplayGames;
