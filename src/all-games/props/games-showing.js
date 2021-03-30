import { useEffect, useState } from "react";
async function fetchJson(url) {
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Something went wrong, server responded with ${response.status}`
      );
    }
    
    const json = await response.json();
    return json;
}

function showGame()
{
    const [gameFetch, setgameFetch] = useState({
        isLoading: true,
        errorMessage: "",
    data: null,
  });

  //Empty array for dependencies means the effect only runs on mount.
  useEffect(() => {
    async function getGame() {
      try {
        const params = new URLSearchParams({name});
        if(name !== "")params.append("id",name );
        const url = `https://www.giantbomb.com/api/games/?api_key=d908835bc2b2060f94bad64e48a217b0ee716064`;
        //const url = `https://rawg.io/games/super-metroid`;
        const json = await fetchJson(url);
        const { status_code, results } = json;
        if (status_code === 1) {
          throw new Error("Bad API request - no results!");
        } else if (status_code === 2) {
          throw new Error("Bad API request - invalid parameter!");
        }
    

        //successfully passed all the error checks
        setgameFetch({
          isLoading: false,
          errorMessage: "",
          data: decodeData(results),
        });
      } catch (err) {
        setgameFetch({
          isLoading: false,
          errorMessage:
            "Something went wrong with the loading, please try again",
          data: null,
        });
        //displays specific error for debugging in the console
        console.error(err);
      }
    }

    getGame();
  }, []);
  const { isLoading, errorMessage, data } = gameFetch;
  return [isLoading, errorMessage, data];

}
export default showGame;