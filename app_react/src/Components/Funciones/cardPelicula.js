import React from "react";

const CardPelicula = (props) => {
  return (
    <div className="w-full mx-2 max-w-lg">
		<div className="flex flex-col">
			<div className="bg-white border border-white shadow-lg  rounded-2xl p-4 m-4">
				<div className="flex-none sm:flex w-max">
					<div className=" relative h-32 w-32   sm:mb-0 mb-3">
						<img src={`http://localhost:9090/uploads/${props.image}`} alt="imagen" className=" w-32 h-32 object-cover rounded-2xl"/>
					</div>
					<div className="flex-auto sm:ml-5 justify-evenly">
						<div className="flex items-center justify-between sm:mt-2">
							<div className="flex items-center">
								<div className="flex flex-col">
									<div className="w-full flex-none text-lg text-gray-600 font-bold leading-none">{props.name}</div>
									<div className="flex-auto text-lg text-gray-600 my-1 mt-4">
										<span className="mr-3 ">Director :</span><span>{props.director}</span>
									</div>
								</div>
							</div>
						</div> 
							<div className="flex pt-1 text-lg text-gray-600">
								<div className="flex-1 inline-flex items-center "> 
						         <p className="">Duracion : {props.duration}</p>
								</div>  
						 	</div>
							 <div className="flex-1 inline-flex items-center ">
							 <button
									type="button"
									onClick={()=>props.onSelectMovie(props.name,props.id)}
									className="border border-blue-600 bg-blue-600 text-white rounded-md px-3 py-1 my-2 transition duration-500 ease select-none hover:bg-blue-700 focus:outline-none focus:shadow-outline"
								>
									Seleccionar pelicula
								</button>
							 </div>
							 
						</div>
					</div>
				</div>
			</div>
		</div>  
  );
};

export default CardPelicula;
