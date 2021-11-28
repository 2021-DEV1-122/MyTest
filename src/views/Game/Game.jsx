import React, {useCallback, useState} from 'react';
import {useLocation} from "react-router-dom";
import Board from "../../components/Board/Board";
import useForceUpdate from "use-force-update";

const Game = (props) => {

    const location = useLocation()
    const {player1} = location.state
    const {player2} = location.state
    const [board,setBoard] = useState(Array(9).fill("."));
    let [currentPlayer,setCurrentPlayer] = useState(player1);
    let [currentSymbole,setCurrentSymbole] = useState("X");

    const handleInput =  (pos) => {
        let boardCopy = [...board];
        boardCopy[pos] = getSymbole();
        setBoard(boardCopy);





    }

    const nextPlayer = () => {
        return currentPlayer == player1 ? player2 : player1 ;
    }

    const getSymbole = () => {
        return currentPlayer == player1 ? "X" : "O"
    }

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
                    <Board onClick={handleInput} value={board} />
                </div>

            </div>
        </div>
    );

}

export default Game;
