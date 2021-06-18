import { useState } from "react";

const InputText = () => {

    const [name, setName] = useState('');
    const handlename = (event) => {
        setName(event.target.value);
    };
    
    console.log('current', name);

    return (
        <input 
        onChange = {(event) => handlename(event)}
        type = "text"
        value = {name} />
    );

};

export default InputText;