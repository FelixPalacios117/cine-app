import React, { useEffect } from "react";
import Navbar from "../../Layouts/NavBar";
import { useState } from "react";
import axiosCliente from "../../Config/axiosCliente";
import { useSelector, useDispatch } from "react-redux";
import BoxS from "./boxS";

const SeleccionarAsientos = (props) => {
   
  let id= props.match.params.id; 
  let a="a"
  const fila = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var stantx = [];
  var stanty = [];
  const [sillas, setSillas] = useState([]);
  const [datos, setDatos] = useState({});
  const { idFuncion, seleccionBoletos } = useSelector(
    (state) => state.compraBoleto
  );
  useEffect(() => {
     getDatos();
     a="kk"
  }, [a]);
  const getDatos = async () => {
    axiosCliente.get(`/get-funcion/${id}`).then((res) => {
      console.log('res.data',res.data);
      setDatos(res.data); 
      console.log('datos',datos)
    });
    // buildGrid();
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
  const buildGrid = async () => {
    /*     for (let i = 0; i < datos.idSala.row; i++) {
      for (let j = 0; j < datos.idSala.column; j++) {
        stantx.push(
          <BoxS disable={false} f={fila[i]} c={j} key={fila[i] + j} type="">
            {" "}
          </BoxS>
        );
      }
      stanty.push(stantx);
      stantx = [];
    }
    if (datos.idSala.disable) {
        datos.idSala.disable.split(",").map((item) => {
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
    setSillas(stanty); */
  };

  return (
    <>
      <div className=" min-h-screen bg-gray-900">
        <Navbar className=" h-full" type={"comprar"} />
        <section className=" h-full">
          <div className="flex justify-center items-center my-4">
            <button
              onClick={GuardarSillas}
              type="button"
              to="/agregarSala"
              className=" border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            >
              Comprar
            </button>
          </div>
          <div className="flex justify-center items-center">
            {console.log("xx" +(datos))}
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
