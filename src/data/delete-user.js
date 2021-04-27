import { db } from "./firebase";

function Deleteuser() {
    const [gameName, setgameName] = useState("");
    const [date, setDate] = useState("");

    const clicker = async () => {

        try{
           await db.collection("users").doc(gameName).delete();
           await db.collection("users").doc(date).delete();
            console.log(`Successfully deleted game at ${gameName} & ${date}`);
          } catch(err) {
            console.error(err);
          }
    };

    return (
        <div>
            <h3>delete game</h3>
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

export default Deleteuser;






try{
    await db.collection("users").doc(userId).delete();
    console.log(`Successfully deleted game ${userId}`);
} catch(err){
    console.log(err);
}