import React from "react";

function sidebar({ topGame }) {
  return (
    <aside>
      <div>
        <nav>
          <h3>Top Games</h3>
          {topGame.map(game =>(

          <a href={game.url} target="_blank" key={game.mal_id} rel="noreferrer">
            {game.title}
          </a>

          ))}
        </nav>
      </div>
    </aside>
  );
}

export default sidebar;
