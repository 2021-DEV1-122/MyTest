import React ,{useState} from 'react';

const InputText = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [key] = useState(props.id)
    const [placeholder] = useState(props.placeholder)
    const [title] = useState(props.title)

    const handleChange = ev => {
        setInputValue(ev.target.value)
    }

    return (


    <div className="form-group">
        <label htmlFor={key}>{title}</label>
        <input
            className="form-control"
            id={key}
            placeholder={placeholder}
            onChange={handleChange}
            value={inputValue}
            type="text"
            name="input-value"
        />
    </div>
    )

}

export default InputText;
