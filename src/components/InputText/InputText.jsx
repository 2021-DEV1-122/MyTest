import React ,{useState} from 'react';

const InputText = () => {
    const [inputValue, setInputValue] = useState(0);


    const handleChange = ev => {
        setInputValue(ev.target.value)
    }

    return (
        <div>
            <input
                   onChange={handleChange}
                   value={inputValue}
                   type="text"
                   name="input-value"
            />
        </div>
    )

}

export default InputText;
