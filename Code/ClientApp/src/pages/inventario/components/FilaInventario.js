import { useNavigate } from 'react-router-dom'
import { BiEdit } from "react-icons/bi"

function FilaInventario(props) {
    const navigate = useNavigate();

    const detallesProducto = e => {
        e.preventDefault();
        navigate('detalles/'+props.id);
    };

    const editar = e => {
        e.preventDefault();
        navigate('editar/'+props.id);
    };

    return (
        <tr>
            <th scope="row" onClick={detallesProducto}>{ props.sku }</th>
            <td onClick={detallesProducto}>{ props.categoria }</td>
            <td onClick={detallesProducto}>{ props.descripcion }</td>
            <td onClick={detallesProducto}>{ props.peso }</td>
            <td onClick={detallesProducto}>{ props.color }</td>
            <td onClick={detallesProducto}>{ props.cantidad }</td>
            <td onClick={detallesProducto}>{props.disponibles}</td>
            <td>
                <button className="bt-cancelar ps-3 shadow-sm" onClick={editar} >
                    Editar<BiEdit className="i-cancelar m-1 ms-3" />
                </button>
            </td>
        </tr>
    );
}

export default FilaInventario;