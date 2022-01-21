import React from "react";

const CardSala = (props) => {
  return (
    <>
      <div className="">
        <div className="bg-white  shadow-lg  border-b-4 border-indigo-500 rounded-2xl overflow-hidden">
          <div className="bg-indigo-500  flex h-16 justify-center  items-center"> 
            <p className="text-white flex">{props.name}</p>
          </div>
          <p className="py-6 px-6 text-lg tracking-wide text-center">
            Capacidad : {props.capacity}
          </p>
          <div className="flex justify-center px-5 mb-2 text-sm ">
            <button
              type="button"
              onClick={()=>props.onSelectSala(props.name,props.id)}
              className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
             Seleccionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSala;
