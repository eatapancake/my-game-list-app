import { useEffect, useState } from "react";

function useGameItem(slug) {
  const [gameFetch, setGameFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    function decodeGameData(results) {
      //Decoding
      const decodedResults = {
        name: results[0].name,
        rating: results[0].rating,
        released: results[0].released,
        background_image: results[0].background_image,
      };
      return decodedResults;
    }

    async function getGame() {
      let headers = new Headers({
        "User-Agent": "Team 4's App Project",
      });
      try {
        const params = new URLSearchParams({
          key: "df69e0f535954c1897d3d33f2c4169bf",
          search: slug,
        });
        const url2 = `https://api.rawg.io/api/games?${params.toString()}`;
        const response = await fetch(url2, { method: `GET`, headers: headers });
        const json = await response.json();
        const { results } = json;
        console.log(results);
        setGameFetch({
          isLoading: false,
          errorMessage: "",
          data: decodeGameData(results),
        });
      } catch (err) {
        console.log("An error has occured!! DD:");
        console.error(err);
      }
    }

    getGame();
  }, [slug]);
  const { isLoading, errorMessage, data } = gameFetch;

  return [isLoading, errorMessage, data];
}
export default useGameItem;
