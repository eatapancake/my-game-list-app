import React from "react";
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

const genresListItems = genres.map((genre, i) => (
  <div>
    <label>
      <input type="radio" value={genre} checked={false} />
      {genre}
    </label>
  </div>
));
function AddGame() {
  const history = useHistory();
  return (
    <div>
      <h1>My Games 🎲</h1>
      <form>
        <h2>Add new game</h2>
        <div>
          <label>
            Title:
            <input type="text" value="Enter title here" checked={true} />
          </label>
          <label>
            Release Year:
            <input type="text" value="Enter Release Year" checked={true} />
          </label>
        </div>
        <div>
          Genre
          {genresListItems}
        </div>
        <div>
          <label>
            Summary:
            <textarea value="Type as much or as little as you'd like" />{" "}
          </label>
        </div>
        <div>
          <label>
            Developer:
            <input type="text" value="Enter Developers" checked={true} />
          </label>
        </div>
        <div>
          <label>
            Platform:
            <input type="text" value="Enter Platform" checked={true} />
          </label>
        </div>
        <div>
          <label>
            Your Review:
            <textarea value="Type as much or as little as you'd like" />{" "}
          </label>
        </div>
      </form>
      <button onClick={() => history.push(`/my-games`)}>Cancel</button>
      <button>Save</button>
    </div>
  );
}

export default AddGame;
