import React, { useEffect, useState } from "react";
import Navbar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSala, setDisable, reset } from "../../redux/salaSlice";
import Box from "./box";
import axiosCliente from "../../Config/axiosCliente";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const SalaLayout = (props) => {

    const { id, row, column, disable,name} = useSelector(state => state.salaLayout)
    const fila = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var stantx = [];
    var stanty = [];
    const [sillas, setSillas] = useState([])
    useEffect(() => {
        if(id.length===0){
            props.history.push('/listaSalas') 
        } 
        buildGrid()
    }, [])
    const GuardarSillas=async()=>{ 
        const ob={
            disable:disable
        }
        await axiosCliente.put(`/update-sillas/${id}`,ob).then(res=>{
            if(res.status===200){
                Swal.fire(
                    'Modificar sala',
                    res.data.message,
                    'success'
                )
                props.history.push('/listaSalas') 
            }else{
                Swal.fire(
                    'Modificar sala',
                    res.data.message,
                    'error'
                )
                props.history.push('/listaSalas') 
            }
        })
    }
    const buildGrid = async () => {
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < column; j++) {
                stantx.push(
                    <Box disable={false} f={fila[i]} c={j} key={fila[i] + j} type=''>   </Box>
                );
            }
            stanty.push(stantx);
            stantx = [];

        }
        if(disable){
            disable.split(',').map(item => { 
                if(item.length===3){
                    stanty[fila.indexOf(item[0])][item[1]+item[2]] = <Box disable={true} f={fila[fila.indexOf(item[0])]} c={item[1]+item[2]} key={item} type=''>   </Box>
                }else{
                    stanty[fila.indexOf(item[0])][item[1]] = <Box disable={true} f={fila[fila.indexOf(item[0])]} c={item[1]} key={item} type=''>   </Box>
                }  
            })
        }
        setSillas(stanty)

    }

    return (
        <>
            <div className=" min-h-screen bg-gray-900">
                <Navbar className=" h-full" type={"sala"} />
                <section className=" h-full">
                    <div className="flex justify-center items-center my-4">
                        <h1 className="  text-white text-xl   text-center">{name}</h1>
                        <button 
                        onClick={GuardarSillas}
                        type="button"
                        to="/agregarSala"
                        className=" border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    >
                        Guardar
                    </button>
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
export default withRouter(SalaLayout);