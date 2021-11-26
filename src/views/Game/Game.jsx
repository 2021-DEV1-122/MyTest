import React from 'react';
import {useLocation} from "react-router-dom";

const Game = (props) => {

    const location = useLocation()
    const {player1} = location.state
    const {player2} = location.state

    return (

        <div class="col-md-4 col-md-offset-4">
            <h1>{player1}</h1>
            <h1>{player2}</h1>
        </div>
    );

}

export default Game;
