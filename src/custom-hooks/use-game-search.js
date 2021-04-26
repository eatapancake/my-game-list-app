import { useEffect, useState } from "react";

function useGameSearch(slug) {
  const [gameFetch, setGameFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  // useEffect(() => {
  //   function decodeGameData(results) {
  //     //Decode the Game data
  //     const decodedResults = results.map((item) => {
  //       return {
  //         id: item.id,
  //         slug: item.slug,
  //         name: item.name,
  //         summary: item.description,
  //         released: item.released,
  //         background_image: item.background_image,
  //         rating: item.rating,
  //       };
  //     });
  //     return decodedResults;
  //   }

  useEffect(() => {
    //grand-theft-auto-v
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
        const url = `https://api.rawg.io/api/games?${params.toString()}`;
        const response = await fetch(url, { method: `GET`, headers: headers });
        const json = await response.json();
        const { results } = json;
        console.log(results);
        setGameFetch({
          isLoading: false,
          errorMessage: "",
          data: decodeGameData(results),
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
export default useGameSearch;
