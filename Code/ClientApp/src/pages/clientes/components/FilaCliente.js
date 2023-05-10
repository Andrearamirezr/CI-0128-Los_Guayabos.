import { useNavigate } from 'react-router-dom'
{/* Componente para agregar filas a la tabla de productos del inventario 
  * Se recibe por parametro todos los datos de un producto */ }

function FilaInventario(props) {
    const navigate = useNavigate();

    const detallesProducto = e => {
        e.preventDefault();
        {/*navigate('detalles/'+toString(props.sku));*/ }
        navigate('detalles/1');
    };
    return (
        <tr onClick={ detallesProducto }>
            <th scope="row">{ props.sku }</th>
            <td>{ props.categoria }</td>
            <td>{ props.descripcion }</td>
            <td>{ props.peso }</td>
            <td>{ props.color }</td>
            <td>{ props.cantidad }</td>
            <td>{ props.disponibles }</td>
        </tr>
    );
}

export default FilaInventario;