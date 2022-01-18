import React from "react";

const CardSala = () => {
  return (
    <>
      <div className="">
        <div className="bg-white  shadow-lg   mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-105 cursor-pointer">
          <div className="bg-indigo-500  flex h-20  items-center">
            <h1 className="text-white ml-4 border-2 py-2 px-4 rounded-full">
              1
            </h1>
            <p className="ml-4 text-white uppercase">Titbnle</p>
          </div>
          <p className="py-6 px-6 text-lg tracking-wide text-center">
            Description Goes here
          </p>
          <div className="flex justify-center px-5 mb-2 text-sm ">
            <button
              type="button"
              className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSala;
