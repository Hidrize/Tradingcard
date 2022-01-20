import React from "react";
import Info from "./Info";
import Player from "./Player";


const Tradingcard = ({player}) => {

    return (
        <>
            <h4> {player.playerName} </h4>
            <Player   imageurl={player.imageurl}/>
            <Info     jerseyNumber={player.jerseyNumber} team={player.team} country={player.country} salary={player.salary}   />
        </>
    )
}

export default Tradingcard