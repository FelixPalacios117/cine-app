import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDisable } from "../../redux/salaSlice";

const Box = ({ f, c }) => {
    const disableBox = useSelector((state) => state.salaLayout.disable);
    let array = disableBox.split(',')
    const dispatch = useDispatch()

    const [color, setColor] = useState("libre")
    const onclick = () => {
        let isDisable = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === f + c) {
                isDisable=true;
                //delete array[i];
                //console.log(array) 
                console.log(array)
                setColor("libre")
                dispatch(setDisable(array.toString()))
            }
        }
        if (!isDisable) {
            array.push(f + c)
            dispatch(setDisable(disableBox + f + c + ','))
            console.log(disableBox)
            setColor("ocupado")
        }

    }
    return (
        <>
            <button onClick={() => onclick()}
                className={`w-9 h-8  mr-4 text-md    text-white text-center
             transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline
             ${color === "libre" ? "bg-blue-800 " : " "} ${color === "ocupado" ? "bg-orange-700 " : " "}`}>
                <h1 className="p-1" >
                    {f}{c}
                </h1>
            </button>
        </>
    );
}
export default Box;
