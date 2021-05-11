import { useState, useEffect } from "react";
import { db } from "../data/firebase";

function useFsAllGames(userID) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const usersCollection = db.collection("users");
  useEffect(() => {
    console.log("Fetching");

    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setGames(docs);
    };
    const onError = (error) => {
      setErrorMessage(
        "There was a problem loading your page. Please try again..."
      );
      console.error(error);
    };
    const unsubscribe = usersCollection
      .doc(userID)
      .collection("games")
      .orderBy("name", "desc")
      .onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return [games, isLoading, errorMessage];
}

export default useFsAllGames;
