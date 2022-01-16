import React, { useEffect, useState } from "react";
import Navbar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setSala,setDisable,reset } from "../../redux/salaSlice"; 
import Box from "./box";

const SalaLayout = (props) => {

    const { id, row, column, disable } = useSelector(state=>state.salaLayout)||props
    const fila='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var stantx = [];
    var stanty = [];
    const [sillas, setSillas] = useState([])
    useEffect(() => {
        buildGrid()
    }, [])

    const buildGrid = async () => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                stantx.push(
                    <Box f={fila[i]} c={j} key={i} type=''>   </Box>
                );
            }
            stanty.push(stantx);
            stantx = [];
           
        }
        setSillas(stanty)
    }

    return (
        <>
            <div className=" min-h-screen bg-gray-900">
                <Navbar className=" h-full" type={"sala"} />
                <section className=" h-full">
                    <div className="flex justify-center items-center my-4">
                        <h1 className="  text-white text-xl   text-center">Sala layout</h1>
                    </div>
                    <div className="flex justify-center items-center"> 
                        <div className=" ">
                            { 
                                
                                sillas.map((silla, index) => {
                                    return (
                                        <div key={index} className="flex">
                                            <div className="flex flex-row w  w-full  pb-2">

                                                {
                                                    silla.map((item, index) => { return ([item]) })
                                                }
                                            </div>

                                        </div>

                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default SalaLayout;