import React, { useState } from "react";

import { useEffect } from "react";

//Utility function
// function decodeGameDate(results) {
//   //Decode the trivia data HTML entities.
//   const decodedResults = results.map((item) => {
//     return {
//       id: item.id,
//       name: item.name,
//       released: item.released,
//       background_image: item.background_image,
//       rating: item.rating,
//     };
//   });
//   return decodedResults;
// }

//When I get one page showing, I'll work on getting another page working
function useGameData() {
  const [gameFetch, setGameFetch] = useState({
    isLoading: true,
    errorMessage: "",
    nextPage: null,
    data: null,
  });

  useEffect(() => {
    function decodeGameDate(results) {
      //Decode the trivia data HTML entities.
      const decodedResults = results.map((item) => {
        return {
          id: item.id,
          name: item.name,
          released: item.released,
          background_image: item.background_image,
          rating: item.rating,
        };
      });
      return decodedResults;
    }

    async function main() {
      let headers = new Headers({
        "User-Agent": "Team 4's App Project",
      });

      console.log("Fetch initiated..! 🦴");
      try {
        // const url =
        //   "https://www.giantbomb.com/api/game/3030-79087/?api_key=dc2056c71aa4a38a1452d90cfca7194e4dd23b31";
        // const response = await fetch(url, { mode: `no-cors` });
        // const payload = "";
        const url2 =
          "https://api.rawg.io/api/games?key=df69e0f535954c1897d3d33f2c4169bf";
        const response = await fetch(url2, { method: `GET`, headers: headers });
        const json = await response.json();
        // console.log(json);
        const { results, next } = json;
        // console.log(next);

        setGameFetch({
          isLoading: false,
          errorMessage: "",
          nextPage: next,
          data: decodeGameDate(results),
        });
      } catch (err) {
        console.log("An error has occured!! D:");
        console.error(err);
      }
    }
    main();
  }, []);

  const { isLoading, errorMessage, nextPage, data } = gameFetch;
  return [isLoading, errorMessage, nextPage, data];
}

export default useGameData;
