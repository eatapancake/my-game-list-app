import { useEffect } from "react";
// import axios from "axios";

//API key = df69e0f535954c1897d3d33f2c4169bf

function GameFetch() {
  let headers = new Headers({
    "User-Agent": "Team 4's App Project",
  });

  useEffect(() => {
    async function main() {
      console.log("Fetch initiated..! 🦴");
      try {
        // const url =
        //   "https://www.giantbomb.com/api/game/3030-79087/?api_key=dc2056c71aa4a38a1452d90cfca7194e4dd23b31";
        // const response = await fetch(url, { mode: `no-cors` });
        // const payload = "";
        const url2 = "https://api.rawg.io/api/games";
        const response = await fetch(url2, { method: `GET`, headers: headers });
        const json = await response.json();
        console.log(json);
      } catch (err) {
        console.log("An error has occured!! D:");
        console.error(err);
      }
    }
    main();
  });
  return (
    <div>
      <h2>Game Fetch</h2>
    </div>
  );
}

export default GameFetch;
