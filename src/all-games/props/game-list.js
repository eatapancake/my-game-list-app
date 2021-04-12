import React from "react";

//  item.id,
//  name: item.name,
//  released: item.released,
//  background_image: item.background_image,
//  rating: item.rating,

function GameList({ id, name, released, background_image, rating }) {
  return (
    <div>
      <h3>
        {" "}
        {name} ({released}){" "}
      </h3>
      <p>Rating: {rating}</p>
      <img id={name} src={background_image} alt={name} width="400" />
    </div>
  );
}

// return <div>{dataList}</div>;

export default GameList;
