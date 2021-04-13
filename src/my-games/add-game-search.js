import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import { useHistory, useParams } from "react-router-dom";
import ErrorMessage from "../common/error-message";
import LoadingSpinner from "../common/loading-spinner";
import useGameSearch from "../custom-hooks/use-game-search";
import "./game-list.css";

function AddGameSearch() {
  let { slug } = useParams();

  const [isLoading, errorMessage, data] = useGameSearch(slug);

  const [category, setCategory] = useState("Playing");
  const [items, setItems] = useLocalStorage("items", []);
  const [success, setSuccess] = useState("");
  const [disable, setDisable] = useState(false);
  let info;

  const [myRating, setMyRating] = useState(0);
  const history = useHistory();

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
    setDisable(false);
  };
  const onRatingChange = (event) => {
    let num = event.target.value;
    const min = 0;
    const max = 5;
    if (num < min) setMyRating(min);
    else if (num > max) setMyRating(max);
    else {
      // num = Number.parseInt(num);
      num = Math.round(num);
      setMyRating(num);
    }

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
      <div className="game-container ">
        <h1>My Games 🎲</h1>
        <form>
          <h2>Add "{data.name}"</h2>
          <img
            id={data.name}
            src={data.background_image}
            alt={data.name}
            width="600"
          />
          <p>Release Date: {data.released}</p>
          <p>Rating: {data.rating} </p>
          <label>
            Your Rating (0-5):{" "}
            <div>
              <input
                type="number"
                onChange={onRatingChange}
                value={myRating}
              ></input>
            </div>{" "}
          </label>
          <div>
            <p> </p>
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
          </div>
        </form>
        <div>
          {" "}
          <button onClick={() => history.push(`/all-games`)}>
            Cancel
          </button>{" "}
          <button disabled={disable} onClick={onSave}>
            Save
          </button>
        </div>

        {success}
        <p></p>
      </div>
    );
  }

  return <div>{contents}</div>;
}

export default AddGameSearch;
