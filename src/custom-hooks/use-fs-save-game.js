import { useState } from "react";
import { db } from "../data/firebase";

function useFsSaveGame() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (gameData, userId, gameId) => {
    setIsSaving(true);
    setFormMessage("");
    try {
      if (gameId === undefined) {
        await db
          .collection("users")
          .doc(userId)
          .collection("games")
          .add(gameData);

        setFormMessage("Success...?");
      } else {
        await db
          .collection("users")
          .doc(userId)
          .collection("games")
          .doc(gameId)
          .set(gameData);
        // await db.doc(userId).collection("games").doc(gameId).set(gameData);
      }

      console.log("Saved");
    } catch (error) {
      setFormMessage("Something went wrong. Please try againnnnn");
      console.error(error);
    }

    setIsSaving(false);
  };
  return [save, isSaving, formMessage];
}
export default useFsSaveGame;
