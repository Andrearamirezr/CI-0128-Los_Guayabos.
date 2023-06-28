import { useNavigate } from 'react-router-dom'
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