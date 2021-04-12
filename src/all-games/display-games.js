import React from "react";
import GameList from "./props/game-list";
import { useHistory } from "react-router-dom";
import AddGame from "../my-games/add-game";

//  item.id,
//  name: item.name,
//  released: item.released,
//  background_image: item.background_image,
//  rating: item.rating,

function DisplayGames({ gameData }) {
  const history = useHistory();
  const gameListItems = gameData.map((item, i) => {
    const { id, slug, name, released, background_image, rating } = item;

    return (
      <div key={id}>
        <GameList
          id={id}
          slug={slug}
          name={name}
          released={released}
          background_image={background_image}
          rating={rating}
        />
        <button onClick={() => history.push(`/add-game/${slug}`)}>
          + My Games
        </button>
        <button onClick={() => history.push(`/game-details/${slug}`)}>
          Details
        </button>
      </div>
    );
  });

  return <div>{gameListItems}</div>;
}

export default DisplayGames;
