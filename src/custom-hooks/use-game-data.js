import { useState } from "react";

import { useEffect } from "react";

function useGameData(pageNum, order, filter) {
  const [gameFetch, setGameFetch] = useState({
    isLoading: true,
    errorMessage: "",

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
          summary: item.description,
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
        var params = new URLSearchParams({
          key: "df69e0f535954c1897d3d33f2c4169bf",
          page: pageNum,
          ordering: order,
          genres: filter,
        });

        if (filter === "") {
          params = new URLSearchParams({
            key: "df69e0f535954c1897d3d33f2c4169bf",
            page: pageNum,
            ordering: order,
          });
        }

        const url2 = `https://api.rawg.io/api/games?${params.toString()}`;
        const response = await fetch(url2, { method: `GET`, headers: headers });
        const json = await response.json();
        const { results } = json;
        console.log(data);
        // console.log(next);

        setGameFetch({
          isLoading: false,
          errorMessage: "",

          data: decodeGameDate(results),
        });
      } catch (err) {
        console.log("An error has occurred!! D:");
        console.error(err);
      }
    }
    main();
    // eslint-disable-next-line
  }, [pageNum, order, filter]);

  const { isLoading, errorMessage, data } = gameFetch;
  return [isLoading, errorMessage, data];
}

export default useGameData;
