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
        </div>
        <div>
          Genre
          {genresListItems}
        </div>
        <div>
          <label>
            Rating:
            <input type="text" value="name" checked={false} />
          </label>
        </div>
        <div>
          <label>
            Your Review:
            <textarea value="Type as much or as little as you'd like" />{" "}
          </label>
        </div>
      </form>
    </div>
  );
}

export default AddGame;
