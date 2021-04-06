import React from 'react'
import gameCard from './gameCard'

function mainContent(props) {
    return (
        <main>

            <div className="">
                <form className="search-box"
                onSubmit={props.HandleSearch}>
                    <input type="search"
                    placeholder="Search for a game.."
                    required
                    value={props.search}
                    onChange={e => props.SetSearch(e.target.value)}
                    />

                </form>

            </div>
            <div className="">
                {props.gameList.map(game => (

                 <gameCard
                 game={game}
                 key={game.mal_id}
                 />

                ))}


            </div>
        </main>
    )
}

export default mainContent
