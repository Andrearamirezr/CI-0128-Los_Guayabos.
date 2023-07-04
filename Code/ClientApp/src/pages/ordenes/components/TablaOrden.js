import '../Ordenes.css'
import FilaOrden from './FilaOrden'
import { useEffect, useState } from 'react'

{/* Componente para mostrar la tabla de ordenes. */ }
const TablaOrden = (props) => {
    const [ordenes, setOrdenes] = useState([])

    const mostrarOrdenes = async () => { 
        const response = await fetch("api/orden/obtener")
        if (response.ok) {
            const data = await response.json()
            setOrdenes(data)
        } else {
            console.log("error al obtener las ordenes")
        }
    }

    useEffect(() => {
        mostrarOrdenes()
    },[])

    return (
        <div className="table-responsive mx-3 rounded-4 text-center">
            <table className="table table-color">

                {/* Encabezado de la tabla */}
                <thead className="th-color">
                    <tr>
                        <th scope="col">Consecutivo</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Ordenados</th>
                        <th scope="col">Sin usar</th>
                        <th scope="col">Usados</th>
                        <th scope="col">Devueltos</th>
                        <th scope="col">Fecha</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Se itera sobre las ordenes de la base de datos con la funcion map 
                      * para mostrarlos en la tabla utilizando el componente FilaOrden */}
                    {
                        (ordenes.length < 1) ? (
                            <tr>
                                <td colSpan="9">No hay ordenes para mostrar</td>
                            </tr>
                        ) : (
                            ordenes.map((item) => (
                                <FilaOrden
                                    id={ item.id }
                                    consecutivo={ item.consecutivo }
                                    cliente={ item.cliente }
                                    estado={ item.estado }
                                    ordenados={ item.ordenados }
                                    sinUsar={ item.sinUsar }
                                    usados={ item.usados }
                                    devueltos={ item.devueltos }
                                    fechaAlquiler={item.fechaAlquiler}
                                    />
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TablaOrden;