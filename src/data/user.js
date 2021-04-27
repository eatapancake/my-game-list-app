
 function User({ data }) {

    return (
      <div>
        <p>
          ID: {data.id}
        </p>
        <p>
          {data.id} has {/* x amount of games in their list */}
        </p>
      </div>
    );
  }
  
  export default User;
  