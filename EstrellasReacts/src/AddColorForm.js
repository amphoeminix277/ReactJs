import React,{ useState } from 'react';
import { useColors } from "./ColorProvider";

export default function AddColorForm() {
    const { addColor } = useColors();
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000");
    const submit = e => {
        e.preventDefault();
        addColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    }
    
    return(
        <form onSubmit={submit}>            
            <input {...titleProps} type="text" placeholder="Titulo del color" required/>
            <input {...colorProps} type="color"/>
            <button>Add</button>
        </form>
    );
}

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange:event => setValue(event.target.value)},
        ()=> setValue(initialValue)
    ];
};