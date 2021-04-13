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
        name: results.name,
        rating: results.rating,
        released: results.released,
        background_image: results.background_image,
        esrb_rating: results.esrb_rating.name,
        description: results.description_raw,
        website: results.website,
      };
      return decodedResults;
    }
    //grand-theft-auto-v
    async function getGame() {
      let headers = new Headers({
        "User-Agent": "Team 4's App Project",
      });
      try {
        const params = new URLSearchParams({
          key: "df69e0f535954c1897d3d33f2c4169bf",
          // search: slug,
        });
        const url2 = `https://api.rawg.io/api/games?${params.toString()}`;
        const url = `https://api.rawg.io/api/games/${slug}?${params.toString()}`;
        const response = await fetch(url, { method: `GET`, headers: headers });
        const json = await response.json();
        console.log(json);
        // const { results } = json;
        // console.log(results);
        setGameFetch({
          isLoading: false,
          errorMessage: "",
          data: decodeGameData(json),
        });
      } catch (err) {
        console.log("An error has occurred!! DD:");
        console.error(err);
      }
    }

    getGame();
  }, [slug]);
  const { isLoading, errorMessage, data } = gameFetch;

  return [isLoading, errorMessage, data];
}
export default useGameItem;
