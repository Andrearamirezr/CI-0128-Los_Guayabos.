import { useNavigate } from 'react-router-dom'
import { BiEdit } from "react-icons/bi"
function FilaOrden(props) {
    const navigate = useNavigate();

    const detallesOrden = e => {
        e.preventDefault();
        navigate('detalles/'+props.id);
    };

    const editarOrden = e => {
        e.preventDefault();
        navigate('editar/' + props.id);
    };

    return (
        <tr>
            <th scope="row" onClick={detallesOrden}>{ props.consecutivo }</th>
            <td onClick={detallesOrden}>{ props.cliente }</td>
            <td onClick={detallesOrden}>{ props.estado }</td>
            <td onClick={detallesOrden}>{ props.ordenados }</td>
            <td onClick={detallesOrden}>{ props.sinUsar }</td>
            <td onClick={detallesOrden}>{ props.usados }</td>
            <td onClick={detallesOrden}>{ props.devueltos }</td>
            <td onClick={detallesOrden}>{props.fechaAlquiler}</td>
            <td onClick={editarOrden}>
                <button className="bt-cancelar ps-3 shadow-sm" onClick={editarOrden} >
                    Editar<BiEdit className="i-cancelar m-1 ms-3" />
                </button>
            </td>
        </tr>
    );
}

export default FilaOrden;