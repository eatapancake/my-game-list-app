import { useState, useEffect } from "react";
import axios from "axios";

// const Axios = () => {
//   const [game, setGames] = useState([]);

//   useEffect(() => {
//     axios.get(`/api/game/3030-79087/?api_key=dc2056c71aa4a38a1452d90cfca7194e4dd23b31
//         `);
//   });
// };

function GameFetch() {
  useEffect(() => {
    async function main() {
      console.log("Fetch initiated..! 🦴");
      try {
        // axios.get(`/api/game/3030-79087/?api_key=dc2056c71aa4a38a1452d90cfca7194e4dd23b31
        // `);

        const url =
          "https://www.giantbomb.com/api/game/3030-79087/?api_key=dc2056c71aa4a38a1452d90cfca7194e4dd23b31";
        // const response = await fetch(url, { mode: `no-cors` });
        const response = await fetch(url);
        console.log(response);
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
