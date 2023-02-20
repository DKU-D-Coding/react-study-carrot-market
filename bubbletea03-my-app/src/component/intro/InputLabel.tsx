import styled from "styled-components";

export default function InputLabel({text, name, value, onChange, type = "text"}) {
    return (
        <Label>
            <p>{text}</p>
            <input type={type} name={name} value={value} onChange={onChange}/>
        </Label>
    );
}

const Label = styled.label`
    display: block;
    margin: 5vh 0;
    
    p {
        margin: 0;
        margin-left: 10%;
        font-size: large;
    }
    
    input {
        display: block;
        width: 80%;
        height: 45px;
        margin: 0 auto;
        font-size: large;
        border: 1px solid black;
        border-radius: 10px;
    }
`