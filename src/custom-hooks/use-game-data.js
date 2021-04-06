import React, { useState } from "react";

import { useEffect } from "react";

function useGameData(pageNum) {
  const [gameFetch, setGameFetch] = useState({
    isLoading: true,
    errorMessage: "",
    nextPage: null,
    data: null,
  });

  useEffect(() => {
    function decodeGameDate(results) {
      //Decode the Game data
      const decodedResults = results.map((item) => {
        return {
          id: item.id,
          slug: item.slug,
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
        const params = new URLSearchParams({
          key: "df69e0f535954c1897d3d33f2c4169bf",
          page: pageNum,
        });

        const url2 = `https://api.rawg.io/api/games?${params.toString()}`;
        const response = await fetch(url2, { method: `GET`, headers: headers });
        const json = await response.json();
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
  }, [pageNum]);

  const { isLoading, errorMessage, nextPage, data } = gameFetch;
  return [isLoading, errorMessage, nextPage, data];
}

export default useGameData;
