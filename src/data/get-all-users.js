import { db } from "./firebase";

  function GetAllUsers()
  {
      const clicker = async () => {
        try{
            const snapshot = await db.collection("users").where("games", "==", true).get();
            console.log(`Found ${snapshot.size}x user.`);
            const docs = snapshot.docs;
            docs.forEach((docSnapshot)=> {
        
              console.log(docSnapshot.id, docSnapshot.data());
            });
        
          } catch (err){
            console.error(err);
          }
        
          };

      
     return (
         <div>
             <h3>Reads all users</h3>
             <button onClick={clicker}>Read users</button>

         </div>

     );
  }
  
  export default GetAllUsers; 