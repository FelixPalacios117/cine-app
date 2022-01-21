import React, { useEffect, useState } from "react";
import Navbar from "../../Layouts/NavBar";
import axiosCliente from "../../Config/axiosCliente";
import { useSelector, useDispatch } from "react-redux";
import { setBoletos } from "../../redux/compraBoletosSlice";
import BoxS from "./boxS";

const SeleccionarAsientos = (props) => {
  let subtotal= useSelector((state) => state.compraBoleto.subtotal);
  const dispatch = useDispatch()
  const id = props.match.params.id;
  const row = props.match.params.row;
  const column = props.match.params.column;
  const disable = props.match.params.disable;
  const comprados = props.match.params.comprados;
  const precio="4.25" 
  const fila = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var stantx = [];
  var stanty = []; 
  const [sillas, setSillas] = useState([]);
  const [datos, setDatos] = useState({
    _id: "",
    horario: "",
    idSala: {
      _id: "",
      name: "",
      capacity: "",
      column: "",
      row: "",
      disable: "",
      createdAt: "",
      updateAt: "",
      __V: "",
    },
    createdAt: "",
    updatedAt: "",
    pelicula: {
      _id: "",
      name: "",
      duration: "",
      picture: "",
      classification: "",
      director: "",
      createdAt: "",
      updateAt: "",
    },
  });
  useEffect(() => {
    dispatch(setBoletos(comprados));
    getDatos();
    buildGrid();
  }, []);
  const getDatos = async () => {
    await axiosCliente.get(`/get-funcion/${id}`).then((res) => {
      console.log("res.data", res.data);
      setDatos(res.data);
      console.log("datos", datos);
    });
  };

  const GuardarSillas = async () => {
    /*     const ob = {
      disable: disable,
    };
    await axiosCliente.put(`/update-sillas/${id}`, ob).then((res) => {
      if (res.status === 200) {
        Swal.fire("Modificar sala", res.data.message, "success");
        props.history.push("/listaSalas");
      } else {
        Swal.fire("Modificar sala", res.data.message, "error");
        props.history.push("/listaSalas");
      }
    }); */
  }; //datos.idSala.r
  const handleSelect=(color)=>{
    if(color){
      console.log("si")
    }
  }
  const buildGrid = async () => {
    console.log("se ejecuta buildGrid ;", row);
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
        stantx.push(
          <BoxS
            disable={false}
            inUse={true}
            f={fila[i]}
            c={j}
            key={fila[i] + j}
            type=""
          >
            {" "}
          </BoxS>
        );
      }
      stanty.push(stantx);
      stantx = [];
    }
    if (disable !== "vacio") {
      disable.split(",").map((item) => {
        if (item.length === 3) {
          stanty[fila.indexOf(item[0])][item[1] + item[2]] = (
            <BoxS
              disable={true}
              f={fila[fila.indexOf(item[0])]}
              c={item[1] + item[2]}
              key={item}
              type=""
            >
              {" "}
            </BoxS>
          );
        } else {
          stanty[fila.indexOf(item[0])][item[1]] = (
            <BoxS
              disable={true}
              f={fila[fila.indexOf(item[0])]}
              c={item[1]}
              key={item}
              type=""
            >
              {" "}
            </BoxS>
          );
        }
      });
    }
    if (comprados !== "vacio") {
      comprados.split(",").map((item) => {
        if (item.length === 3) {
          stanty[fila.indexOf(item[0])][item[1] + item[2]] = (
            <BoxS
              disable={false}
              inUse={true}
              f={fila[fila.indexOf(item[0])]}
              c={item[1] + item[2]}
              key={item}
              type=""
            >
              {" "}
            </BoxS>
          );
        } else {
          stanty[fila.indexOf(item[0])][item[1]] = (
            <BoxS
              disable={false}
              inUse={false}
              f={fila[fila.indexOf(item[0])]}
              c={item[1]}
              key={item}
              type="" 
            >
              {" "}
            </BoxS>
          );
        }
      });
    }
    setSillas(stanty);
    console.log(sillas);
  };

  return (
    <>
      <div className=" min-h-screen bg-gray-900">
        <Navbar className=" h-full" type={"comprar"} />
        <section className=" h-full">
          <div className="flex justify-center items-center my-4">
            <div className="grid grid-cols-12 py-8 px-24 w-full ">
              <div className="md:col-span-10 lg:col-span-3 bg-gray-800 flex pl-2 items-center text-white lg:text-lg lg:font-semibold sm:text-white sm:text-md font-semibold rounded-md">
                <h1 className="">
                  Pelicula seleccionada : {datos.pelicula.name}{" "} 
                </h1>
              </div>
              
              <div className="sm:col-span-10 lg:col-span-3 bg-gray-800 flex pl-2 items-center text-white text-lg rounded-md font-semibold mx-2">
                <h1 className="">Sala seleccionada : {datos.idSala.name} </h1>
              </div>
              <div className="col-span-4 flex pl-2 justify-evenly items-center mr-2  px-2 h-20 bg-gray-800 rounded-md">
                <h2 className="text-white font-semibold text-lg">Precio: $ {precio}</h2>
                <h2 className="text-white font-semibold text-lg">Subtotal: $ {subtotal} </h2>
              </div>
              <div className="col-span-2 flex pl-2 justify-evenly items-center  px-2 h-20 bg-gray-800 rounded-md">
                <button
                  onClick={GuardarSillas}
                  type="button"
                  to="/agregarSala"
                  className=" border border-blue-600 bg-blue-600 text-white rounded-md px-3 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                  Comprar boletos
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className=" ">
              {sillas.map((silla, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="flex flex-row w  w-full  pb-2">
                      {silla.map((item, index) => {
                        return [item];
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SeleccionarAsientos;
