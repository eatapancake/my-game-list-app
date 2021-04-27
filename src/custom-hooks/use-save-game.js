import { useState } from "react";
import { db } from "../data/firebase";

function useSaveGame() {
  const [isSaving, setIsSaving] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const save = async (plantData, userId, plantId) => {
    setIsSaving(true);
    setFormMessage("");
    try {
      if (plantId === undefined) {
        await db.doc(userId).collection("plants").add(plantData);
      } else {
        await db.doc(userId).collection("plants").doc(plantId).set(plantData);
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
export default useSaveGame;
