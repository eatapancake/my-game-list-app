import { useState } from "react";
import { db } from "./firebase";

function UpdateUser() {
    const [gameName, setgameName] = useState("");
    const [date, setDate] = useState("");

    const clicker = async () => {

        try{
           await db.collection("users").doc(gameName).update({date});
            console.log(`Successfully added new user at ${gameName}`);
          } catch(err) {
            console.error(err);
          }
    };

    return (
        <div>
            <h3>updates game</h3>
            <label>
                game name: <input type="text" value={gameName} onChange={(e)=> setgameName(e.target.value)}/>
            </label>
            <label>
                date: <input type="text" value={date} onChange={(e)=> setDate(e.target.value)}/>
            </label>
            <button onClick={clicker}>update game</button>

        </div>
    );
}

export default UpdateUser;
