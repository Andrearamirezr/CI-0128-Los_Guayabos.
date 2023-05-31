import '../Inventario.css'
import FilaInventario from './FilaInventario'
import { useEffect, useState } from 'react'

{/* Componente para mostrar la tabla de productos del inventario. */ }
const TablaInventario = (props) => {
    const [productos, setProductos] = useState([])

    const mostrarProductos = async () => { 
        const response = await fetch("api/producto/obtener")
        if (response.ok) {
            const data = await response.json()
            setProductos(data)
        } else {
            console.log("error al obtener productos")
        }
    }

    useEffect(() => {
        mostrarProductos()
    },[])

    return (
        <div className="table-responsive mx-3 rounded-4 text-center">
            <table className="table table-color">

                {/* Encabezado de la tabla */}
                <thead className="th-color">
                    <tr>
                        <th scope="col">SKU</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Peso (g)</th>
                        <th scope="col">Color</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Se itera sobre los productos de la base de datos con la funcion map 
                      * para mostrarlos en la tabla utilizando el componente FilaInventario */}
                    {
                        (productos.length < 1) ? (
                            <tr>
                                <td colSpan="7">No hay productos para mostrar</td>
                            </tr>
                        ) : (
                            productos.map((item) => (
                                <FilaInventario
                                    id={ item.id }
                                    sku={ item.sku }
                                    categoria={ item.categoria }
                                    descripcion={ item.descripción }
                                    peso={ item.peso }
                                    color={ item.color }
                                    cantidad={ item.cantidadTotal }
                                    disponibles={ item.cantidadDisponible } />
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TablaInventario;