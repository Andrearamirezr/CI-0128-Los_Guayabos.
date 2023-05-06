import './Inventario.css'
import TablaInventario from './components/TablaInventario'
import { useNavigate } from 'react-router-dom'

{/* Pagina principal del Inventario */}
const Inventario = () => {
    const navigate = useNavigate();

    const agregarProducto = e => {
        e.preventDefault();
        navigate('agregar');
    };
    return (
        <div className="container-fluid bg-inv min-vh-100">
            {/* Encabezado */}
            <div className="row my-4 px-4">

                {/* Barra de busqueda */}
                <div className="col-4">
                    <div class="input-group">
                        <input type="search" id="searchBar" class="form-control" placeholder="Buscar producto"/>
                        <button className="btn btn-color">Icon</button>
                    </div>
                </div>

                {/* Boton de filtros */}
                <div className="col">
                    <div className="dropdown">
                        <button class="btn btn-color dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="true">Ordenar por</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Categoria</a></li>
                            <li><a class="dropdown-item" href="#">Color</a></li>
                            <li><a class="dropdown-item" href="#">Descripcion</a></li>
                        </ul>
                    </div>
                </div>

                {/* Boton para agregar nuevo producto */}
                <div className="col-2 col-lg-1 mx-5">
                    <div className="button-group">
                        <button onClick={agregarProducto} className="btn btn-color">Agregar producto</button>
                    </div>
                </div>
            </div>

            {/* Tabla de productos */}
            <TablaInventario />
            
        </div>
    );
}

export default Inventario;