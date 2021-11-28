import React, {useState} from 'react';

const Box = (props) => {

    const [key] = useState(props.id)


    const style = {
        border: "3px solid black",
        fontSize: "40px",
    }

     const  onClick = () => {
         props.onClick(props.value)
     }

    return (
        <div >
            <button
                id={key}
                onClick={onClick}
                name={key}
                style={style}
            > {props.value}</button>
        </div>
    )

}

export default Box;
