import React, {useState} from 'react';

const Box = (props) => {
    const [value] = useState(props.value);
    const [key] = useState(props.id)

    const style = {
        border: "3px solid black",
        fontSize: "40px",
    }


    return (
        <div >
            <button
                id={key}
                onClick={props.onClick}
                name={key}
                style={style}
            >{value}</button>
        </div>
    )

}

export default Box;
