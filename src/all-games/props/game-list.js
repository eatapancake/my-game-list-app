import React from "react";

//  item.id,
//  name: item.name,
//  released: item.released,
//  background_image: item.background_image,
//  rating: item.rating,

function GameList({ name }) {
  // const data = gameData;

  // const { id, title, released, background_image, rating } = props;

  // console.log(data);

  // const dataList = data.map((item, i) => {
  //   const { id, title, released, background_image, rating } = item;
  // console.log(id);
  console.log(name);

  return (
    <div>
      {/* <h1>
        {" "}
        {title} ({released}){" "}
      </h1>
      <p>Rating: {rating}</p> */}
    </div>
  );
}

// return <div>{dataList}</div>;

export default GameList;
