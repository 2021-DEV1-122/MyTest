import React, {useState} from 'react';
import Box from "../Box/Box";

const Board = (props) => {


    const style = {
        width: "250px",
        height: "250px",
        margin: "0 auto",
        display: "grid",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
    };
    return (
        <div style={style}>
            {[...Array(9)].map((_, pos) => <Box key={pos} onClick={() => props.onClick(pos)}
                                                value={props.value[pos]}/>)}
        </div>
    );
}

export default Board;
