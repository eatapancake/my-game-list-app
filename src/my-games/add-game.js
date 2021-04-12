import React, { useState } from "react";
import { useLocalStorage } from "react-use";
import { useHistory, useParams } from "react-router-dom";
import ErrorMessage from "../common/error-message";
import LoadingSpinner from "../common/loading-spinner";
import useGameItem from "../custom-hooks/use-game-item";

// name: name,
// rating: rating,
// released: released,
// background_image,

function AddGame() {
  let { slug } = useParams();

  if (slug === "") {
    console.log("There is no ID in the URL");
    slug = "grand-theft-auto-v";
  }
  console.log(`This is the ID: ${slug}`);

  const [isLoading, errorMessage, data] = useGameItem(slug);
  // if (data === null) {
  // const name = "o";
  // const rating = "o";
  // const released = "o";
  // const background_image =
  //   "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg";
  // }
  // const { name, rating, released, background_image } = data;

  console.log(data);

  const [category, setCategory] = useState("Playing");
  const [items, setItems, removeItems] = useLocalStorage("items", []);
  let info;
  const [myRating, setMyRating] = useState();
  const [genre, setGenre] = useState("Action-adventure");
  const [summary, setSummary] = useState(
    "Type as much or as little as you'd like"
  );
  const [developer, setDeveloper] = useState("Enter Developers");
  const [platform, setPlatform] = useState("Enter Platform");
  const [review, setReview] = useState(
    "Type as much or as little as you'd like"
  );

  const [numBox, setNumBox] = useState(0);

  const history = useHistory();

  const onCategoryChange = (event) => {
    setCategory(event.target.value);
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
  };
  const onSave = (event) => {
    addPlayerData();
    console.log("==================");
    console.log(info[0]);
    setItems([...items, info]);
    console.log("-----------------------");
    console.log(items[0]);
    console.log(items[0][0].name);
    console.log("--------------------");
  };
  const onSummaryChange = (event) => {
    setSummary(event.target.value);
  };
  const onDeveloperChange = (event) => {
    setDeveloper(event.target.value);
  };
  const onPlatformChange = (event) => {
    setPlatform(event.target.value);
  };

  const onReviewChange = (event) => {
    setReview(event.target.value);
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

          {/* <div>
            <label>
              Summary: <textarea value={summary} onChange={onSummaryChange} />{" "}
            </label>
          </div>

          <div>
            <label>
              Developer:
              <input
                type="text"
                value={developer}
                onChange={onDeveloperChange}
              />
              <button>-</button>
            </label>
          </div>
          <div>
            <label>
              Platform:
              <input type="text" value={platform} onChange={onPlatformChange} />
            </label>
          </div>
          <div>
            <label>
              Your Review:
              <textarea value={review} onChange={onReviewChange} />{" "}
            </label>
          </div> */}
        </form>
        <button onClick={() => history.push(`/all-games`)}>Cancel</button>
        <button onClick={onSave}>Save</button>
      </div>
    );
  }

  return <div>{contents}</div>;
}

export default AddGame;
