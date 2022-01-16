import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setSala,setDisable,reset } from "../../redux/salaSlice"; 
import { withRouter } from "react-router-dom";

const Sala = (props) => {

    const dispatch = useDispatch();
    const datos=useSelector(state=>state.salaLayout)
    const setSalaStore = () => { 
        dispatch(setSala({ id:props.id, name:props.name, capacity:props.capacity, row:props.row, column:props.column, disable:props.disable }));
        props.history.push(`/salaLayout/${props.id}/${props.row}/${props.column}`)
    };
    return (
        <tr className="bg-gray-800 text-gray-200">
            <td className="p-5">
                <div className="flex align-items-center">
                    <div className="ml-3">
                        <div className="">{props.name}</div>
                    </div>
                </div>
            </td>
            <td className="p-5">
                {props.capacity}
            </td>
            <td className="p-5 font-bold">
                {props.row}
            </td>
            <td className="p-5 font-bold">
                {props.column}
            </td>
            <td className="p-5 font-bold">
                {props.disable}
            </td>
            <td className="p-5">

                <button
                    type="button"
                    onClick={()=>setSalaStore()}
                    className="border border-green-600 bg-green-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-700 focus:outline-none focus:shadow-outline"
                >
                    Ver
                </button>
            </td>
            <td className="p-5">

                <Link
                    to={`/editarPeliculas/${props.id}`}
                    type="button"
                    className="border border-yellow-600 bg-yellow-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                >
                    Editar
                </Link>
            </td>
            <td className="p-5">
                <button
                    onClick={() => props.onDelete(props.id)}
                    type="button"
                    className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default withRouter(Sala);