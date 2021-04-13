import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import { useHistory, useParams } from "react-router-dom";
import ErrorMessage from "../common/error-message";
import LoadingSpinner from "../common/loading-spinner";
import useGameSearch from "../custom-hooks/use-game-search";

function AddGameSearch() {
  let { slug } = useParams();

  const [isLoading, errorMessage, data] = useGameSearch(slug);

  const [category, setCategory] = useState("Playing");
  const [items, setItems] = useLocalStorage("items", []);
  const [success, setSuccess] = useState("");
  const [disable, setDisable] = useState(false);
  let info;

  const [myRating, setMyRating] = useState();
  const history = useHistory();

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
    setDisable(false);
  };
  const onRatingChange = (event) => {
    let num = event.target.value;
    if (num < 1) {
      num = 1;
    }
    if (num > 6) {
      num = 5;
    }
    setMyRating(num);
    setDisable(false);
  };
  const onSave = (event) => {
    addPlayerData();

    for (let i = 0; i < items.length; i++) {
      if (items[i][0].name === data.name) {
        items.splice(i, 1);
      }
    }

    setItems([...items, info]);

    setSuccess(<p>✨You successfully added "{data.name}" to your list!!✨</p>);
    setDisable(true);
  };

  function addPlayerData() {
    info = [
      {
        name: data.name,
        image: data.background_image,
        released: data.released,
        rating: data.rating,
        playerRating: myRating,
        playerCategory: category,
      },
    ];
  }
  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else {
    contents = (
      <div>
        <h1>My Games 🎲</h1>
        <form>
          <h2>Add "{data.name}"</h2>
          <img
            id={data.name}
            src={data.background_image}
            alt={data.name}
            width="400"
          />
          <p>Release Date: {data.released}</p>
          <p>Rating: {data.rating} </p>
          <label>
            Your Rating (1-5):{" "}
            <div>
              <input type="number" onChange={onRatingChange}></input>
            </div>{" "}
          </label>
          <p>
            Currently:{" "}
            <div>
              <input
                type="radio"
                value="Playing"
                onChange={onCategoryChange}
                checked={category === "Playing"}
              />
              Playing{" "}
              <input
                type="radio"
                value="Completed"
                onChange={onCategoryChange}
                checked={category === "Completed"}
              />
              Completed{" "}
              <input
                type="radio"
                value="Not Played"
                onChange={onCategoryChange}
                checked={category === "Not Played"}
              />
              Not Played{" "}
            </div>
          </p>
        </form>
        <button onClick={() => history.push(`/all-games`)}>Cancel</button>
        <button disabled={disable} onClick={onSave}>
          Save
        </button>
        {success}
      </div>
    );
  }

  return <div>{contents}</div>;
}

export default AddGameSearch;
