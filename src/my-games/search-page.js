import React from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../common/loading-spinner";
import ErrorMessage from "../common/error-message";
import DisplayGames from "../all-games/display-games";
import useGameSearchPage from "../custom-hooks/use-game-search-page";

function SearchPage() {
  let { slug } = useParams();
  const [isLoading, errorMessage, data] = useGameSearchPage(slug);

  let contents;
  if (isLoading) contents = <LoadingSpinner />;
  else if (errorMessage !== "")
    contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
  else contents = <DisplayGames gameData={data} />;

  return <div>{contents}</div>;
}

export default SearchPage;
