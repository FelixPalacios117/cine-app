import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBoletos } from "../../redux/compraBoletosSlice";

const BoxS = ({ disable, inUse, f, c }) => {
  let selectedBoxs = useSelector((state) => state.boletos.seleccionBoletos).split(",");
  const dispatch = useDispatch();
  const [color, setColor] = useState(inUse);
  const onclick = () => {
    if (color) {
      setColor(false);
      selectedBoxs.splice(selectedBoxs.indexOf(f + c), 1);
      dispatch(setBoletos(selectedBoxs.toString()));
    } else {
      setColor(true);
      if (selectedBoxs.toString().length <= 1) {
        dispatch(setBoletos(f + c));
      } else {
        dispatch(setBoletos(selectedBoxs + "," + f + c));
      }
    }
  };
  return (
    <>
      {disable ? (
        <button
          onClick={() => onclick()}
          className={`w-9 h-8  mr-4 text-md    text-white text-center
            transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline
            ${!color ? "bg-blue-800 " : " "} ${color ? "bg-orange-700 " : " "}`}
        >
          <h1 className="p-1">
            {f}
            {c}
          </h1>
        </button>
      ) : (
        <a className={`w-9 h-8  mr-4 `}></a>
      )}
    </>
  );
};
export default BoxS;
