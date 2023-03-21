import {useEffect, useState} from "react";

 export default function Selector(){
    let [selector,setSelected]= useState("1");
    let [value,setValue]=useState('')
    const choose =e=>{
        setSelected(e.target.value)
    }

    useEffect(()=>{
        switch (selector){
            case "0":
                setValue("Java");
                break;
            case "1":
                setValue("Angular");
                break;
            case "2":
                setValue("Javascript");
                break;
            case "3":
                setValue("Php");
                break;
            default:
        }
    },[selector])
    return (
        <>
            <div>
                <select onChange={e=>{
                    choose(e)
                }}>
                    <option value="0">Java</option>
                    <option value="1">Angular</option>
                    <option value="2">Javascript</option>
                    <option value="3">Php</option>
                </select >
                <h1> Your selector:{value}
                </h1>
            </div>
        </>
    )
}