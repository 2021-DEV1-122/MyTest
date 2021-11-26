import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import Board from "../../components/Board/Board";

const Game = (props) => {

    const location = useLocation()
    const {player1} = location.state
    const {player2} = location.state
    const [board, setBoard] = useState(Array(9).fill(""));
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>{player1} : X</h1>
                </div>
                <div className="col-md-6">
                    <h1>{player2} : O</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    <Board value={board}></Board>
                </div>

            </div>
        </div>
    );

}

export default Game;
