import React from 'react'

function gameCard({game}) {
    return (
       <article className="">
        <a href={game.url}
        target="_blank"
        rel="noreferrer">
            <figure>
                <img
                src={game.image_url}
                alt="Game Image"  />
            </figure>
            <h3>{game.title}</h3>
        </a>
       </article>
    )
}

export default gameCard
