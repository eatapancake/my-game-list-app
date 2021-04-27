import {useState} from "react";
import { db } from "./firebase";


/* 
async function createUser(user) 
{
  try{
    const docRef = await db.collection("users").add(user);
    console.log(`Successfully added new user at ${docRef.id}`);
  } catch(err) {
    console.error(err);
  }
}
createUser({
  gameName: "game test",
  date: "2000-04-12",
  gameImage: "",
  status: "Half done",
  ratingAll: 4,
  ratingUser: 7
}); 
*/

function CreateNewUser() {
    const [gameName, setgameName] = useState("");
    const [date, setDate] = useState("");
    const clicker = async () => {

        try{
            const docRef = await db.collection("users").add({
                gameName,
                gameImage,
                date,
                status,
                ratingAll,
                ratingUser,

            });
            console.log(`Successfully added new user at ${docRef.id}`);
          } catch(err) {
            console.error(err);
          }
    }


    return (
        <div>
        <div>
            <h3>Creating new input</h3>
            <label>
                game name:{" "} <input type = "text" value={gameName} onChange={(e) => setgameName(e.target.value)}/>
            </label>
            <label>
                data:{" "} <input type = "text" value={date} onChange={(e) => setDate(e.target.value)}/>
            </label>
        </div>
        <div>
            <button onClick={clicker}>Creates game </button>
        </div>

        </div>
    )
}

export default CreateNewUser;
