import { useParams } from "react-router-dom";
import ErrorMessage from "../common/error-message";
import LoadingSpinner from "../common/loading-spinner";
import useGameItem from "../custom-hooks/use-game-item";

function GameDetails() {
  let { slug } = useParams();

  if (slug === "") {
    console.log("ERROR: There is no ID in the URL");
    slug = "grand-theft-auto-v";
  }
  console.log(`This ID for the current game is: ${slug}`);

  const [isLoading, errorMessage, data] = useGameItem(slug);

  console.log(data);

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else {
    contents = (
      <div>
        <h1>{data.name}</h1>
        <form>
          <img
            id={data.name}
            src={data.background_image}
            alt={data.name}
            width="800"
          />
          <p>Release Date: {data.released}</p>
          <p>Summary: </p>
          {data.description}
          <p>Overall Rating: {data.rating} </p>
        </form>
      </div>
    );
  }

  return <div>{contents}</div>;
}

export default GameDetails;
