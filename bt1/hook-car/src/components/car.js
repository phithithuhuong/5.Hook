import {useEffect, useState} from "react";

export default function Car(){
    let [selectCar,setSelected]= useState("1");
    let [valueCar,setValueCar]=useState('')
    const choose =e=>{
        setSelected(e.target.value)
    }

    useEffect(()=>{
        switch (selectCar){
            case "0":
                setValueCar("Mercedes");
                break;
            case "1":
                setValueCar("Honda");
                break;
            case "2":
                setValueCar("Toyota");
                break;
            case "3":
                setValueCar("Mazda");
                break;
            case "4":
                setValueCar("Rol-royce");
                break;
            default:
        }
    },[selectCar])
    return (
        <>
            <div>
                <select onChange={ e =>{
                    choose(e)
                }}>
                    <option value="0">Mercedes</option>
                    <option value="1">Honda</option>
                    <option value="2">Toyota</option>
                    <option value="3">Mazda</option>
                    <option value="4">Rol-royce</option>
                </select >
                <h1> Your selector:{valueCar}
                </h1>
            </div>
        </>
    )
}