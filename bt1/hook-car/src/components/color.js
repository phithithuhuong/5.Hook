import {useEffect, useState} from "react";

export default function Color() {
    const [select, setSelect] = useState('0');
    const [color, setColor] = useState('');
    let choice = (e) => {
        setSelect(e.target.value)
    }


        useEffect(() => {
            switch (select) {
                case '0':
                    setColor('Black');
                    break;
                case '1':
                    setColor('Blue');
                    break;
                case '2':
                    setColor('Pink');
                    break;
                case '3':
                    setColor('Violet');
                    break;
                    case '4':
                    setColor('Green');
                    break;
            }

        },[color])
    return <>
        <select onChange={e=>{
            choice(e)
        }}>
            <option value="0">Black</option>
            <option value="1">Blue</option>
            <option value="2">Pink</option>
            <option value="3">Violet</option>
            <option value="4">Green</option>
        </select>
        <h1>Color is {color} </h1>
    </>
}