import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDisable } from "../../redux/salaSlice";

const Box = ({ disable, f, c }) => {
    let disableBox = useSelector((state) => state.salaLayout.disable).split(",");
    const dispatch = useDispatch()
    const [color, setColor] = useState(disable)
    const onclick = () => {
        if (color) {
            setColor(false)
            disableBox.splice(disableBox.indexOf(f + c), 1)
            dispatch(setDisable(disableBox.toString()))
        } else {
            setColor(true); 
            if(disableBox.toString().length<=1){
                dispatch(setDisable( f + c))
            }else{
                dispatch(setDisable(disableBox + ',' + f + c))
            }
           
        }
    }
    return (
        <>
            <button onClick={() => onclick()}
                className={`w-9 h-8  mr-4 text-md    text-white text-center
             transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline
             ${!color ? "bg-blue-800 " : " "} ${color ? "bg-orange-700 " : " "}`}>
                <h1 className="p-1" >
                    {f}{c}
                </h1>
            </button>
        </>
    );
}
export default Box;
