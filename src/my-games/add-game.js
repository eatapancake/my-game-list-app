import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const genres = [
  "Action-adventure",
  "Multiplayer online battle arena (MOBA)",
  "Puzzlers and party games",
  "Platformer",
  "Real-time strategy (RTS)",
  "Role-playing (RPG, ARPG, and More)",
  "Sandbox",
  "Shooters (FPS and TPS)",
  "Simulation and sports",
  "Survival and horror",
];

function AddGame() {
  const [title, setTitle] = useState("Enter Game Title");
  const [year, setYear] = useState(2000);
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

  const OnTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const OnYearChange = (event) => {
    setYear(event.target.value);
  };
  const onGenreChange = (event) => {
    setGenre(event.target.value);
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

  const genresListItems = genres.map((item, i) => (
    <div>
      <label>
        <input
          type="radio"
          value={item}
          onChange={onGenreChange}
          id={i}
          key={i}
          checked={genre === item}
        />
        {item}
      </label>
    </div>
  ));

  let maxBoxes = 7;
  // function Boxes() {
  //   for (let i = 0; i < numBox; i++) {
  //     return (
  //       <input key={i} type="text" value="Enter Developers" checked={true} />
  //     );
  //   }
  // }
  const IncrementBox = () => {
    setNumBox(numBox + 1);
  };

  return (
    <div>
      <h1>My Games 🎲</h1>
      <form>
        <h2>Add new game</h2>
        <div>
          <label>
            Title: <input type="text" value={title} onChange={OnTitleChange} />{" "}
          </label>
          <label>
            Release Year:{"  "}
            <input type="number" value={year} onChange={OnYearChange} />
          </label>
        </div>
        <div>
          Genre
          {genresListItems}
        </div>
        <div>
          <label>
            Summary: <textarea value={summary} onChange={onSummaryChange} />{" "}
          </label>
        </div>

        <div>
          <label>
            Developer:
            <input type="text" value={developer} onChange={onDeveloperChange} />
            <button onClick={IncrementBox}>{numBox}+</button>
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
        </div>
      </form>
      <button onClick={() => history.push(`/my-games`)}>Cancel</button>
      <button>Save</button>
    </div>
  );
}

export default AddGame;
