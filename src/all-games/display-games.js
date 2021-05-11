import React from "react";
import GameList from "./props/game-list";
import { useHistory } from "react-router-dom";
import "../all-games/props/all-games.css";
import "../my-games/game-list.css";

function DisplayGames({ gameData }) {
  const history = useHistory();
  const gameListItems = gameData.map((item, i) => {
    const { id, slug, name, released, background_image, rating } = item;

    return (
      <div key={id}>
        <p>
          <br></br>
        </p>
        <GameList
          id={id}
          slug={slug}
          name={name}
          released={released}
          background_image={background_image}
          rating={rating}
        />
        <button
          className="all_games__button"
          onClick={() => history.push(`/add-game/${slug}`)}
        >
          + My Games
        </button>{" "}
        <button
          className="all_games__button"
          onClick={() => history.push(`/game-details/${slug}`)}
        >
          Details
        </button>
      </div>
    );
  });

  return <div className="game-container">{gameListItems}</div>;
}

export default DisplayGames;
