import '../Inventario.css'
import FilaInventario from './FilaInventario'

{/* Componente para mostrar la tabla de productos del inventario. */ }
function TablaInventario(props) {
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
                    <FilaInventario
                        sku="EC-07-1-JA"
                        categoria="Sopa"
                        descripcion="Sopa pequena"
                        peso="-"
                        color="JA"
                        cantidad="1500"
                        disponibles="750" />
                </tbody>
            </table>
        </div>
    );
}

export default TablaInventario;