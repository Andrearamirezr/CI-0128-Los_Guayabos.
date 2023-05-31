import { useNavigate } from 'react-router-dom'
{/* Componente para agregar filas a la tabla de ordenes 
  * Se recibe por parametro todos los datos de una orden */ }

function FilaOrden(props) {
    const navigate = useNavigate();

    const detallesOrden = e => {
        e.preventDefault();
        navigate('detalles/'+props.id);
    };
    return (
        <tr onClick={ detallesOrden }>
            <th scope="row">{ props.consecutivo }</th>
            <td>{ props.cliente }</td>
            <td>{ props.estado }</td>
            <td>{ props.ordenados }</td>
            <td>{ props.sinUsar }</td>
            <td>{ props.usados }</td>
            <td>{ props.devueltos }</td>
            <td>{ props.fechaAlquiler }</td>
        </tr>
    );
}

export default FilaOrden;